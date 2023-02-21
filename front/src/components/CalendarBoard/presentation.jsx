import React from "react";
import { ImageList, Typography } from "@material-ui/core";
import * as styles from "./style.css";
import CarederElement from "../CalendarElement";
// import { createCalendar } from "../../services/calender";

const days = ["日", "月", "火", "水", "木", "金", "土"];
// const calendar = createCalendar();

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  // console.log(calendar);
  // console.log(month);
  return (
    <div className={styles.container}>
      <ImageList className={styles.grid} cols={7} gap={0} rowHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}

        {calendar.map((c) => (
          <li key={c.toISOString()} onClick={() => openAddScheduleDialog()}>
            <CarederElement day={c} month={month} />
          </li>
        ))}
      </ImageList>
    </div>
  );
};

export default CalendarBoard;
