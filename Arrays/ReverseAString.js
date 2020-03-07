function reverse(str){
  let newStr= [];
  let index = 0;
  for(let i = str.length - 1; i >= 0; i--) {
    newStr[index] = str[i]
    index++;
  }
  return newStr.join('');
}

let reverseWord = reverse("test")


