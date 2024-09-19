export default (date: Date): string => {
    const yearInYYYY = date.getFullYear();
    const monthInMM = ("0" + (date.getMonth() + 1)).slice(-2);

    return `${yearInYYYY}-${monthInMM}`;
}