export const convertToCelsiusFromFarenheit = (temp: number) => {
  const result = temp - 32 / 1.8;
  return result.toFixed();
};

export const convertToCelsiusFromKelvin = (temp: number) => {
  const result = temp - 273.15;
  return result.toFixed();
};
