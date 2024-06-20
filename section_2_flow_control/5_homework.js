/*
Методом prompt получите ответ пользователя
на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
выведите в консоли "Успех", если нет - "Вы робот!",
а если он введёт "Я не робот", то тоже "Успех".
*/

const usersResponse = prompt("сколько будет 7 + или -15?");

let answer1 = 22;
let answer2 = -8;

switch (Number(usersResponse)) {
   case answer1:
      console.log("Вы молодец!");
      break;
   case answer2:
      console.log("Вы молодец!");
      break;
   default:
      usersResponse === "Я не робот"
         ? console.log("Вы молодец!")
         : console.log("Вы робот!!!");
}
