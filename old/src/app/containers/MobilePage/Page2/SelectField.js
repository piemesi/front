import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

import _ from 'lodash';



// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitRoutes, getInitData, setCurrentPage, setCourse, setShift} from '../../../actions'

/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
 class SelectFieldEx extends Component {


    constructor(props) {
        super(props);

        this.selected=false;

        let externalCourse = parseInt(this.props.pageData.course);

        this.items = this.props.initData.courseType.map((m) => {
            if(m.id === externalCourse){
                this.selected = true;
            }

            return <MenuItem value={m.id} key={m.id} primaryText={m.title}/>;
        });


        this.shiftItems = this.props.initData.shift.map((m) => {

            return <MenuItem value={m.id} key={m.id} primaryText={m.title + ' (' + m.ds + '-' + m.df + ')'}/>;
        });


        const currentCourse = this.props.choosenCourse || 1

        this.itemsCourseType = [];
        // let i = 0;

        this.dateNow = new Date().getTime();
        // console.log('timne',dateNow);

        let currentShiftSelected = null
        let shiftsInCourseTypes = {};
        // itemsCourseType = Object.keys(this.shiftItems).map((item, index) => {
        this.props.initData.shift.map((item, index) => {
            // search related book to author

            let dateDs = new Date(item.ds);
            if (this.dateNow > dateDs.getTime()) {
                return false;
            }

            shiftsInCourseTypes[item.course_type] = shiftsInCourseTypes[item.course_type] ? shiftsInCourseTypes[item.course_type] + 1 : 1;


            if (item.course_type === currentCourse) {


                currentShiftSelected = currentShiftSelected || item.id;
                this.itemsCourseType.push(<MenuItem value={item.id} key={item.id} primaryText={item.title}/>);
                // i++;
            }
        })
        ;


        let newArr = this.items.filter((i) => {
            return _.indexOf(shiftsInCourseTypes, i.id)
        })


        const finalItems = [];
        // console.log('items', this.items);
        Object.keys(shiftsInCourseTypes).map((item, index) => {
            console.log('item', item)
            let a = _.filter(this.items, {'key': item});
            finalItems.push(a);
        })


        // console.log('shiftsInCourseTypes',shiftsInCourseTypes)

        this.items = finalItems;
        // console.log('ct', finalItems);


        this.state = {
            value: currentCourse,
            shiftItems: currentShiftSelected,
            itemsCourseType: this.itemsCourseType
        };





    }

    componentDidMount() {
        this.props.setShift(this.state.shiftItems);
        if(this.selected) {
            console.log("this.props.pageData",this.props.pageData)

            this.changeCourseType(parseInt(this.props.pageData.course));//.bind(this)
        }


    }


    handleChange = (event, index, value) => {

        this.setState({shiftItems: value});
        this.props.setShift(value);
    };


    changeCourseType=(value)=>{

        console.log('courseSelected:',value)
        let currentShiftSelected = null
        this.itemsCourseType = [];
        this.props.initData.shift.map((item) => {
            // search related book to author
            if (item.course_type === value) {

                let dateDs = new Date(item.ds);
                if (this.dateNow > dateDs.getTime()) {
                    return false;
                }
                let dateDf = new Date(item.df);


                let options1 = {
                    // era: 'long',
                    // year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    // weekday: 'long',
                    // timezone: 'UTC',
                    // hour: 'numeric',
                    // minute: 'numeric',
                    // second: 'numeric'
                };

                let options2 = {
                    month: 'long',
                    day: 'numeric'

                };

                if (dateDs.getMonth() === dateDf.getMonth()) {
                    options1 = {
                        day: 'numeric'
                    };
                    options2 = {
                        month: 'long',
                        day: 'numeric'

                    };
                }

                let title = item.course_type == 7 ? dateDs.toLocaleString("ru", options1) + " - " + dateDf.toLocaleString("ru", options2) : item.title;

                currentShiftSelected = currentShiftSelected || item.id;
                this.props.setShift(currentShiftSelected);
                this.itemsCourseType.push(<MenuItem value={item.id} key={item.id} primaryText={title}/>);
                //+' ('+item.ds+'-'+item.df+')'
            }
        })


        // this.setState({value});

        this.setState({value: value, itemsCourseType: this.itemsCourseType, shiftItems: currentShiftSelected});

    }




    handleChangeDirection = (event, index, value) => {
        this.changeCourseType(value)
        this.props.setCourse(value);
    };

    render() {


        return (
            <div>
                <SelectField
                    floatingLabelText="Направление"
                    value={this.state.value}
                    onChange={this.handleChangeDirection}
                    maxHeight={200}
                    fullWidth={true}

                >
                    {this.items}
                </SelectField><br />
                <SelectField
                    floatingLabelText="Смена"
                    value={this.state.shiftItems}
                    onChange={this.handleChange}
                    maxHeight={200}
                    fullWidth={true}

                >
                    {this.state.itemsCourseType}
                </SelectField>
                {/*<TextField*/}
                {/*hintText="Hint Text"*/}
                {/*floatingLabelText="Floating Label Text"*/}
                {/*/><br />*/}

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        initData: state.initDataReducer,
        pageData: state.pageReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getInitRoutes: bindActionCreators(getInitRoutes, dispatch),
        getInitData: bindActionCreators(getInitData, dispatch),
        setCurrentPage: bindActionCreators(setCurrentPage, dispatch),
        setCourse: bindActionCreators(setCourse, dispatch),
        setShift: bindActionCreators(setShift, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectFieldEx)