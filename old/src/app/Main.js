import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500, purple700} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarVar from './NavBar';



// REDUX


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


////

import SearchPage from './components/SearchPage/SearchPage'
import HomePage from './components/HomePage/HomePage'

import './css/main.less'
import FooterNav from './components/HomePage/FooterNav'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import SearchInput from './components/HomePage/Search/SearchInput';





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
    palette: {
        accent1Color: deepOrange500,
    },
});

//// Typography
import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography(lincolnTheme);
// console.log(typography);

// Output CSS as string.
// let typog = typography.toString()
// console.log(typog);

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
// typography.injectStyles()

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
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
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
            />
        );

        return (


                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className="page-wrap">
                        <div style={styles.container}>
                            <NavBarVar title="MyBar"/>


                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: "flex-start",
                                flexShrink: 0,
                                width: "100%",
                                alignItems: "stretch"
                            }}>
                                <div style={{width: '100%', flexGrow: '5'}}>
                                    <SearchInput />
                                </div>
                            </div>
                        </div>

                        <div style={styles.searchDiv} className="search-div">

                            <Route path='/' component={HomePage}>


                            </Route>
                            <Route path='/home' component={SearchPage}/>
                            <Route path='/search' component={SearchPage}/>
                            {/*<Route path='/img/:id' component={ImageView}/>*/}

                        </div>

                        <div style={styles.footerNav} className="footer">
                            <FooterNav offers={this.props.offers} />
                        </div>

                    </div>
                </MuiThemeProvider>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        offers: state.offersReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // addNewUser: bindActionCreators(addNewUser, dispatch),
        // newMessage: bindActionCreators(newMessage, dispatch),
        // selectNewOffer: bindActionCreators(selectNewOffer, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

