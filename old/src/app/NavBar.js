import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {blueGrey400} from 'material-ui/styles/colors';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import './components/HomePage/font.less';
import FontAwesome from 'react-fontawesome';

// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showSearch } from './actions'


class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login"/>
        );
    }
}

const style = {
    aLink: {
        textDecoration: 'none'
    }
};

const Logged = (props) => (

    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >


        <Link style={style.aLink} to="/home"><MenuItem primaryText="Home"/></Link>
        <Link style={style.aLink} to="/search"><MenuItem primaryText="Search"/></Link>
        <MenuItem primaryText="Sign out"/>

    </IconMenu>

);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class NavBarVar extends Component {
    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        let {  search} = this.props;
         console.log( this.props);
        console.log('-------------' );
        return (
            <div>
                <Toggle

                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={{margin: "20px 0", display:'none'}}
                />

                <AppBar
                    title={this.props.title}
                    iconElementLeft={<FontAwesome onClick={this.props.showSearch} spin="" size='2x' style={{marginLeft:"10px", marginTop:"5px",cursor:"pointer", color:blueGrey400}} name='search' />}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

        search: state.searchReducer
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        // addNewUser: bindActionCreators(addNewUser, dispatch),
        // newMessage: bindActionCreators(newMessage, dispatch),
        showSearch: bindActionCreators(showSearch, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBarVar)



