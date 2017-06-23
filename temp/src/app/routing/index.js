import React from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import './routing.scss'
import base64 from 'base-64';

import Video from '../containers/Video'

const AnimationRouting = () => (
    <Router >
        <div>
        <Route exact path="/profile"
               // location={location}
               // key={location.key}

               component={HSL}
        />
        <Route render={({location}) => (
            <div style={styles.fill}>
                {/*<Route exact path="*" render={() => (*/}
                {/*<Redirect to="/page/1"/>*/}
                {/*)}/>*/}


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
                        <Route path="/"
                               location={location}
                               key={location.key}

                               component={HSL}
                        />


                    </CSSTransitionGroup>
                </div>
            </div>
        )}/>
        </div>
    </Router>
)

const NavLink = (props) => (
    <li style={styles.navItem}>
        <Link {...props} style={{color: 'inherit'}}/>
    </li>
)

import Page from '../containers/MobilePage'

const HSL = (props) => {
//
    const params = new URLSearchParams(props.location.search);
    const shift = params.get('shift'); // bar
    console.log('shift', shift)
    let dataO;

    let profile = params.get('profile') || null;
    console.log('profile', profile)

    let authVKHash = params.get('auth') || null;
    console.log('authVKHash', authVKHash)

    let cancelVK = params.get('cancel') || null;
    console.log('cancelVK', cancelVK)

    let later = params.get('later') || null;
    console.log('later', later)


    if (shift) {
        dataO = shift ? base64.decode(shift).toString() : null;

        window.sessionStorage.setItem("reqData", dataO);
    } else {

        dataO = window.sessionStorage.getItem("reqData");
        console.log('data origin from session', dataO)

    }

    // if (!authVKHash && !cancelVK && !profile) {
    //     dataO = shift ? base64.decode(shift).toString() : null;
    //
    //     window.sessionStorage.setItem("reqData", dataO);
    // } else {
    //
    //     dataO = window.sessionStorage.getItem("reqData");
    //     console.log('data origin from session', dataO)
    //
    // }

    console.log('data origin', dataO)
    let extData = dataO ? dataO.split(',') : null
    console.log('data origin arr', extData)

    let isAuthenticated = window.sessionStorage.getItem("tkn") || null

    const videos = [
        {
            // src: 'http://cdn.online-convert.com/example-file/video/mp4/example_2s.mp4',
            src: '/images/video.mp4',
            type: 'video/mp4'
        }
    ];
    return <Video overlayElement={<Page screenType='page' pageNum='first'
                                        extData={extData}
                                        authVKHash={authVKHash}
                                        cancelVK={cancelVK}
                                        later={later}
                                        isAuthenticated={isAuthenticated}
    />}

                  videos={videos}
                  orerlay={true}
                  loop={false}

    />
}


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

}

styles.nav = {}

styles.navItem = {}

styles.hsl = {}

export default AnimationRouting