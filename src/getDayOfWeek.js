function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const dayOfWeek = date.getUTCDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayOfWeek];
}

export { getDayOfWeek };