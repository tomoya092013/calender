import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import {
  isSameMonth,
  isFirstDay,
  isSameDay,
  getMonth,
} from "../../services/calendar";

const CarederElement = ({ day, month }) => {
  const currentMonth = getMonth(month);
  // console.log(currentMonth);
  // console.log(month);
  // console.log(day);

  const isCurrentMonth = isSameMonth(day, currentMonth);
  // const isCurrentMonth = isSameMonth(today, day);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  const today = dayjs();
  const isToday = isSameDay(day, today);

  const format = isFirstDay(day) ? "M月D日" : "D";
  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CarederElement;
