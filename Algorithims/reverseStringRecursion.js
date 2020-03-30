function reverseString(str) {
  let newStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    newStr+= str[i];
  }
  return newStr;
}

function recursiveString(str){
   if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseString('yoyo mastery')
