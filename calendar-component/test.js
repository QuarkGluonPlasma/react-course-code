const dayjs = require('dayjs');

console.log(dayjs('2023-11-1').daysInMonth());

console.log(dayjs('2023-11-1').startOf('month').format('YYYY-MM-DD'));

console.log(dayjs('2023-11-1').endOf('month').format('YYYY-MM-DD'));


