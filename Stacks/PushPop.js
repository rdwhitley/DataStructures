class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    if(!this.top) {
      this.top = value;
      this.bottom = value;
      this.length++;
    } else {
      let temp = this.top;
      this.top = value;
      this.top.next = temp;
      this.length++;
    }
    return this;
  }
  pop(){
    let temp = this.top.next;
    this.top = null;
    this.top = temp;
    this.length --;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
const discord = new Node('discord',null);
const udemy = new Node('udemy', null)
const google = new Node('google',null)
myStack.push(discord)
myStack.push(udemy)
myStack.push(google)
myStack.pop()

//Discord
//Udemy
//google
