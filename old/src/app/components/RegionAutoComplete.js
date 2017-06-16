import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';


const dataSource = [
    {textKey: 'Altai', valueKey: '1'},
    {textKey: 'Anapa', valueKey: '2'},
    {textKey: 'Baikal', valueKey: '3'},
    {textKey: 'Caucasus', valueKey: '4'},
    {textKey: 'Crimea', valueKey: '5'},
    {textKey: 'Golden Ring', valueKey: '6'},
    {textKey: 'Kamchatka', valueKey: '7'},
    {textKey: 'Karelia', valueKey: '8'},
    {textKey: 'Kazan', valueKey: '9'},
    {textKey: 'Moscow', valueKey: '10'},
    {textKey: 'Baltic States', valueKey: '11'},
    {textKey: 'Sochi', valueKey: '12'},
    {textKey: 'St. Petersburg', valueKey: '13'},
    {textKey: 'Urals', valueKey: '14'},
    {textKey: 'Volga Region', valueKey: '15'},
];
const dataSourceConfig = {
    text: 'textKey',
    value: 'valueKey',
};

/**
 * `AutoComplete` search text can be implemented as a controlled value,
 * where `searchText` is handled by state in the parent component.
 * That value is reseted with the `onNewRequest` callback.
 */
export default class RegionAutoComplete extends Component {
    state = {
        searchText: '',
    };

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleNewRequest = () => {
        this.setState({
            searchText: '',
        });
    };

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Type 'r', case insensitive"
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={dataSource}
                    dataSourceConfig={dataSourceConfig}
                    filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                    openOnFocus={true}
                />
            </div>
        );
    }
}