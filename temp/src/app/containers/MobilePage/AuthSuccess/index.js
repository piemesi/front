import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import * as colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

import RequestTable from '../RequestTable'

// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../../actions'

const styles = {
    uploadButton: {
        verticalAlign: 'middle',
        border: '1px solid', borderRadius: '3px', marginTop: '35px',
        borderColor: colors.white,
        marginBottom: '27px',
        paddingBottom: '36px'
    }
}


class AuthPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    openRequestTable = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <h1>Вы успешно авторизовались</h1>

                <FlatButton fullWidth={true} onClick={this.openRequestTable}
                            label="Ваш запрос"
                            labelPosition="before"
                            labelStyle={{color: colors.white, textTransform: 'initial'}}
                            style={styles.uploadButton}

                            containerElement="label"
                />

                <Dialog
                    open={this.state.open}
                    title="Пароль отправлен"
                    actions={standardActions}
                    modal={false}
                    onRequestClose={this.handleRequestClose}
                    style={{padding: "0"}}
                >
                    <RequestTable />
                </Dialog>
            </div>
        )
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


export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
