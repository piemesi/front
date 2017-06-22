import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
    deepOrange500, purple700, cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    purple500,
    white, darkBlack, fullBlack, lightBlue800, cyan800, cyan900
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';

import spacing from 'material-ui/styles/spacing';


import '../../../css/main.less'


import {} from 'material-ui/styles/colors';

import Paper from 'material-ui/Paper';


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */


// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitRoutes, getInitData, setCurrentPage, sendData} from '../../../actions'

const style = {

    width: "360px",
    padding: "0px 30px",
    background: white,
    borderRedius: "2px",

    // height: 100,
    // width: 100,
    // margin: 20,
    // textAlign: 'center',
    display: 'inline-block',
    textAlign: "left"
};
const styles = {
    uploadButton: {
        verticalAlign: 'middle',
        border: '1px solid', borderRadius: '3px', marginTop: '35px',
        borderColor: white,
        marginBottom: '27px',
        paddingBottom: '36px'
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
    rb: {
        width: "250px",
        borderRadius: "0px",
        height: "45px",


        background: "linear-gradient(180deg, #e24304, #C83b00)"
    },
    rbDiv: {
        backgroundColor: "none",
        height: "45px",

        // height:"100%",
    },
    rbRS: {
        // height:"60px",

    },
    rbLS: {

        height: "45px",
        lineHeight: "45px",
        letterSpacing: "0.7px",
        fontWeight: 400
    },
    h1: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '26px'
    },
    p: {
        color: "white",
        fontSize: "22px",
        fontWeight: "200"
    },
    clsBtn: {
        color: "grey"
    }
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
import DatePickerEx from './DatePickerEx';
import {Link, Redirect} from 'react-router-dom';

class StartPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.props.getInitRoutes();

        this.state = {
            open: this.props.page != 1,
        };
    }

    getInitDataFn() {
         this.props.getInitData({initDataUrl: this.props.initData['init_data_url']});
    }

    componentWillMount() {

        if (!this.props.initData['init_data_url']) {
            setTimeout(this.getInitDataFn.bind(this), 350)
        }


    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.setCurrentPage('1')
    };


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


    getExternalPage = () => {
        return this.props.initData['send_data_url'] || '/page_not_found';
    }

    handleClick   ()   {

        let link = this.props.sendData(this.props.pageData)

       // setTimeout(()=> link = this.props.pageData['link'], 350)

        let finalLink = this.getExternalPage()+'?shift='+link.link;
        console.log('redirect LINK', finalLink);



        // window.location = '/temp/';
        window.location.href = finalLink;

    }

    renderSecondPage = () => {
        this.props.setCurrentPage('2')
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

        const {initData} = this.props;
        // console.log('ct', initData);
        //
        // console.log('page', this.props.page);

        let closeBtn = <FlatButton
            label="Закрыть"
            // secondary={true}
            style={styles.clsBtn}
            onTouchTap={this.handleClose}
        />;

        if (this.props.page != 1) {
            closeBtn =  <FlatButton
                label="Закрыть"
                // secondary={true}
                style={styles.clsBtn}
                onTouchTap={this.handleClose}
            /> ;
        }

        console.log('currPage', this.props)

        let linkIs =
            <FlatButton onClick={this.renderSecondPage} style={{}} label="Отправить" secondary={true}/>


        if (this.props.page != "1") {
            linkIs =
                <FlatButton style={{}} onClick={this.handleClick.bind(this)} label="Отправить" secondary={true}/>
           //     <a href={this.getExternalPage()} target="_blank"></a>
        }

        const actions = [
            closeBtn,
            linkIs,
        ];

        return (

            <main className="sso-form">

                <div className="shiftInfo">
                    <p style={style.p}>13-26 мая 2017</p>
                    <h1 style={style.h1}>
                        Математическая смена
                    </h1>
                </div>
                <RaisedButton onTouchTap={this.handleOpen} label="Отправить заявку" secondary={true}
                              buttonStyle={styles.rb}
                              rippleStyle={styles.rbRS} labelStyle={styles.rbLS} style={styles.rbDiv}/>

                <Dialog
                    title={this.props.page == 2 ? 'Заявка на отбор в смену' : 'Заявка на работу в качестве куратора в период'}
                    actions={actions}
                    titleStyle={{
                        fontWeight: 300,
                        fontFamily: 'Geometria',
                        fontSize: "18pt",
                        lineHeight: "21pt",
                        marginTop: "35px",
                        textAlign: "left"
                    }}
                    modal={true}
                    style={{}}
                    actionsContainerStyle={{
                        paddingBottom: "20px"
                    }}
                    overlayClassName="dialog-overlay"
                    contentClassName="dialog-content"
                    className="dialog-root"
                    bodyClassName="dialog-body"
                    actionsContainerClassName="dialog-actions"
                    contentStyle={{
                        borderRadius: "0px",
                        width: "360px",
                        // padding: "0px 30px"
                    }}
                    open={this.state.open}
                >
                     {this.props.page == 1 ? <SelectFieldEx initData={initData}/> : <DatePickerEx />}



                </Dialog>


            </main>




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
        sendData: bindActionCreators(sendData, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StartPage)
 
