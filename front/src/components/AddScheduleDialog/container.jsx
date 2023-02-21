import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import { addScheduleCloseDialog } from "../../redux/addSchedule/actions";

const mapStateProps = (state) => ({ schedule: state.addSchedule });
const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
});

export default connect(mapStateProps, mapDispatchToProps)(AddScheduleDialog);
