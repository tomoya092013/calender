export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

//アクション　typeとpayloadを返す
export const calendarSetMonth = (payload) => ({
  type: CALENDAR_SET_MONTH,
  payload,
});
