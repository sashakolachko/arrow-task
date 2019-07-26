let deleteSigns = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

let filterStopSigns = (arr1, arr2) => {
  let filteredArray = arr1.map(elem => deleteSigns(elem.split(''), arr2).join(''));
  return filteredArray;
}

let arr = ['Simple % things@', 'crazy@day yesterday@', 'Excellent@'];
let stop = ['@', '$', '%'];
console.log(filterStopSigns(arr, stop));



let celebrate = (name, age, city) => {
  return `Dear, ${name}, happy birthday to you! I can't believe that you are already ${age}.I wish you a happier birthday than anyone else has wished you! Have a great time, with memories to last you throughout the whole year in your hometown - ${city}.`;
}

console.log(celebrate("Sasha", 93, "Kyiv"));

let deleteWords = (arr) => {
  let newArr = arr.filter(elem => elem[0].toLowerCase() == elem[elem.length - 1].toLowerCase());
  return newArr;
}

let words = ['Anna', 'Bob', 'sasha', 'anna', 'bob', "vasiliy"];
console.log(deleteWords(words));


let deleteNumbers = (numbersArr) => {
  let newNumbersArr = numbersArr.filter(number => (number - 50) > 0);
  return newNumbersArr;
}
let numbers = [12, 56, 67, 9, 0, 32, 555];
console.log(deleteNumbers(numbers));

let isPalindrome = (str) => {
  let reverseStr = str.split('').reverse().join('');
  if (reverseStr.toLowerCase() == str.toLowerCase()) {
    return true;
  }
  return false;
}

let delectPalindromes = (arr) => {
  let filtered = arr.filter(elem => !isPalindrome(elem));
  return filtered;
}

let arrPalindrom = ["anna", "sasha", "monday", "Level", "window", "Redder"];
console.log(delectPalindromes(arrPalindrom));
