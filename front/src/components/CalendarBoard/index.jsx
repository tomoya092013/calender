import React from "react";
import { ImageList, Typography } from "@material-ui/core";
import * as styles from "./style.css";
import CarederElement from "../CalendarElement";
import { createCalendar } from "../../services/calender";
// import dayjs from "dayjs";
// import "dayjs/locale/ja";

// dayjs.locale("ja");

// const createCalendar = () => {
//   const firstDay = dayjs().startOf("month");
//   const firstDayIndex = firstDay.day();
//   // console.log(firstDay);
//   // console.log(firstDayIndex);
//   // const daY = firstDay.add(-1, "day");
//   // console.log(daY);

//   return Array(35)
//     .fill(0)
//     .map((_, i) => {
//       const diffFromFirstDay = i - firstDayIndex;
//       const day = firstDay.add(diffFromFirstDay, "day");
//       // console.log(day.toISOString());
//       return day;
//     });
// };

const days = ["日", "月", "火", "水", "木", "金", "土"];

const calendar = createCalendar();
// console.log(calendar);

const CalendarBoard = () => {
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
          <li key={c.toISOString()}>
            <CarederElement day={c} />
          </li>
        ))}
      </ImageList>
    </div>
  );
};

export default CalendarBoard;
