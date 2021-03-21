import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
// import { ReactComponent as AddWhite } from '../../Assets/Images/Icons/white/add_white.svg';

import './DatePicker.css';
  
const DatePicker = () => {
    const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [focusedInput, setFocusedInput] = React.useState();

    const [date, setDate] = React.useState();
  const [focused, setFocused] = React.useState();

    return (
            <div>
                <DateRangePicker
                anchorDirection="left"
                    startDate={startDate}
                    startDateId="start-date"
                    endDate={endDate}
                    endDateId="end-date"
                    showClearDates={false}
                    showDefaultInputIcon={false}
                    onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                    }}
                    focusedInput={focusedInput}
                    onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                    // customInputIcon={<AddWhite />}
                    phrases={{
                        calendarLabel: 'Calendar',
                        chooseAvailableEndDate: function noRefCheck() {},
                        chooseAvailableStartDate: function noRefCheck() {},
                        clearDates: 'Clear Dates',
                        closeDatePicker: 'Close',
                        dateIsSelected: function noRefCheck() {},
                        dateIsSelectedAsEndDate: function noRefCheck() {},
                        dateIsSelectedAsStartDate: function noRefCheck() {},
                        dateIsUnavailable: function noRefCheck() {},
                        enterKey: 'Enter key',
                        escape: 'Escape key',
                        focusStartDate: 'Interact with the calendar and add the check-in date for your trip.',
                        hideKeyboardShortcutsPanel: 'Close the shortcuts panel.',
                        homeEnd: 'Home and end keys',
                        jumpToNextMonth: 'Move forward to switch to the next month.',
                        jumpToPrevMonth: 'Move backward to switch to the previous month.',
                        keyboardBackwardNavigationInstructions: 'Navigate backward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.',
                        keyboardForwardNavigationInstructions: 'Navigate forward to interact with the calendar and select a date. Press the question mark key to get the keyboard shortcuts for changing dates.',
                        keyboardShortcuts: 'Keyboard Shortcuts',
                        leftArrowRightArrow: 'Right and left arrow keys',
                        moveFocusByOneDay: 'Move backward (left) and forward (right) by one day.',
                        moveFocusByOneMonth: 'Switch months.',
                        moveFocusByOneWeek: 'Move backward (up) and forward (down) by one week.',
                        moveFocustoStartAndEndOfWeek: 'Go to the first or last day of a week.',
                        openThisPanel: 'Open this panel.',
                        pageUpPageDown: 'page up and page down keys',
                        questionMark: 'Question mark',
                        returnFocusToInput: 'Return to the date input field.',
                        roleDescription: 'datepicker',
                        selectFocusedDate: 'Select the date in focus.',
                        showKeyboardShortcutsPanel: 'Open the keyboard shortcuts panel.',
                        upArrowDownArrow: 'up and down arrow keys'
                      }}
                />
                
                {/* <SingleDatePicker
                    date={date}
                    onDateChange={(date) => setDate(date)}
                    focused={focused}
                    onFocusChange={({ focused }) => setFocused(focused)}
                    id="date"
                /> */}
            </div>
    )
}
export default DatePicker;