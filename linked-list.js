/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)

    if (this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    if (this.length === 0) this.tail = this.head;

    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let pop = this.tail.val

    while (currentNode) {
      currentNode = currentNode.next
      if (currentNode.next === this.tail){
        this.tail = currentNode;
        currentNode.next = null;
      }
    }
    return pop;
  }

  /** shift(): return & remove first item. */

  shift() {
    let shift = this.head;
    let currentNode = this.head;
    this.head = currentNode.next

    return shift;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for (let i = 0; i < idx; i++){
      currentNode = currentNode.next
      console.log(currentNode);
    }
    return currentNode
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let newNode = new Node(val);

    while(currentNode != newNode) {
      for (let i = 0; i < idx-1; i++){
        currentNode = currentNode.next
      }
      newNode.next = currentNode.next;
      currentNode = newNode;
    }

    newNode.next = currentNode.next
    this.head = newNode

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let newNode = new Node(val);

    if(idx != 0){
      for (let i = 0; i < idx-1; i++){
        currentNode = currentNode.next
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode
    }  

    newNode.next = currentNode
    this.head = newNode

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let leftNode = null;
    let idxNode = null;

    if(idx != 0){

      for(i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next
        leftNode = currentNode
      } 
      leftNode = currentNode

      for(i = 0; i < idx; i++) {
        currentNode = currentNode.next
        idxNode = currentNode
      }
      idxNode = currentNode

      leftNode.next = idxNode.next

      return currentNode
    } else {
      this.head = currentNode.next
      return currentNode
    }

  }




  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let sum = 0;
    let counter = 0;

    while(currentNode){
      sum = sum + currentNode;
      counter += 1;
      currentNode = currentNode.next;
    }
    return sum/counter;
  }
}

module.exports = LinkedList;
