import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
// import Globe from 'material-ui/svg-icons/places/airport-shuttle';
import Place from 'material-ui/svg-icons/maps/place';

import OfferCard from './OfferCard';
// import MasonryOffer from './MasonryOffer';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

const cardItems = [
    {
        id: 1,
        header: {
            title: "Большое Алтайское путешествие",
            subtitle: "Барнаул – Мульта – Нижнее Мультинское озеро – оз.Славных девчат – оз.Поперечное Мультинское – устье Аккема – оз.Ниж.Шавлинское – оз.Верхнее Шавлинское – плато Ештыкёль – пос.Чибит – Барнаул",
            avatar: "images/altai/713.jpg",
            durationFrom: 11,
            durationsTo: 18,
            routeLength: 250,
            info: "Это приключение для опытных туристов. Нам предстоит проделать действительно большой путь по Горам, рекам и бездорожью Горного Алтая. Мы сплавимся по величественной Катуни, уйдём глубоко в горы, преодолеем перевалы, увидим по-настоящему дикую и нетронутую природу Горного Алтая с кристально чистыми реками, озёрами, завораживающими водопадами и «лесными жителями». \nОбратите внимание, предложено 2 варианта программы, различные по стоимости и продолжительности (11 дней и 18 дней).",
        },
        body: {
            mainImage:'images/altai/20573.jpg',
            images:[
                'images/altai/20573.jpg',
                'images/altai/20578.jpg',
                'images/altai/20583.jpg',
                'images/altai/20584.jpg',
                'images/altai/20585.jpg',
                'images/altai/20586.jpg',
                'images/altai/20588.jpg',
                'images/altai/20611.jpg',
                'images/altai/20612.jpg',
                'images/altai/20615.jpg',
                'images/altai/20583.jpg',
                'images/altai/20584.jpg',
            ]
        }
    },
    {
        id: 2,
        header: {
            title: "Большое Алтайское путешествие",
            subtitle: "Барнаул – Мульта – Нижнее Мультинское озеро – оз.Славных девчат – оз.Поперечное Мультинское – устье Аккема – оз.Ниж.Шавлинское – оз.Верхнее Шавлинское – плато Ештыкёль – пос.Чибит – Барнаул",
            avatar: "images/altai/713.jpg",
            durationFrom: 11,
            durationsTo: 18,
            routeLength: 250,
            info: "Это приключение для опытных туристов. Нам предстоит проделать действительно большой путь по Горам, рекам и бездорожью Горного Алтая. Мы сплавимся по величественной Катуни, уйдём глубоко в горы, преодолеем перевалы, увидим по-настоящему дикую и нетронутую природу Горного Алтая с кристально чистыми реками, озёрами, завораживающими водопадами и «лесными жителями». \nОбратите внимание, предложено 2 варианта программы, различные по стоимости и продолжительности (11 дней и 18 дней).",
        },
        body: {
            mainImage:'images/altai/20573.jpg',
            images:[]
        }
    },
    {
        id: 3,
        header: {
            title: "Большое Алтайское путешествие",
            subtitle: "Барнаул – Мульта – Нижнее Мультинское озеро – оз.Славных девчат – оз.Поперечное Мультинское – устье Аккема – оз.Ниж.Шавлинское – оз.Верхнее Шавлинское – плато Ештыкёль – пос.Чибит – Барнаул",
            avatar: "images/altai/713.jpg",
            durationFrom: 11,
            durationsTo: 18,
            routeLength: 250,
            info: "Это приключение для опытных туристов. Нам предстоит проделать действительно большой путь по Горам, рекам и бездорожью Горного Алтая. Мы сплавимся по величественной Катуни, уйдём глубоко в горы, преодолеем перевалы, увидим по-настоящему дикую и нетронутую природу Горного Алтая с кристально чистыми реками, озёрами, завораживающими водопадами и «лесными жителями». \nОбратите внимание, предложено 2 варианта программы, различные по стоимости и продолжительности (11 дней и 18 дней).",
        },
        body: {
            mainImage:'images/altai/20573.jpg',
            images:[]
        }
    },
    {
        id: 4,
        header: {
            title: "Большое Алтайское путешествие",
            subtitle: "Барнаул – Мульта – Нижнее Мультинское озеро – оз.Славных девчат – оз.Поперечное Мультинское – устье Аккема – оз.Ниж.Шавлинское – оз.Верхнее Шавлинское – плато Ештыкёль – пос.Чибит – Барнаул",
            avatar: "images/altai/713.jpg",
            durationFrom: 11,
            durationsTo: 18,
            routeLength: 250,
            info: "Это приключение для опытных туристов. Нам предстоит проделать действительно большой путь по Горам, рекам и бездорожью Горного Алтая. Мы сплавимся по величественной Катуни, уйдём глубоко в горы, преодолеем перевалы, увидим по-настоящему дикую и нетронутую природу Горного Алтая с кристально чистыми реками, озёрами, завораживающими водопадами и «лесными жителями». \nОбратите внимание, предложено 2 варианта программы, различные по стоимости и продолжительности (11 дней и 18 дней).",
        },
        body: {
            mainImage:'images/altai/20573.jpg',
            images:[]
        }
    },
    {
        id: 5,
        header: {
            title: "Большое Алтайское путешествие",
            subtitle: "Барнаул – Мульта – Нижнее Мультинское озеро – оз.Славных девчат – оз.Поперечное Мультинское – устье Аккема – оз.Ниж.Шавлинское – оз.Верхнее Шавлинское – плато Ештыкёль – пос.Чибит – Барнаул",
            avatar: "images/altai/713.jpg",
            durationFrom: 11,
            durationsTo: 18,
            routeLength: 250,
            info: "Это приключение для опытных туристов. Нам предстоит проделать действительно большой путь по Горам, рекам и бездорожью Горного Алтая. Мы сплавимся по величественной Катуни, уйдём глубоко в горы, преодолеем перевалы, увидим по-настоящему дикую и нетронутую природу Горного Алтая с кристально чистыми реками, озёрами, завораживающими водопадами и «лесными жителями». \nОбратите внимание, предложено 2 варианта программы, различные по стоимости и продолжительности (11 дней и 18 дней).",
        },
        body: {
            mainImage:'images/altai/20573.jpg',
            images:[]
        }
    },

];

class RegionsTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div style={{flexGrow: 1}}>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab icon={<Place />}
                         label="Altai" value={0}/>
                    <Tab icon={<Place />}
                         label="Baikal" value={1}/>
                    <Tab icon={<Place />} label="Crimea" value={2}/>
                    <Tab icon={<Place />} label="Kamchatka" value={3}/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div style={{display: "flex",
                        alignContent: "start",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "baseline", // "flex-end",

                        /* flex-shrink: 1; */
                        justifyItems: "start"}}>
                        {/*<h2 style={styles.headline}>Altai</h2>*/}


                        {cardItems.map((item) => {
                            return (

                                <OfferCard key={item.id}
                                           header={item.header}
                                           body={item.body}  />


                            )
                        })}


                    </div>
                    <div style={styles.slide}>
                        <h2 style={styles.headline}>Baikal</h2>
                    </div>
                    <div style={styles.slide}>
                        <h2 style={styles.headline}>Crimea</h2>
                    </div>
                    <div style={styles.slide}>
                        <h2 style={styles.headline}>Kamchatka</h2>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

export default RegionsTabs;



