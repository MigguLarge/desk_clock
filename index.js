const clockTime = document.querySelector('.clock__time');
const clockDate = document.querySelector('.clock__date');
const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const setClock = () => {
    const newDate = new Date();
    const currentHour = newDate.getHours();
    const currentMinutes = newDate.getMinutes();
    const currentMonth = monthNames[newDate.getMonth()];
    const currentDay = dayNames[newDate.getDay()];
    const currentDate = newDate.getDate();

    clockTime.innerHTML = `${
        currentHour.toString().length < 2
            ? '0' + currentHour.toString()
            : currentHour.toString()
    } : ${
        currentMinutes.toString().length < 2
            ? '0' + currentMinutes.toString()
            : currentMinutes.toString()
    }`;

    clockDate.innerHTML = `${currentDay} ${currentMonth} ${currentDate}`;
};

setClock();
setInterval(setClock, 1000);
