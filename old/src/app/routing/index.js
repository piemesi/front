import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import './routing.scss'



// REDUX
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitRoutes, getInitData, setCurrentPage, setCourse} from '../actions'


const AnimationRouting = () => (
	<Router>

		{/*<HSL match={{ params: { id: 0 }, url: '' }}/>*/}

        <Route render={({ location }) => (
			<div style={styles.fill}>
				{/*<Route exact path="*"*/}


				    {/*render={() => (*/}
					 {/*<Redirect to="/science/1"/>*/}
                  {/*)}*/}

				{/*/>*/}



				<div style={styles.content}>
					<CSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={100}
						transitionLeaveTimeout={100}
					>
                        {/* no different than other usage of
						 CSSTransitionGroup, just make
						 sure to pass `location` to `Route`
						 so it can match the old location
						 as it animates out
						 */}
						<Route path="*"
							location={location}
							key={location.key}
							// path="/:screenType/:pageNum"
							component={HSL}
						/>
					</CSSTransitionGroup>
				</div>
			</div>
        )}/>
	</Router>
)

const NavLink = (props) => (
	<li style={styles.navItem}>
		<Link {...props} style={{ color: 'inherit' }}/>
	</li>
)

import Page from '../containers/MobilePage'

const HSL = (props) => { //{ match: { params } }
    const params = new URLSearchParams(props.location.search);
    const course = params.get('course') || 0; // bar
    console.log('course',course)
	return <Page screenType='course-type' pageNum="1" course={course} />


}

//
// style={{
// ...styles.fill,
// ...styles.hsl,
//         background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
// }}

const styles = {}

styles.fill = {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}

styles.content = {
    ...styles.fill,
    // top: '40px',
    // textAlign: 'center'
}

styles.nav = {
    // padding: 0,
    // margin: 0,
    // position: 'absolute',
    // top: 0,
    // height: '40px',
    // width: '100%',
    // display: 'flex'
}

styles.navItem = {
    // textAlign: 'center',
    // flex: 1,
    // listStyleType: 'none',
    // padding: '10px'
}

styles.hsl  = {
    // ...styles.fill,
    // color: 'white',
    // paddingTop: '20px',
    // fontSize: '30px'
}



const mapStateToProps = (state) => {
    return {
        initData: state.initDataReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getInitRoutes: bindActionCreators(getInitRoutes, dispatch),
        getInitData: bindActionCreators(getInitData, dispatch),
        setCourse: bindActionCreators(setCourse, dispatch),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AnimationRouting)


