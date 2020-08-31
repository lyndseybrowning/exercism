const ONE_GIGASECOND = 1000000000;

export const gigasecond = (date) => {
    const dateInMs = date.getTime();
    const nextDate = new Date(dateInMs + ONE_GIGASECOND * 1000);

    return nextDate;
};
