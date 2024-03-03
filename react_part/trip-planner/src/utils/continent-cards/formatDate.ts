function formatDate(dateString: string): string {
  const [day, month, year] = dateString.split(".");

  const date = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10)
  );

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthResult = monthNames[date.getMonth()];
  const dayResult = date.getDate();

  return `${monthResult} ${dayResult}`;
}

export { formatDate };
