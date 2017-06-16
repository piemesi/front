import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class RegionSelect extends Component {
    state = {
        values: [],
    };

    handleChange = (event, index, values) => this.setState({values});

    menuItems(values) {
        return dataSource.map((region) => (
            <MenuItem
                key={region.valueKey}
                insetChildren={true}
                checked={values && values.includes(region.valueKey)}
                value={region.valueKey}
                primaryText={region.textKey}
            />
        ));
    }

    render() {
        const {values} = this.state;
        return (
            <SelectField
                multiple={true}
                hintText="Select a region"
                value={values}
                onChange={this.handleChange}
            >
                {this.menuItems(values)}
            </SelectField>
        );
    }
}