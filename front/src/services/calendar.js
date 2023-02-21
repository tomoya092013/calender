import dayjs from "dayjs";

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;

export const createCalendar = (month) => {
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();
  // console.log(month);
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

export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = (month) => {
  // console.log(month);
  const day = getMonth(month).add(-1, "month");
  // console.log(day);
  // console.log(formatMonth(day));
  return formatMonth(day);
};

export const getMonth = ({ year, month }) => {
  // console.log(year);
  // console.log(month);
  // console.log(dayjs(`${year}-${month}`));
  return dayjs(`${year}-${month}`);
};

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});
