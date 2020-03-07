class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(string, num) {
    this.data.push([string,num])
    return this.data
  }

  get(index) {

    let hashItem = null;
    let i = this.data.length - 1;
    if(this.data[i] && this.data[i][0] !== undefined) {
      this.data.map(item => {
        if(item[0] === index) {
          hashItem = item;
        }
      })
    } 
    return hashItem;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes');
myHashTable.set('apples', 9)
myHashTable.get('apples');
