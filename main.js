/* -----Задача 1----- */

function makePassword() {
  
  var password = 'Vasya';

  return function (passwordGuess) {
    return (passwordGuess == password)
  }
}

var tryPassword = prompt('Password?'),
  test = makePassword();

test(tryPassword);
console.log(test(tryPassword))

/* -----Задача 2----- */

function makeRand() {
  var usedNumbers = [];

  return function randNum() {
    var num = Math.floor(Math.random() * 100);
    if (!usedNumbers.includes(num)) {
      usedNumbers.push(num);
      console.log(usedNumbers)
    }
  }
}

var test = makeRand();

for (var i = 0; i < 10; i++) {
  test();
}