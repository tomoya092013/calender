import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameDay, isSameMonth, isFirstDay } from "../../services/calender";

const CarederElement = ({ day }) => {
  const today = dayjs();
  const isToday = isSameDay(today, day);
  const isCurrentMonth = isSameMonth(today, day);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
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
