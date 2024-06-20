// switch statements
const role = "manager";
switch (role) {
   case "manager": // role === "manager"
      console.log("Менеджер");
      break;
   case "admin":
      console.log("Админ");
      break;
   case "ceo":
      console.log("CEO");
      break;
   default:
      console.log("Такого пользователя нет");
}

switch (role) {
   case "manager": // role === "manager"
   case "admin":
      console.log("Не руководитель");
      break;
   case "ceo":
      console.log("Руководитель");
      break;
   default:
      console.log("Такого пользователя нет");
}

const num = -1;
switch (true) {
   case num > 0:
      console.log("Положительный");
      break;
   case num < 0:
      console.log("Отрицательный");
      break;
   default:
      console.log("Ноль!");
}
