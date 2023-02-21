import { connect } from "react-redux";
import CalendarBoard from "./presentation";
//カレンダーの配列をつくるため
import { createCalendar } from "../../services/calendar";

const mapStateToProps = (state) => ({ calendar: state.calendar });
const mergeProps = (stateProps) => ({
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar),
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
