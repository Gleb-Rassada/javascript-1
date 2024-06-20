/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведите в консоль:
- Boolean nеременную усneeme ли вы взяться за работу?
- Сколько вы за неё попросите?
*/
const hourlyRate = 80;
const hoursPerDay = 5;
const daysPerWeek = 5;
const hoursOfWork = 40;
const daysOfWork = hoursOfWork / hoursPerDay;
let x = 11 - 2;
console.log(daysOfWork <= x);
let earn = hourlyRate * hoursPerDay * daysOfWork;
console.log(earn);
