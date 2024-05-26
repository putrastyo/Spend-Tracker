export const formatDate = (date: Date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formatTime = (date: Date) => {
  const d = new Date(date);
  let hours = "" + d.getHours();
  let minutes = "" + d.getMinutes();

  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;

  return [hours, minutes].join(":");
};

export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [monthDay, year] = formattedDate.split(", ");
  return `${year}, ${monthDay}`;
};
