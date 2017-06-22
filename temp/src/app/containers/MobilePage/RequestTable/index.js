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
                        <TableRowColumn>Смена</TableRowColumn>
                        <TableRowColumn>Курс</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
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
        getInitRoutes: bindActionCreators(getInitRoutes, dispatch),
        setCurrentPage: bindActionCreators(setCurrentPage, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RequestTable)