import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import GridListExampleSingleLine from './OfferGallery';

export default class CardExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        return (
            <Card style={{width: "100%", flexGrow: 1}} expanded={this.state.expanded}
                  onExpandChange={this.handleExpandChange}>
                <CardHeader

                    {...this.props.header}

                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    <Toggle
                        toggled={this.state.expanded}
                        onToggle={this.handleToggle}
                        labelPosition="right"
                        label="Тип: Пешие, Прочие	маршруты. Длина: 250 км"
                    /> отзывы - попап (много = http://www.vpoxod.ru/route/altai/splav_po_reke_katun/responses)/ цена /
                    фото / поиск ближайшие / программа тура /
                </CardText>


                <GridListExampleSingleLine expandable={true} />

                {/*<div expandable={true} style={{*/}
                    {/*display: "flex", alignContent: "baseline",*/}
                    {/*flexWrap: "nowrap",*/}
                    {/*justifyContent: "space-between",*/}
                    {/*alignItems: "flex-start", justifyItems: "flex-start"*/}
                {/*}}>*/}
                    {/*<div style={{flexGrow: 1}}><CardMedia*/}
                        {/*expandable={true}*/}
                        {/*style={{maxWidth: "700px"}}*/}
                        {/*overlay={<CardTitle title="Большое Алтайское путешествие" subtitle="Overlay subtitle"/>}*/}
                    {/*>*/}
                        {/*<img src={this.props.body.mainImage}/>*/}

                    {/*</CardMedia></div>*/}
                    {/*<div style={{maxWidth: "400px"}}>{ this.props.body.images.map(item => {*/}

                        {/*return (<img style={{border: "1px solid"}} height={66} src={item}/>)*/}
                    {/*})}*/}
                    {/*</div>*/}


                {/*</div>*/}
                <CardTitle title="Card title"
                           subtitle="Типы: Пеший, Сплав, Комбинированный, Средняя сложность, Участникам с опытом, Новый маршрут, более 15 дней, Поход с палатками, Переходы с рюкзаками"
                           expandable={true}/>
                <CardText expandable={true}>
                    Это приключение для опытных туристов. Нам предстоит проделать действительно большой путь по Горам,
                    рекам и бездорожью Горного Алтая. Мы сплавимся по величественной Катуни, уйдём глубоко в горы,
                    преодолеем перевалы, увидим по-настоящему дикую и нетронутую природу Горного Алтая с кристально
                    чистыми реками, озёрами, завораживающими водопадами и «лесными жителями».
                    Обратите внимание, предложено 2 варианта программы, различные по стоимости и продолжительности (11
                    дней и 18 дней).
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand}/>
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce}/>
                </CardActions> images/nature-600-337.jpg
            </Card>
        );
    }
}