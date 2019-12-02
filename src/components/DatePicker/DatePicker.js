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


  .CalendarDay, .CalendarDay__default {
    color: ${colors.renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black40 })};
    border: 1px solid ${colors.renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black40 })};
  }

  .DayPickerKeyboardShortcuts_show__bottomRight::before,
  .DayPickerKeyboardShortcuts_show__bottomRight:hover::before {
    border-right-color: ${colors.renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green })};
  }

  .DayPickerKeyboardShortcuts_showSpan {
    color: ${colors.renderThemeIfPresentOrDefault({ key: 'primary01', defaultValue: colors.white })};
  }

  .SingleDatePicker_picker,
  .DayPicker__horizontal,
  .CalendarMonth,
  .CalendarMonthGrid,
  .DayPickerNavigation_button__default,
  .DayPickerNavigation_button__default:active,
  .SingleDatePickerInput,
  .DateInput_input,
  .DateInput_input__focused,
  .CalendarDay,
  .CalendarDay__default,
  .CalendarDay__default:hover:not(.CalendarDay__selected):not(.CalendarDay__blocked_out_of_range),
  .CalendarDay__blocked_out_of_range:hover {
    background-color: ${colors.renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })}
  }

  .SingleDatePickerInput__disabled,
  .DateInput_input__disabled {
    background-color: ${colors.renderThemeIfPresentOrDefault({ key: 'primary04', defaultValue: colors.white })}
  }

  .DayPickerNavigation_button__default,
  .DayPickerNavigation_button__default:focus,
  .DayPickerNavigation_button__default:hover,
  .CalendarDay__selected:hover,
  .CalendarDay__default:hover,
  .CalendarDay__blocked_out_of_range:hover {
    border: 1px solid ${colors.renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black40 })};
  }

  .DayPicker_weekHeader,
  .CalendarMonth_caption {
    color: ${colors.renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black90 })};
  }

  .DayPickerNavigation_svg__horizontal {
    fill: ${colors.renderThemeIfPresentOrDefault({ key: 'white60', defaultValue: colors.black60 })};
  }


  .DateInput_fangShape {
    fill: ${colors.renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
  }

  .DateInput_fangStroke {
    stroke: ${colors.renderThemeIfPresentOrDefault({ key: 'primary03', defaultValue: colors.white })};
  }

  .SingleDatePickerInput_calendarIcon path {
    fill: ${colors.renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black40 })};
  }

  .DateInput_input,
  .CalendarDay__default:hover,
  .DateInput_input__focused {
    color: ${colors.renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black })};
  }


  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:hover {
    color: ${colors.renderThemeIfPresentOrDefault({ key: 'white40', defaultValue: colors.black10 })};
    background-color: ${colors.renderThemeIfPresentOrDefault({ key: 'white10', defaultValue: colors.white })};
  }


  .DateInput_input__focused {
    border-bottom-color: ${colors.renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green })};
  }

  .CalendarDay__selected, .CalendarDay__selected:hover {
    color: ${colors.renderThemeIfPresentOrDefault({ key: 'primary01', defaultValue: colors.white })};
    background-color: ${colors.renderThemeIfPresentOrDefault({ key: 'brand01', defaultValue: colors.green })}
  }
`;

const Label = styled.label`
  color: ${colors.renderThemeIfPresentOrDefault({key: 'white90', defaultValue: colors.boulder})};
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
          onDateChange={this.props.onDateChange}
          onFocusChange={({ focused }) => { this.setState({ focused }); }}
          numberOfMonths={1}
          isOutsideRange={this.isOutsideRange}
          displayFormat={this.props.displayFormat}
          daySize={this.props.daySize}
          disabled={this.props.disabled}
          required={this.props.required}
          small={this.props.small}
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

