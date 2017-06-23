import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as colors from 'material-ui/styles/colors';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';


import Dialog from 'material-ui/Dialog';

// import MaskedInput from 'react-text-mask'

import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';


// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitRoutes, getInitData, getToken, checkLogin, resendCode, sendCode} from '../../../actions'

const styles = {
    uploadButton: {
        verticalAlign: 'middle',
        border: 'none', borderRadius: '3px', marginTop: '35px',
        borderColor: colors.white,
        marginBottom: '27px',
        paddingBottom: '36px',
        letterSpacing: '0.7px',
        fontSize: '12px'

    },
    reSendButton: {
        verticalAlign: 'middle',
        border: 'none', borderRadius: '3px', marginTop: '5px',
        borderColor: colors.white,
        marginBottom: '27px',
        paddingBottom: '36px',
        letterSpacing: '0.7px',
        fontSize: '12px'

    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,

    },
};


const coolDownSecs = 5;


class EmailPage extends Component {

    constructor(props, context) {
        super(props, context);


        this.sendOnceAgain = <FlatButton
            fullWidth={true}
            onTouchTap={this.handleTouchTapReSend}
            label="Отправить пароль еще раз"
            labelPosition="before"
            labelStyle={{color: colors.deepOrangeA400}}
            style={styles.reSendButton}
            containerElement="label"
        />;


        this.fixedLogin = null

        this.state = {
            h1: <h1 className="form__title">
                Войдите <br/> для оформления заявки<br/>
            </h1>,
            open: false,
            inputField: "",
            errorText: '',
            floatingLabel: "E-mail или телефон",
            textFieldType: null,
            rbTitle: 'Далее',
            cooldownSeconds: null,//coolDownSecs,
            displayBottomText: false,
            bottomInfo: null,
            step: null
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    timerFn = () => {
        console.log('Props', this.props)
        let s = this.state.cooldownSeconds || this.props.initData['ttl']
        if (s > 1) {
            this.setState({
                cooldownSeconds: s - 1,
            });
        } else {
            clearInterval(this.timer);
            this.setState({
                displayBottomText: false,
                cooldownSeconds: null, //coolDownSecs,
                bottomInfo: this.sendOnceAgain
            });
        }
    }

    componentWillMount() {
        let promis = this.props.getToken(this.props.initData['send_data_url']);

        promis.then(response => {
            console.log('promise TOKEN RESP', response)

            let {value} = response;

            let step = value['next-step'] || value['current-step'] || null;
            let token = value['token'] || null;
            if (step !== 'login' || !token) {
                window.location.href = '/?later=1'
            }
        })

    }


    processSendLoginResponse = (promis, resend) => {
        promis.then(response => {
            let act = resend ? 'RESEND' : 'LOGIN'
            console.log('promise ' + act + ' RESP', response)

            let {value} = response;


            let error = value['error'] || null;
            let step = value['next-step'] || value['current-step'] || null;
            let method = value['method'] || null;
            let ttl = value['ttl'] || null;
            let eta = value['eta'] || null;

            if (error) {
                this.setState({errorText: 'Неверный формат [email или телефон]'})
                return;
            } else {


                if (!resend && (step !== 'code' || !(method === 'email' || method === 'phone') || !ttl)) {
                     window.location.href = '/?later=1'
                }

                if (resend && !eta) {
                    window.location.href = '/?later=1'
                }

                if (!resend) {
                    this.fixedLogin = this.state.inputField
                }
                setTimeout(() => {
                    this.setState({
                        h1: <h1 className="form__title">
                            Введите пароль<br/>
                            <span >который мы отправили {this.props.initData['method'] === 'phone' ? "на номер телефона" : "вам на"} {this.fixedLogin || this.state.inputField}</span>
                        </h1>,
                        open: true,
                        errorText: '',
                        textFieldType: 'password',
                        floatingLabel: 'Пароль',
                        rbTitle: "Войти",
                        displayBottomText: true,
                        bottomInfo: null,
                        step: 'code',
                        inputField: ''

                    });

                    this.timer = setInterval(this.timerFn, 1000);
                }, 250)

            }
        })
    }

    sendResendLogin = (resend = false) => {
        if (!resend && this.state.inputField.length < 7) {
            this.setState({errorText: 'Неверный формат'})
        } else {
            let promis = null;
            if (resend) {
                promis = this.props.resendCode(this.props.initData['send_data_url'], this.props.initData['token']);

            } else {
                promis = this.props.checkLogin(this.props.initData['send_data_url'], this.props.initData['token'], this.state.inputField);
            }
            this.processSendLoginResponse(promis, resend)

        }
    }

    handleTouchTapReSend = () => {
        this.sendResendLogin(true)
    }

    sendCode = () => {
        console.log('CODE IS', this.state.inputField)
        console.log('CODE IS2', this.fixedLogin)
        let promis = this.props.sendCode(this.props.initData['send_data_url'], this.props.initData['token'], this.state.inputField);

        promis.then(response => {
            console.log('promise CODE RESP', response)

            let {value} = response;

            if(!value) {
       //       window.location.href = '/?later=1'
            }

            let error = value['error'] || null;
            let step = value['next-step'] || value['current-step'] || null;
            let session = value['session'] || value['redirect'] || null;
            let ttl = value['ttl'] || null;
            let eta = value['eta'];


            if (step === 'token') {
                window.location.href = '/?later=1'
            }

            // return false;
            if (session) {


                let [, token = null] = session.split('=')
  console.log('TOKEN', token)

//                return false;
                if (!token || token.length < 3) {
                   window.location.href = '/?later=1'
                } else {
                    window.location.href = '/?auth=' + token
                }
            }

            if (error) {
                this.setState({errorText: 'Неверный код'})
                return false;
            } else {

                if (eta === false) {
                    console.log('era', eta)
                    setTimeout(() => {
                        this.setState({
                            h1: <h1 className="form__title" style={{color:colors.red500}}>
                                Время действия пароля истекло. <br/> Вы можете запросить пароль еще раз
                            </h1>,
                            // open: true,
                            errorText: '',
                            textFieldType: 'password',
                            floatingLabel: 'Пароль',
                            rbTitle: "Войти",
                            displayBottomText: true,
                            bottomInfo: null,
                            step: 'code',
                            inputField: '',
                            displayBottomText: false,
                            cooldownSeconds: null,
                            bottomInfo: this.sendOnceAgain

                        });
                        clearInterval(this.timer);
                        this.timer = setInterval(this.timerFn, 1000);
                    }, 350)
                }


            }
        })

    }

    handleTouchTap = () => {
        if (this.state.step === 'code') {
            this.sendCode(false)
        } else {
            this.sendResendLogin(false)

        }
    };

    _handleTextFieldChange = (e) => {
        this.setState({
            inputField: e.target.value
        });
    };

    render() {

        const standardActions = (


            <FlatButton label="Ok" secondary={true} onTouchTap={this.handleRequestClose}/>

        );


        return (
            <div>

                <main className="sso-form">
                    <Paper style={this.props.muiTheme.paperStyle} zDepth={3} rounded={false}
                           className="sso-form__layout sso-form__login-form  sso-paper">


                        {this.state.h1}

                        <TextField
                            hintText=""
                            floatingLabelText={this.state.floatingLabel}
                            // floatingLabelFixed={true}
                            floatingLabelStyle={{color: colors.grey500}}
                            hintStyle={{color: colors.white}}
                            fullWidth={true}
                            inputStyle={{color: colors.white}}
                            value={this.state.inputField}
                            onChange={this._handleTextFieldChange}
                            type={this.state.textFieldType}
                            errorText={this.state.errorText}
                        />


                        {/*<MaskedInput*/}
                        {/*guide={true}*/}
                        {/*mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}*/}
                        {/*placeholderChar="_"*/}
                        {/*/>*/}


                        <RaisedButton
                            label={this.state.rbTitle}
                            secondary={true}
                            fullWidth={true}
                            onTouchTap={this.handleTouchTap}
                            style={{
                                border: 'none', borderRadius: '5px', marginTop: "32px",
                                marginBottom: '30px'
                            }}
                        />


                        <Dialog
                            open={this.state.open}
                            title="Пароль отправлен"
                            actions={standardActions}
                            modal={false}
                            onRequestClose={this.handleRequestClose}
                            style={{padding: "0"}}
                        >на
                            указанный {this.props.initData['method'] === 'phone' ? 'номер телефона' : 'e-mail'}<br /><br />
                            <strong><u>{this.fixedLogin || this.state.inputField}</u></strong>

                        </Dialog>


                        <div onClick={this.handleTouchTap} style={{
                            marginBottom: "35px",
                            color: colors.grey500,
                            display: this.state.displayBottomText ? '' : 'none'
                        }}>Отправить пароль еще раз можно через {this.state.cooldownSeconds} секунд
                        </div>
                        {this.state.bottomInfo}

                    </Paper>
                </main>


            </div>
        );
    }
}

const withMui = muiThemeable()(EmailPage)

const mapStateToProps = (state) => {
    return {
        initData: state.initDataReducer,
        currentPage: state.pageReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getToken: bindActionCreators(getToken, dispatch),
        checkLogin: bindActionCreators(checkLogin, dispatch),
        resendCode: bindActionCreators(resendCode, dispatch),
        sendCode: bindActionCreators(sendCode, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withMui)