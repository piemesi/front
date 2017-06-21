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
import {getInitRoutes, getInitData, getToken} from '../../actions'

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

import NotFound from '../NotFound'

class StartPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            renderPage:
                {"1":<Page_1 page="1"/>,
                    email:<EmailPage page="1"/>}
        };


    }

    componentWillMount(){
        this.props.getInitRoutes();
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

    renderPageFn() {




        const {pageNum, currentPage} = this.props;
console.log('ppp', this.props)

        switch (currentPage.num) {
            case '1':
                console.log('this Page is',this.props)
                return <Page_1 page="1"/>;
                break;
            case '2':
                return <Page5 page="5"/>;
                break;
            case '3':
                return <Page2 page="3"/>;
                break;
            case '4':
                return <Page1/>;
                break;
            case '5':
                return <Page2 page="2"/>;
                break;
            case 'email':
                return <EmailPage page="1"/>;
                break;
            default:
                return <NotFound/>;
                break;

        }
        //`$(this.props.pageNum)`


    }

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

                        <header className="sso-header">
                            <div className="sso-header__name">
                            <span className="name-main">
                                СИРИУС
                            </span>
                                <br/>
                                <span className="name-info">
                                ОНЛАЙН
                            </span>
                            </div>
                            <div className="sso-header__info">СРЕДА <br/> ДИСТАНЦИОННОГО <br/> ОБРАЗОВАНИЯ</div>
                        </header>


                        {this.state.renderPage[this.props.currentPage.num] || <NotFound/>}


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
        getInitRoutes: bindActionCreators(getInitRoutes, dispatch),
        // getInitData: bindActionCreators(getInitData, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StartPage)



