let answer = 1;

function findFactorialRecursive(number) {
  if(number > 0) {
   answer = answer * number
   findFactorialRecursive(number - 1)
  } else {
    console.log(answer)
  }
  return answer;
}

function findFactorialIterative(number) {
  while(number > 0) {
    answer = answer * number;
    number--;
  }
  return answer;
}

// findFactorialRecursive(5)
// findFactorialIterative(5);
