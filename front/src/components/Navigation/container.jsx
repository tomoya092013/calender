import Navigation from "./presentation";
import { connect } from "react-redux";
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calendarSetMonth(month));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  month: getMonth(stateProps.calendar),

  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    // console.log(stateProps);
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: (dayObj) => {
    // console.log(dayObj);
    const month = formatMonth(dayObj);
    // console.log(month);
    dispatchProps.setMonth(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
