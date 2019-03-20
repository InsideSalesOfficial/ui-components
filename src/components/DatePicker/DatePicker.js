import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import moment from 'moment-timezone';
import { SingleDatePicker } from 'react-dates';

import CalendarIcon from '../icons/CalendarIcon';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const DatePickerWrapper = styled.div`
  width: 100%;

  .SingleDatePicker {
    width: 100%;

    .CalendarDay {
      border: 1px solid ${colors.black40};
    }

    .CalendarDay--blocked-calendar {
      background: ${colors.darkSilver};
      color: ${colors.black20};
    }

    .CalendarDay--highlighted-calendar.CalendarDay--valid{
      background: ${colors.green40};
      color: ${colors.white};
    }

    .CalendarDay--selected {
      background: ${colors.green};
    }
  }
  .SingleDatePickerInput {
    border: none;
    border-bottom: solid 1px ${colors.black12};
    display: flex;
    align-items: center;

    color: ${colors.black};

    .SingleDatePickerInput__calendar-icon {
      order: 2;
      padding-right: 5px;
      margin: 0 0 0 10px;

      svg {
        height: 20px;
        width: 18px;
      }
    }

    .DateInput--with-caret::before,
    .DateInput--with-caret::after {
      display: none;
    }

    .DateInput__display-text {
      padding: 6px 0;
    }
    .DateInput__display-text.DateInput__display-text--has-input {
      color: ${colors.black};
      ${typography.body1};
      cursor: pointer;
    }
    .DateInput__display-text--focused {
      background: transparent;
      border: none;
      color: ${colors.selectItemColor};
    }
    .DateInput {
      padding: 0;
      width: 100%;
    }
    .DateInput__input {
      width: 100%;
    }
  }
  .SingleDatePicker__picker.SingleDatePicker__picker--direction-left.SingleDatePicker__picker--horizontal {
    top: ${(props) => {
      if (props.openBelow) {
        return '56px';
      }
      return '-14px';
    }};

    left: ${(props) => {
      if (props.openCenter) return 'calc(50% - 148.5px) !important';
      return 'unset';
    }};
  }
  .DayPickerKeyboardShortcuts__show {
    display: none;
  }
  .DayPicker__week-header {
    top: 56px;
  }
  .DayPicker {
    margin: ${(props) => {
      if (props.openCenter) return '0 auto';
      return 'unset';
    }}
  }
`;

const Label = styled.label`
  color: ${colors.boulder};
  ${typography.caption};
`;

export class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultDate: moment().startOf('day'),
      focused: false,
    };
  }

  componentDidMount() {
    if (!this.props.dateValue) {
      this.props.onDateChange(this.state.defaultDate);
    }
  }

  isOutsideRange = (momentObject) => {
    const minStartDate = this.props.minStartDate || moment();

    const isBeforeMin = momentObject.isBefore(minStartDate, 'day');
    const isAfterMax = this.props.maxEndDate ? momentObject.isAfter(this.props.maxEndDate, 'day') : false;

    return isBeforeMin || isAfterMax;
  }

  isDayBlocked = (day) => {
    if (!this.props.blockWeekends) {
      return false;
    }

    return day.isoWeekday() === 6 || day.isoWeekday() === 7;
  }

  isDayHighlighted = (day) => {
    if (!this.props.highlightWeek) {
      return false;
    }

    const selectedDate = this.props.dateValue || this.state.defaultDate;

    const dateDifference = day.startOf('day').diff(selectedDate.startOf('day'), 'days');
    const dayIsWithinOneWeek = dateDifference > 0 && dateDifference <= 8;

    return dayIsWithinOneWeek;
  }

  render() {
    const selectedDate = this.props.dateValue || this.state.defaultDate;
    return (
      <DatePickerWrapper
        className={`date-picker ${this.props.className}`}
        id='sendLaterDatePicker'
        openBelow={this.props.openBelow}
        openCenter={this.props.openCenter}
      >
        {this.props.label &&
          <Label>{this.props.label}</Label>
        }
        <SingleDatePicker
          customInputIcon={this.props.customInputIcon}
          date={selectedDate}
          focused={this.state.focused}
          isDayBlocked={this.isDayBlocked}
          isDayHighlighted={this.isDayHighlighted}
          onDateChange={(newDate) => {
            if (newDate.startOf('day').isSame(this.state.defaultDate)) return;
  
            this.setState({
              defaultDate: newDate.startOf('day')
            });
          }}
          onFocusChange={({ focused }) => { this.setState({ focused }); }}
          numberOfMonths={1}
          isOutsideRange={this.isOutsideRange}
          displayFormat={this.props.displayFormat}
          daySize={this.props.daySize}
        />
      </DatePickerWrapper>
    );
  }
}

DatePicker.defaultProps = {
  displayFormat: 'MMMM DD, YYYY',
  daySize: 36,
  onDateChange: _.identity,
  customInputIcon: <CalendarIcon size={{ width: 18, height: 20 }} fill={colors.black40}/>
};

export default DatePicker;

