/*Разработайте функцию, которая превращает массив объектов в объект, 
где ключами являются значения указанного свойства объектов, 
а значениями — соответствующие объекты.*/

// const people = [
//   {
//     name: "Oleksandr",
//   },
//   {
//     name: "Dmytro",
//   },
//   {
//     name: "Ekaterina",
//   },
//   {
//     name: "Elena",
//   },
//   {
//     name: "Alina",
//   },
//   {
//     name: "Vlad",
//   },
// ];

// function replacedNewPeople(person) {
//   return person.reduce((val, key) => {
//     Object.entries(key).map((item) => {
//       let [values, keys] = item;
//       val[keys] = values;
//     });
//     return val;
//   }, {});
// }

// console.log(replacedNewPeople(people));
