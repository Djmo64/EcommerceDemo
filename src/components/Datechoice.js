import React, { Component } from "react";

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


class Datechoice extends Component {
    constructor(props){
        super(props);
            this.state = {
                startDate: null,
                endDate : null
            }
        
    }
    render(){
        return(
            <div className="calendar">
                <DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>
            </div>
        )
    }
}
export default Datechoice;