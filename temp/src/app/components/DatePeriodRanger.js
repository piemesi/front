import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

import { DateRangePicker } from 'react-dates'; //, SingleDatePicker, DayPickerRangeController

// import 'react-dates/lib/css/_datepicker.css';

const optionsStyle = {
    maxWidth: 255,
    marginRight: 'auto',
};

/**
 * This example allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 */
export default class DatePeriodRanger extends React.Component {
    constructor(props) {
        super(props);

        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);

        this.state = {
            minDate: minDate,
            maxDate: maxDate,
            autoOk: false,
            disableYearSelection: false,
            // startDate: moment.today,
            // endDate: moment.today,

        };
    }

    handleChangeMinDate = (event, date) => {
        this.setState({
            minDate: date,
        });
    };

    handleChangeMaxDate = (event, date) => {
        this.setState({
            maxDate: date,
        });
    };

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    render() {
        return (
            <div>

                {/*<DateRangePicker*/}
                    {/*startDate={this.state.startDate} // momentPropTypes.momentObj or null, this.state.startDate*/}
                    {/*endDate={this.state.endDate} // momentPropTypes.momentObj or null,*/}
                    {/*onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,*/}
                    {/*focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,*/}
                    {/*onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,*/}
                {/*/>*/}

                <DatePicker
                    floatingLabelText="Ranged Date Picker"
                    autoOk={this.state.autoOk}
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    disableYearSelection={this.state.disableYearSelection}
                />
                <div style={optionsStyle}>
                    <DatePicker
                        onChange={this.handleChangeMinDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Min Date"
                        defaultDate={this.state.minDate}
                        disableYearSelection={this.state.disableYearSelection}
                    />
                    <DatePicker
                        onChange={this.handleChangeMaxDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Max Date"
                        defaultDate={this.state.maxDate}
                        disableYearSelection={this.state.disableYearSelection}
                    />
                    <Toggle
                        name="autoOk"
                        value="autoOk"
                        label="Auto Ok"
                        toggled={this.state.autoOk}
                        onToggle={this.handleToggle}
                    />
                    <Toggle
                        name="disableYearSelection"
                        value="disableYearSelection"
                        label="Disable Year Selection"
                        toggled={this.state.disableYearSelection}
                        onToggle={this.handleToggle}
                    />
                </div>
            </div>
        );
    }
}