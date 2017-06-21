import React, {Component} from 'react'
import {Link} from 'react-router'

// material-ui
import AppBar from 'material-ui/AppBar'

const links = [
    {title: 'О сириусе', url: ''},
    {title: 'Как попасть', url: ''},
    {title: 'Педагогам', url: ''},
    {title: 'Выпускникам', url: ''},
    {title: 'Лекториум', url: ''},
    {title: 'Научный парк', url: ''},
    {title: 'Культурный центр', url: ''},

]

const style ={
    link: {
        color: "white",
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.8px"
     },
     linkDiv:{
         flexGrow: '1'
     },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"


    }
}

export default class Header extends Component {
    render() {



        //
        //
        // const HeaderTitle = () => {
        // 	return (
        // 		<Link to="/">
        // 			<span>book
        // 				<span style={{ fontWeight: 700 }}>Z</span>
        // 			</span>
        // 		</Link>
        // 	)
        // }

        return (

            <header className="sso-header">

                <div className="sso-header__name"  >
                    <img className="sso-footer__left-section-em" src="/images/logo_sirius.png"/>

                    {/*<span className="name-main">*/}
                    {/*СИРИУС*/}
                    {/*</span>*/}
                    {/*<br/>*/}
                    {/*<span className="name-info">*/}
                    {/*ОНЛАЙН*/}
                    {/*</span>*/}
                </div>
                {/*<div className="sso-header__info">СРЕДА <br/> ДИСТАНЦИОННОГО <br/> ОБРАЗОВАНИЯ</div>*/}
                <div className="top-menu">

                    {links.map((l) => {
                       return <div style={style.linkDiv}><a href={l.url} style={style.link} onClick={false}>{l.title}</a></div>;
                    })}
                </div>





            </header >



            // <AppBar title={ <HeaderTitle /> } showMenuIconButton={false} />
        )
    }
}