//Given a number x, find out if it is a prime number or not.
function isPrimeNum(num) {
  let flag = true;

  if (num <= 0) {
    return "It is a -ve Number";
  } else if (num === 1) {
    return "one is not a prime number";
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

//To Find next Prime Number
function nextPrimeNum(num) {
  num = num + 1;
  while (!isPrimeNum(num)) {
    num++;
  }
  return num;
}

//If Prime number then Difference with next prime number
//Main Function
function isPrimeAndNextDiff(num) {
  if (isPrimeNum(num)) {
    let diff = nextPrimeNum(num) - num;
    return console.log(
      `${num} is a Prime Number and the diff with next prime number is: ${diff}`
    );
  } else {
    return console.log(`${num} is not a Prime Number`);
  }
}

isPrimeAndNextDiff(31);
//Output
//31 is a Prime Number and the diff with next prime number is: 6
