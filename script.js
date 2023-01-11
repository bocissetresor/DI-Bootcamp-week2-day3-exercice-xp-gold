// Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7];

for (let elem of numbers) {
  if (elem % 3 == 0) {
    console.log(elem + " is divisible by three");
  } else {
    console.log(elem + " is not divisible by three");
  }
}

// Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let studentName = prompt("Please enter your name");

if (studentName in guestList) {
    console.log("Hi ! I'm " + studentName + " is in " + guestList[studentName]);
}else {
    console.log("Hi ! I'm a guest.")
}

// Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];

let sumAge = 0;
let hightAge= 0;

for (let i = 0; i < age.length; i++) {
    sumAge += age[i];
    if (age[i] > hightAge) {
        hightAge = age[i];
    }
}

console.log("the add of All years is " + sumAge);
console.log("the Old years of All years is " + hightAge);