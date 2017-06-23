import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {
    deepOrange500, purple700, cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    purple500,
    white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fade} from 'material-ui/utils/colorManipulator';

import spacing from 'material-ui/styles/spacing';


import '../../css/main.less'
// import '../../assets/fonts/fonts.scss'


import './style.scss'

import './mobile.scss'


// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitRoutes, getInitData, getToken, setCurrentPage, setRequestData, sendSession} from '../../actions'

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif"
    },
    stepper: {
        textAlign: 'left',
        paddingTop: 20,
    },
    searchDiv: {
        display: "flex",
        alignContent: "start",

    },
    footerNav: {}
};

const muiTheme = getMuiTheme({
    // palette: {
    //     accent1Color: deepOrange500,
    //     textColor: cyan500,
    //
    // },
    palette: {
        accent1Color: deepOrange500,
        primary1Color: purple500, //cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
        // accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
    paperStyle: {
        width: "360px",
        padding: "0px 30px",
        background: "linear-gradient(-125deg, #792B8E, #532F91)",
        borderRadius: "2px",
        display: 'inline-block',
        textAlign: "left"
    }
});


import SelectFieldEx from './SelectField'
import RequestSentEx from './RequestSent'
import DatePicker from 'material-ui/DatePicker';

import Page1 from './Page1'

import Page2 from './Page2'
import Page3 from './Page3'
import Page_1 from './Page4'
import Page5 from './Page5'


import EmailPage from './EmailPage'
import AuthSuccess from './AuthSuccess'

import NotFound from '../NotFound'

import queryString from 'query-string'
import Header from "../../components/Header/index";

class StartPage extends Component {


    constructor(props, context) {
        super(props, context);
        this.sendSessionFn()
        // this.props.getInitRoutes();

        // let parsed = queryString.parse(history.location);

        if (this.props.extData) {
            this.props.setRequestData(this.props.extData)
        }


        this.state = {
            open: false,

            renderPage: {
                none: '',
                first: <Page_1 page="1"/>,
                email: <EmailPage page="1"/>,
                auth: <AuthSuccess page="1"/>,
                authError: 'error while auth',
                successPage: <AuthSuccess success={true}/>,
                later: <AuthSuccess success={false}/>,
                isAuthenticated: <AuthSuccess success={true}/>,
            }
        };


    }


    getInitDataFn() {
        this.props.getInitData(this.props.initData['init_data_url']);
    }

    sendSessionFn() {

        this.props.setCurrentPage('none')

        let isFirst = true;

        let promis = this.props.getInitRoutes()
        promis.then(response => {
            console.log('PROMISE INIT DATA DONE', response)

            if (this.props.isAuthenticated) {
                this.props.setCurrentPage('isAuthenticated')
                isFirst = false;
            }


            if (this.props.later) {
                this.props.setCurrentPage('later')
                isFirst = false;
            }


            if (this.props.cancelVK) {
                console.log('cancel VK!!!!!!!')
                this.props.setCurrentPage('first')
            } else if (this.props.authVKHash) {
                console.log('authVKHash!!!!!!!')
                // this.props.setCurrentPage('auth')
                isFirst = false;
                console.log('where to send', this.props.initData)
                let finalToken = this.props.sendSession(this.props.initData['send_data_url'], this.props.authVKHash);
                console.log('Final Token is', finalToken);
                finalToken.then(response => {

                    console.log('PROMISE SEND SESSION RESP', response)

                    let accessToken = response.value['access-token'] || null

                    if (!accessToken) {

                        window.location.href = '/?later=1'
                    } else {

                        window.sessionStorage.setItem('tkn', accessToken)
                        console.log('requestData requestData requestData', this.props.initData)
                        window.location.href = '?profile=1'

                    }
                })


            }
            if (isFirst) {
                this.props.setCurrentPage('first')
            }
        })


    }

    componentWillMount() {


        if (!this.props.initData['init_data_url']) {
            setTimeout(this.getInitDataFn.bind(this), 350)
        }
    }


    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    };


    render() {
        const standardActions = (
            <RaisedButton
                label="Ok"
                fullWidth={true}
                primary={true}
                onTouchTap={this.handleRequestClose}
            />
        );


        return (

            <div className="sso-box">


                <MuiThemeProvider muiTheme={muiTheme}>


                    <div className="page-wrap" style={{width: "100%", fontFamily: "'Roboto', sans-serif"}}>

                        <Header/>

                        {/*{this.props.currentPage.num}*/}
                        {this.state.renderPage[this.props.currentPage.num] || ''}


                        <footer className="sso-footer">
                            <div className="sso-footer__left-section">
                                <img className="sso-footer__left-section-em" src="/images/em.png"/>
                                <span className="sso-footer__left-section-text">
                                    При поддержке и координации <br/> Министерства образования и науки, Министерства спорта <br/> и Министерства культуры Российской Федерации.
                              </span>
                            </div>
                            <div className="sso-footer__right-section">
                                <span className="right-section-copy">
                                      © 2015-2017 Фонд «Талант и успех»
                                </span>
                            </div>
                        </footer>


                    </div>
                </MuiThemeProvider>
            </div>

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
        setRequestData: bindActionCreators(setRequestData, dispatch),
        getInitRoutes: bindActionCreators(getInitRoutes, dispatch),
        setCurrentPage: bindActionCreators(setCurrentPage, dispatch),
        getInitData: bindActionCreators(getInitData, dispatch),
        sendSession: bindActionCreators(sendSession, dispatch),
    }
}
import {withRouter} from 'react-router-dom'

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartPage))



