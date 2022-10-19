function bmicalc(h, w) {
  let bmi = w / (h * h);
  let statement = "";
  switch (true) {
    case bmi < 18.5:
      statement = "Underweight";
      break;
    case bmi >= 18.5 && bmi < 25:
      statement = "Normal";
      break;
    case bmi >= 25 && bmi < 30:
      statement = "Overweight";
      break;
    case bmi >= 30 && bmi < 35:
      statement = "Obese";
      break;
    default:
      statement = "Extremly Obese";
      break;
  }
  return statement;
}
// console.log(bmicalc(1.7, 100));
//function bai2
function compareAge(nameA, nameB, ageA, ageB) {
  let result = "";
  let compare = "";
  let olderPerson = ageA > ageB ? ageA : ageB;
  let youngerPerson = ageA < ageB ? ageA : ageB;
  if (ageA > ageB) {
    compare = "lớn hơn";
  } else {
    compare = "nhỏ hơn";
  }
  return (result = `${nameA} ${compare} ${nameB} ${
    olderPerson - youngerPerson
  } tuổi`);
}
// console.log(compareAge("Nam","Tuấn", 14, 15));
//bai 1
const height = 1.6;
const weight = 80;
let result;
let statement = "";
result = weight / (height * height);
switch (true) {
  case result < 18.5:
    statement = "Underweight";
    break;
  case result >= 18.5 && result < 25:
    statement = "Normal";
    break;
  case result >= 25 && result < 30:
    statement = "Overweight";
    break;
  case result >= 30 && result < 35:
    statement = "Obese";
    break;
  default:
    statement = "Extremly Obese";
    break;
}
// console.log(statement);
//bai 2
const personOne = "Mai";
const personTwo = "Tuấn";
const ageOne = 20;
const ageTwo = 15;
let ketqua = "";
let olderPerson = ageOne > ageTwo ? ageOne : ageTwo;
let youngerPerson = ageOne < ageTwo ? ageOne : ageTwo;
// console.log(olderPerson);
if (ageOne > ageTwo) {
  ketqua = "lớn hơn";
} else {
  ketqua = "nhỏ hơn";
}
// console.log(
// `${personOne} ${ketqua} ${personTwo} ${
//   olderPerson - youngerPerson
// } tuổi `
// );
//bai 3
const day = 0;
let dayofweek = "";
let ketluan = "";
switch (day) {
  case 1:
    dayofweek = "Thứ hai";
    break;
  case 2:
    dayofweek = "Thứ ba";
    break;
  case 3:
    dayofweek = "Thứ tư";
    break;
  case 4:
    dayofweek = "Thứ năm";
    break;
  case 5:
    dayofweek = "Thứ sáu";
    break;
  case 6:
    dayofweek = "Thứ bảy";
    break;
  case 0:
    dayofweek = "Chủ Nhật";
    break;
}
let a = day >= 1 && day <= 5 ? "Ngày trong tuần" : "Ngày cuối tuần";
//   if(day == 0 || day == 6) {
//     ketluan = "Ngày cuối tuần"
//   }
//   else {
//     ketluan = "Ngày trong tuần"
//   }
// console.log(`${dayofweek} - ${a}`);
// console.log(a);
//baithuc hanh so 3.2
function convertCtoF(celcius) {
  return celcius * 1.8 + 32;
}
console.log(convertCtoF(10));
//bai thuc hanh so 3.3
function compareNum(a, b) {
  if (a >= b) {
    return a;
  }
  return b;
}
console.log(compareNum(1, 2));
//bai thuc hanh so 3.4
function checkTruthlyFalsy(value) {
  if (value) {
    return value;
  }
}
console.log(checkTruthlyFalsy(""));
//bai thuc hanh so 3.5
function convertNum(value) {
  if (typeof value === "number" && Number.isNaN(value) != true) {
    return value;
  } else {
    const a = Number(value);
    if (Number.isNaN(a)) {
      return 0;
    } else {
      return a;
    }
  }
}
console.log(convertNum(NaN));
//bai thuc hanh so 3.6
function checkSquare(a, b, c) {
  if (c == a * a + b * b) {
    return true;
  }
  return false;
}
console.log(checkSquare(1, 3, 5));
// console.log(Number(undefined))
//bai 4.1
function checkOdd(num) {
  if(num%2 == 0) {
    return "số chẵn"
  }
  return "số lẻ"
}
console.log(checkOdd(8));
//bai 4.2
function calcAreaCircle(r) {
  return 3.14* r * r;
}
console.log(calcAreaCircle(10));
//bai 4.3
function convertNumPx(value) {
  if (typeof value === "number" && Number.isNaN(value) != true) {
    return value + "px";
  } else {
    const a = Number(value);
    if (Number.isNaN(a)) {
      return "0px";
    } else {
      return a + "px";
    }
  }
}
console.log(convertNumPx(undefined))
//bai 4.4
function numRandom() {
  return Math.round(Math.random()*6) + 3 ;
}
console.log(numRandom());
