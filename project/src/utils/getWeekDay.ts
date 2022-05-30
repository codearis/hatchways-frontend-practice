const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getWeekDay = (date: number) => {
  const result = new Date(date * 1000);
  return days[result.getDay()];
};
