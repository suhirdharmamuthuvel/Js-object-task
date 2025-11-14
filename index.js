// ---------------------------------------JavaScript Object Practice Tasks------------------------------------

// -------------------Task 1: Create and Access Object Properties----------------------
// ------------myself---------->
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Blue"
// };
// for (let key in car) {
//   console.log(car[key]);
// }
// --------------------Task 2: Add, Update, and Delete Properties---------------------------------------------
// ------------myself---------->
// let person = {
//   name: "suhir",
//   age: 19
// };
// person.country = "India";
// person.age = 26;
// delete person.name;
// console.log(person);
// ---------------------Task 3: Object with Methods------------------------------------------------------------
// ------------myself---------->
// const calculator = {
//   add: function(a, b) {
//     return a + b;},
//   subtract: function(a, b) {
//     return a - b;},
//   multiply: function(a, b) {
//     return a * b; }
// };
// console.log(calculator.add(4, 2));  
// console.log(calculator.subtract(4, 2)); 
// console.log(calculator.multiply(4, 2)); 
// -----------------------Task 4: Nested Object Access--------------------------------------
// ------------myself---------->
//   const student = {
//   name: "Anu",
//   grade: "A",
//   marks: {
//     math: 90,
//     english: 88,
//     science: 92 }
// };
// console.log("Student Name:", student.name);
// console.log("Math Marks:", student.marks.math);
// console.log("Science Marks:", student.marks.science);
// -----------------------Task 5: Loop Through Object and Count Properties----------------------------
// ------------myself---------->
// const laptop = {
//   brand: "HP",
//   processor: "i5",
//   ram: "16GB",
//   storage: "512GB SSD"
// };
// let count = 0;
// for (let key in laptop) {
//   count++;}
// console.log(" Property count:", count);
// // -------------------------Task 6: Shallow Copy vs Deep Copy----------------------------------
//------------myself---------->
//  const student = {
//   name: "John",
//   marks: { math: 90, science: 85 }
// };
// const copiedStudent = Object.assign({}, student);
// copiedStudent.marks.math = 100;
// console.log("Original Student:", student);
// console.log("Copied Student:", copiedStudent);
// /Explanation
// In a shallow copy, if you change the value in the copied object, the original object will also change because both share the same memory address.
// But in a deep copy, if you change the value in the copied object, the original object will not change because they do not share the same memory address.
// ---------------------------Task 7: Merge Multiple Objects---------------------------------
//------------myself---------->
//  const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };
// const mergedObject1 = Object.assign({}, obj1, obj2, obj3);
// console.log("Merged using Object.assign():", mergedObject1);
// const mergedObject2 = { ...obj1, ...obj2, ...obj3 };
// console.log("Merged using Spread Operator:", mergedObject2);
// -------------------------------Task 8: Freeze and Modify-------------------------------------
// ------------myself---------->
// //  const settings = {
//   theme: "dark",
//   fontSize: 14
// };
// Object.freeze(settings);
// settings.theme = "light";    
// settings.mode = "compact";   
// delete settings.fontSize;    
// console.log(settings);
// -------------------------------Task 9: Object Destructuring----------------------------------------
// ------------myself---------->
// const user = {
//   name: "Ravi",
//   age: 28,
//   address: {
//   city: "Chennai",
//   country: "India"
//   }
// };
// const {
//   name: userName,
//   age: userAge,
//   address: { city, country }
// } = user;
// console.log("Name:", userName);
// console.log("Age:", userAge);
// console.log("City:", city);
// console.log("Country:", country);
// --------------------------Task 10: Count Nested Object Properties---------------------------------
// ------------with help of chatgpt--------
// const person = {
//   name: "Kumar",
//   details: {
//     age: 30,
//     contact: { phone: "12345", email: "test@mail.com" }
//   }
// };
// function countProperties(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       count += countProperties(obj[key]);
//     }
//   }
//   return count;
// }
// const total = countProperties(person);
// console.log("Total Properties:", total);
// --------------------------mini proect in (index.html)-----------------------------------


