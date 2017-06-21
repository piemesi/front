import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import muiThemeable from 'material-ui/styles/muiThemeable';


const bottomLinks = [
    {title: 'Участники'},
    {title: 'Порядок отбора'},
    {title: 'Программа смены'},
    {title: 'Кураторы'},
    {title: 'Преподаватели'},

]

const recentsIcon = <FontIcon className="material-icons">null</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const style = {
    footer: {
        height: "80px",
        background: "linear-gradient(-125deg, #792B8E, #532F91)"
    },
    item: {
        color: 'white',
        border: "none"

    },
    itemHovered: {
        borderBottom: "2px solid #FE4C00"

    }
}

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
    constructor(props) {
        super(props)



        this.muiTheme = props.muiTheme
    }

    state = {
        selectedIndex: 0,
        hovered: 0
    };

    select = (index) => this.setState({selectedIndex: index});

    handleMouseOver = (index) => this.setState({hovered: index});

    render() {
        let footerStyle = {...style.footer, backgroundColor: this.muiTheme.palette.primary1Color}

        return (
            <Paper zDepth={1}>
                <BottomNavigation  style={footerStyle}
                                  selectedIndex={this.state.selectedIndex}>


                    {bottomLinks.map((b, i)=><BottomNavigationItem
                        className="borderItem"

                        onMouseEnter={() =>this.handleMouseOver(i)}
                        label=""
                        style={this.state.hovered === i ? style.itemHovered : style.item}
                        icon={<FontIcon style={{color:'white', fontSize:"13px", fontWeight:"500", letterSpacing: "0.5px"}} className="material-icons">{b.title}</FontIcon>}
                        onTouchTap={() => this.select(i)}
                    />)}

                    {/*<BottomNavigationItem*/}
                        {/*label=""*/}
                        {/*icon={<FontIcon className="material-icons">null</FontIcon>}*/}
                         {/*onTouchTap={() => this.select(1)}*/}
                    {/*/>*/}
                    {/*<BottomNavigationItem*/}
                        {/*label="test"*/}
                        {/*style={style.item}*/}
                        {/*icon={recentsIcon}*/}
                        {/*// icon={nearbyIcon}*/}
                        {/*onTouchTap={() => this.select(2)}*/}
                    {/*/>*/}
                </BottomNavigation>
            </Paper>
        );
    }
}

export default muiThemeable()(Footer);