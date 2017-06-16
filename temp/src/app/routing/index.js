import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import './routing.scss'

const AnimationRouting = () => (
	<Router>
		<Route render={({ location }) => (
			<div style={styles.fill}>
				<Route exact path="/temp" render={() => (
					<Redirect to="/page/1"/>
                )}/>



				<div style={styles.content}>
					<CSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={300}
						transitionLeaveTimeout={300}
					>
                        {/* no different than other usage of
						 CSSTransitionGroup, just make
						 sure to pass `location` to `Route`
						 so it can match the old location
						 as it animates out
						 */}
						<Route
							location={location}
							key={location.key}
							path="/:screenType/:pageNum"
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

const HSL = ({ match: { params } }) => (

<Page screenType={params.screenType} pageNum={params.pageNum} />


)

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

export default AnimationRouting