var Javabuzz = function(){};

Javabuzz.prototype.isDivisibleByThree = function(number){
  return number % 3 === 0;
};

Javabuzz.prototype.isDivisibleByFive = function(number){
  return number % 5 === 0;
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return number % 15 === 0;
};

Javabuzz.prototype.says = function(number) {
  if ( number === 3) {
    return 'Java'
  } else if ( number === 5){
    return 'Buzz'
  } else {
    return 'FizzBuzz'
  }
}