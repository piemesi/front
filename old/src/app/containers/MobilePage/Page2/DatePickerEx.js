import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

import moment from 'moment';

import MenuItem from 'material-ui/MenuItem';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



import muiThemeable from 'material-ui/styles/muiThemeable';





// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitRoutes, getInitData, setCurrentPage, setCourse, setShift, setPeriod} from '../../../actions'




/** Ru-locale*/
import areIntlLocalesSupported from 'intl-locales-supported';
// import persianUtils from 'material-ui-persian-date-picker-utils';

// let DateTimeFormat;
let DateTimeFormat = global.Intl.DateTimeFormat;
/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['ru'])) {
    // DateTimeFormat = global.Intl.DateTimeFormat;

    DateTimeFormat = global.Intl.DateTimeFormat;
 } else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/ru');
    // require('intl/locale-data/jsonp/fa-IR');
}
 /** Ru-locale*/


const optionsStyle = {
    maxWidth: 255,
    marginRight: 'auto',
    display: 'flex',
    flexDirection:'row',
    justifyItems:'space-between',
    justifyContent:'space-between'
};

const datePickerItem = {
    width: 140,
    marginRight:'15px',
    textAlign: 'left'
};

/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
class DatePickerEx extends Component {
    constructor(props) {
        super(props);






            this.muiTheme = props.muiTheme
        // let today = moment();
        // const maxDate = moment(today).add(21, 'days');
        // const minDate = moment(today).add(1, 'days');


        const minDate = new Date();
        const maxDate = new Date();
        minDate.setDate(minDate.getDate()+1) //setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setDate(minDate.getDate()+22)//setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);
        this.state = {
            minDate: minDate,
            maxDate: maxDate,
            autoOk: true,
            disableYearSelection: false,
        };
        this.props.setPeriod({start: this.state.minDate.toString(), end:  this.state.maxDate.toString() })

    }

    handleChangeMinDate = (event, date) => {
        this.setState({
            minDate: date,
        });
        this.props.setPeriod({start:date.toString(), end:  this.state.maxDate.toString() })
    };

    handleChangeMaxDate = (event, date) => {
        this.setState({
            maxDate: date,
        });
        this.props.setPeriod({start: this.state.minDate.toString() , end:  date.toString()  })

    };

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };


    render() {
        return (
            <div>

                <div style={optionsStyle}>
                    <DatePicker
                        textFieldStyle={datePickerItem}
                        onChange={this.handleChangeMinDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="С"
                        defaultDate={this.state.minDate}
                        disableYearSelection={this.state.disableYearSelection}
                        locale="ru"
                        cancelLabel="Отменить"
                        DateTimeFormat={DateTimeFormat}

                    />
                    <DatePicker
                        textFieldStyle={datePickerItem}
                        onChange={this.handleChangeMaxDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="По"
                        defaultDate={this.state.maxDate}
                        disableYearSelection={this.state.disableYearSelection}
                        locale="ru"
                        cancelLabel="Отменить"
                        DateTimeFormat={DateTimeFormat}

                    />

                </div>



                 {/*<FlatButton onClick={this.handleClick} style={{marginLeft:'200px',marginTop:'30px',marginBottom:'20px'}} label="Отправить" secondary={true} />*/}

            </div>
        );
    }
    }


const withMui = muiThemeable()(DatePickerEx);


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
        setPeriod: bindActionCreators(setPeriod, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withMui)