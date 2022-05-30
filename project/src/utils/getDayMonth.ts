export const getDayMonth = (value: number) => {
  const date = new Date(value * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  return `${month}/${day}`;
};
