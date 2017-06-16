import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const dataSource = [
    {textKey: 'Bus', valueKey: '1'},
    {textKey: 'Bicycle', valueKey: '2'},
    {textKey: 'Ethno', valueKey: '3'},
    {textKey: 'Excursions', valueKey: '4'},
    {textKey: 'Rafting', valueKey: '5'},
    {textKey: 'Camping', valueKey: '6'},
    {textKey: 'Horse riding', valueKey: '7'},
    {textKey: 'Mountain tour', valueKey: '8'},
    {textKey: 'Skiing', valueKey: '9'},
    {textKey: 'Healthy', valueKey: '10'},
    {textKey: 'City walking tour', valueKey: '11'},
];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class TourTypeSelect extends Component {
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
                hintText="Select a tour type"
                value={values}
                onChange={this.handleChange}
            >
                {this.menuItems(values)}
            </SelectField>
        );
    }
}