import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {lightBlue800, white, cyan800, cyan900} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */


import EmailPageBtn from '../EmailPageBtn';


// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitRoutes, getInitData, getToken} from '../../../actions'


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
};
 class LoginBlock extends Component {

    nextPage() {

    }


    vkPage = () => {
        let vkPage = this.props.initData['send_data_url'] || '/page_not_found';
        console.log('vkPage', vkPage)
        window.location.href = vkPage + '/social/vk/';
    }

    render() {

        const text = () => {
            return (this.props.page == 'first') ? 'Войдите для оформления заявки' : 'Войдите как родитель ученика ОЦ "Сириус"'
        }

        const nextPageLink = () => {
            return this.props.page == 'first' ? this.vkPage : "/mobile/6"
        };


        return (
            <div>

                <main className="sso-form">
                    <Paper zDepth={3} rounded={false} className="sso-form__layout sso-form__login-form sso-paper">
                        <h1 className="form__title">
                            Войдите <br/> для оформления заявки
                        </h1>


                        {/*<Link to={nextPageLink()}></Link>*/}
                        <RaisedButton
                            fullWidth={true}
                            // href="https://github.com/callemall/material-ui"
                            onClick={this.vkPage}
                            target="_blank"
                            label=" Войти"
                            labelColor={white}
                            labelStyle={{letterSpacing: "0.7px", fontSize:'13px'}}
                            buttonStyle={{border: 'none', borderRadius: '0px'}}
                            // secondary={true}
                            className="login-form__vk"
                            overlayStyle={{backgroundColor: "#507298", border: 'none', borderRadius: '0px', height:'38px'}}
                            icon={<FontAwesome className="vkIcon"  onClick={this.props.nextPage} name="vk" size="2x"
                                               style={{color: white, fontSize:'1.5em',     height: "30px"}}/>}
                        />
                        <div className="login-form__line">
                            <span>или</span>
                        </div>

                        <EmailPageBtn />


                    </Paper>
                </main>


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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBlock)
