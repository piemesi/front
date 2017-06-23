import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../../actions'

import _ from 'lodash'

class RequestTable extends Component {
    state = {
        selected: [0],
    };

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };

    render() {

        let [course,shift1,ds,df] = window.sessionStorage.getItem('reqData').split(',')

        let dsS = ds ? new Date(ds) : null
        let dfS = df ? new Date(df) : null

        let period = '';

        if(dsS && dfS) {
            period =  dsS.getDate()+'/'+dsS.getMonth() + ' - '+dfS.getDate()+'/'+dfS.getMonth()
        }

        let {courseType, shift} = this.props.initData

        let courseObj = _.find(courseType, {id:parseInt(course)})
        let shiftObj = _.find(shift, {id:parseInt(shift1)})

        let sName = shiftObj ? shiftObj.title : 'смена'
        let cName = courseObj? courseObj.title : 'курс'
        return (
            <Table onRowSelection={this.handleRowSelection}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Название смены</TableHeaderColumn>
                        <TableHeaderColumn>Курс</TableHeaderColumn>
                        <TableHeaderColumn>Даты</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow selected={this.isSelected(0)}>
                        <TableRowColumn>{sName}</TableRowColumn>
                        <TableRowColumn>{cName}</TableRowColumn>
                        <TableRowColumn>{period}</TableRowColumn>
                    </TableRow>

                </TableBody>
            </Table>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        initData: state.initDataReducer,
        currentPage: state.pageReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getInitRoutes: bindActionCreators(actions.getInitRoutes, dispatch),
        setCurrentPage: bindActionCreators(actions.setCurrentPage, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RequestTable)