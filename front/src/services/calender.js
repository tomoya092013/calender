import dayjs from "dayjs";

export const isSameDay = (d1, d2) => {
  const compareFormat = "YYYYMMDD";
  const isToday = d1.format(compareFormat) === d2.format(compareFormat);
  return isToday;
};

export const isSameMonth = (m1, m2) => {
  const compareFormat = "YYYYMM";
  const isMonth = m1.format(compareFormat) === m2.format(compareFormat);
  return isMonth;
};

export const isFirstDay = (day) => {
  return day.date() === 1;
};

export const createCalendar = () => {
  const firstDay = dayjs().startOf("month");
  const firstDayIndex = firstDay.day();
  // console.log(firstDay);
  // console.log(firstDayIndex);
  // const daY = firstDay.add(-1, "day");
  // console.log(daY);

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");
      return day;
    });
};
