import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import  * as colors  from 'material-ui/styles/colors';

import {Link} from 'react-router-dom';
// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {setCurrentPage} from '../../actions'
const styles = {
    uploadButton: {
        verticalAlign: 'middle',
        border: '1px solid', borderRadius: '3px', marginTop: '35px',
        borderColor: colors.white,
        marginBottom: '27px',
        paddingBottom: '36px'
    }
}

class EmailPageBtn extends Component {

    renderEmailPage = () => {
        this.props.setCurrentPage('email')
    }

    render() {
        return (
            <FlatButton fullWidth={true} onClick={this.renderEmailPage}
                        label="Войти по e-mail или по телефону"
                        labelPosition="before"
                        labelStyle={{color: colors.white, textTransform: 'initial'}}
                        style={styles.uploadButton}

                        containerElement="label"
            />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        initData: state.initDataReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: bindActionCreators(setCurrentPage, dispatch),
        // getInitData: bindActionCreators(getInitData, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailPageBtn)