export function getMonthAndYear(date: string) {
  const convertedDate = new Date(date);

  const year = convertedDate.getFullYear();

  const month = convertedDate.toLocaleString("es-ES", { month: "short" });

  return `${month}. ${year}`;
}

export function capitalizeFirstLetter(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
