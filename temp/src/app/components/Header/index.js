import React, { Component } from 'react'
import { Link } from 'react-router'

// material-ui
import AppBar from 'material-ui/AppBar'


export default class Header extends Component {
	render() {

		const HeaderTitle = () => {
			return (
				<Link to="/">
					<span>book
						<span style={{ fontWeight: 700 }}>Z</span>
					</span>
				</Link>
			)
		}

		return (
			<header className="sso-header">
				<div className="sso-header__name">
					<img className="sso-footer__left-section-em" src="/images/logo.png"/>
                            {/*<span className="name-main">*/}
                                {/*СИРИУС*/}
                            {/*</span>*/}
					{/*<br/>*/}
					{/*<span className="name-info">*/}
                                {/*ОНЛАЙН*/}
                            {/*</span>*/}
				</div>
				{/*<div className="sso-header__info">СРЕДА <br/> ДИСТАНЦИОННОГО <br/> ОБРАЗОВАНИЯ</div>*/}
			</header>
		)
	}
}