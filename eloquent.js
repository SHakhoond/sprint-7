/*----------Minimum-----------*/
function min(first, second) {
  if (first < second) {
    return first;
  }
  return second;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
//-------------------------------------

/*---------Recursion---------*/
function isEven(number) {
  var whole_number = Math.abs(parseInt(number, 10));
  if (whole_number === 0) {
    return true;
  }else if (whole_number === 1) {
    return false;
  }else{
  	return isEven(whole_number - 2);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
//-----------------------------


function countBs(word) {
  return countChar(word, "B");
}

function countChar(word, character) {
  var total = 0;
  for (var count = word.length - 1; count > -1; count--) {
    if (word.charAt(count) === character) {
      total += 1;
    }
  }
  return total;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4