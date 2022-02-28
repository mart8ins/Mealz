export const DateFormat = () => {
    const newDate = new Date();
    const day = String(newDate.getDate());
    const month = newDate.getMonth() + 1;
    const monthString = String(month);
    const year = String(newDate.getFullYear());
    const date = `${day.length < 2 ? "0" + day : day}/${
        monthString.length < 2 ? "0" + monthString : monthString
    }/${year}`;
    return date;
};
