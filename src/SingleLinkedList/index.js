import { CANNOT_FIND_EMPTY, INVALID_INDEX_NEGATIVE, INVALID_INDEX_OUTSIDE, INVALID_ADD_OUTSIDE, INVALID_ADD_NEGATIVE, INVALID_DELETE_NEGATIVE, INVALID_DELETE_OUTSIDE } from "./constants.js";

class Node {
  constructor(data) {
    this.data = data;
    this._next = null;
  }
}

export default class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  printList() {
    let currentNode = this.head,
      arr = [];

    while (currentNode) {
      console.log(`Data: ${currentNode.data}, Next: ${currentNode._next ? currentNode._next.data : currentNode._next}`);
      arr.push(currentNode.data);
      currentNode = currentNode._next;
    }

    return arr;
  }

  getDataAtPosition(x) {
    let currentNode = this.head,
      count = 0;

    if (this.empty()) {
      throw new Error(CANNOT_FIND_EMPTY);
    } else if (x < 0) {
      throw new Error(INVALID_INDEX_NEGATIVE);
    }

    while (currentNode && count < x) {
      currentNode = currentNode._next;
      count++;
    }

    if (!currentNode) {
      throw new Error(INVALID_INDEX_OUTSIDE);
    }

    return currentNode.data;
  }

  empty() {
    return this.head === null;
  }

  length() {
    let currentNode = this.head,
      count = 0;

    while (currentNode) {
      currentNode = currentNode._next;
      count++;
    }

    return count;
  }

  insertFront(value) {
    if (this.empty()) {
      this.head = new Node(value);
      return;
    }

    const newNode = new Node(value);
    newNode._next = this.head;
    this.head = newNode;
  }

  insertEnd(value) {
    if (this.empty()) {
      this.head = new Node(value);
      return;
    }

    let currentNode = this.head;
    while (currentNode._next !== null) {
      currentNode = currentNode._next;
    }

    currentNode._next = new Node(value);
  }

  insertDataAtPosition(value, index) {
    if (index < 0) {
      throw new Error(INVALID_ADD_NEGATIVE);
    }

    if (index === 0) {
      this.insertFront(value);
      return;
    }

    let currentNode = this.head,
      prevNode = null,
      count = 0;

    while (count < index) {
      if (!currentNode) {
        throw new Error(INVALID_ADD_OUTSIDE);
      }
      prevNode = currentNode;
      currentNode = currentNode._next;
      count++;
    }

    const newNode = new Node(value);
    newNode._next = currentNode;
    prevNode._next = newNode;
  }

  deleteFront() {
    if (this.empty()) return;
    let currentNode = this.head;
    this.head = currentNode._next;
  }

  deleteEnd() {
    if (this.empty()) return;
    let currentNode = this.head,
      prevNode = null;
    while (currentNode && currentNode._next !== null) {
      prevNode = currentNode;
      currentNode = currentNode._next;
    }
    prevNode._next = null;
  }

  deleteDataAtPosition(index) {
    if (index < 0) {
      throw new Error(INVALID_DELETE_NEGATIVE);
    }

    if (index === 0) {
      this.deleteFront(index);
      return;
    }

    let currentNode = this.head,
      prevNode = null,
      count = 0;

    while (count < index) {
      if (!currentNode) {
        throw new Error(INVALID_DELETE_OUTSIDE);
      }
      prevNode = currentNode;
      currentNode = currentNode._next;
      count++;
    }

    prevNode._next = currentNode._next;
  }
}
