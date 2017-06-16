import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Talant from './Talant'; // Our custom react component
import StartPage from './containers/StartPage'; // Our custom react component
import NotFound from './containers/NotFound'; // Our custom react component
import MobilePage from './containers/MobilePage'; // Our custom react component
import MobilePage1 from './containers/MobilePage/Page1'; // Our custom react component
import MobilePage2 from './containers/MobilePage/Page2'; // Our custom react component

// import createBrowserHistory from 'history/lib/createBrowserHistory';


// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
import {CSSTransitionGroup} from 'react-transition-group'


import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom';


// import {Router, browserHistory} from 'react-router'
import MyRoutes from './routing/index'


import {Provider} from 'react-redux'
import myStore from './store/index'
window.store = myStore;


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
    <MyRoutes />
    ,
    document.getElementById('app')
);
//<Router history={browserHistory} routes={Routes} />

/**
 <BrowserRouter>
 <div style={{display:'flex', flexDirection:'row', justifyItems:"space-between", alignContent:"flex-start"}}>

 <div>

 </div><div>
 {routes.map((route, i) => (
     <RouteWithSubRoutes key={i} {...route}/>
 ))}



 </div>



 </div>
 </BrowserRouter>*/