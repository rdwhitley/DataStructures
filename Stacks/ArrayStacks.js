class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.stack = [];
  }
  peek() {
    return this.stack[this.array.length - 1];
  }
  push(value){
    
    this.stack.push(value)
    return this;
  }
  pop(){
   this.stack.pop()
   return this;
  }
  //isEmpty
}

const myStack = new Stack();
// myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop()


//Discord
//Udemy
//google

