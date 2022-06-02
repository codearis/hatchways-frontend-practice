const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const getDayMonth = (value: number) => {
  const date = new Date(value * 1000);
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${month} ${day}`;
};
