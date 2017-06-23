import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import * as colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

import RequestTable from '../RequestTable'

// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../../actions'

const styles = {
    uploadButton: {
        // verticalAlign: 'middle',
        borderBottom: '1px solid', borderRadius: '3px', marginTop: '35px',
        borderColor: colors.deepOrange800,
        marginBottom: '27px',
        paddingBottom: '36px'
    },
    buttonLabel:{        color: colors.deepOrange800,
        textTransform: 'initial'}
}


class AuthPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            success: this.props.success || true
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

        const standardActions = (
            <FlatButton label="Ok" secondary={true} onTouchTap={this.handleRequestClose}/>
        );

        const h1Style = {color:  this.props.muiTheme.palette.accent3Color} //this.props.success ? {color:  this.props.muiTheme.palette.accent3Color} : {color:  this.props.muiTheme.palette.accent1Color}

        let text = this.props.success ? 'Добро пожаловать в личный кабинет' :  `Авторизация недоступна. Попробуйте авторизоваться позже`

        let paperStyle = {...this.props.muiTheme.paperStyle}
       // paperStyle = !this.props.success ? {...paperStyle, background: colors.darkWhite} : paperStyle



        return (
            <div>

                <main className="sso-form">
                    <Paper style={paperStyle} zDepth={3} rounded={false}
                           className="sso-form__layout sso-form__login-form  sso-paper">
                    <h1 style={h1Style}>{text} </h1>

                        { this.props.success ?  <FlatButton fullWidth={true} onClick={this.openRequestTable}
                                                            label="Ваш запрос"
                                                            labelPosition="before"
                                                            labelStyle={styles.buttonLabel}
                                                            style={styles.uploadButton}

                                                            containerElement="label"
                        />
                        : <br/>
                        }


                    <Dialog
                        open={this.state.open}
                        title="Заявка отправлена"
                        actions={standardActions}
                        modal={false}
                        onRequestClose={this.handleRequestClose}
                        style={{padding: "0"}}
                    >
                        <RequestTable />
                    </Dialog>
                </Paper>
                </main>
            </div>
        )
    }
}



const withMui = muiThemeable()(AuthPage)

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


export default connect(mapStateToProps, mapDispatchToProps)(withMui)
