import SingleLinkedList from "../SingleLinkedList/index.js";
import {
  CANNOT_FIND_EMPTY,
  INVALID_INDEX_NEGATIVE,
  INVALID_INDEX_OUTSIDE,
  INVALID_ADD_OUTSIDE,
  INVALID_ADD_NEGATIVE,
  INVALID_DELETE_NEGATIVE,
  INVALID_DELETE_OUTSIDE
} from "../SingleLinkedList/constants.js";
import { runTest, summarizeTests, testErrorHandling } from "./utils/testHelpers.js";

let testArr = [];

/* MAJOR FUNCTIONALITY */
// List instantiation tests
const list = new SingleLinkedList();
runTest("it should create an empty list", list.empty(), testArr);
runTest("it should have a length of 0", list.length() === 0, testArr);
runTest("it should default the head to null", list.head === null, testArr);

// Inserting items in the front
console.log("\ninserting new item at the front of the list");
list.insertFront(300);
runTest("it should match the value at position 0", list.getDataAtPosition(0) === 300, testArr);
runTest("it should have a length of 1", list.length() === 1, testArr);

console.log("\ninserting new item at the front of the list");
list.insertFront(200);
runTest("it should match the value at position 0", list.getDataAtPosition(0) === 200, testArr);
runTest("it should have a length of 2", list.length() === 2, testArr);

console.log("\ninserting new item at the front of the list");
list.insertFront(100);
runTest("it should match the value at position 0", list.getDataAtPosition(0) === 100, testArr);
runTest("it should have a length of 2", list.length() === 3, testArr);

// Appending items
console.log("\ninserting new item at the end of the list");
list.insertEnd(600);
runTest("it should match the value at position 3", list.getDataAtPosition(3) === 600, testArr);
runTest("it should have a length of 4", list.length() === 4, testArr);

console.log("\ninserting new item at the end of the list");
list.insertEnd(700);
runTest("it should match the value at position 4", list.getDataAtPosition(4) === 700, testArr);
runTest("it should have a length of 5", list.length() === 5, testArr);

// Inserting items at specific indexes
console.log("\ninserting new item at the at position 3 in the list");
list.insertDataAtPosition(400, 3);
runTest("it should match the value at position 3", list.getDataAtPosition(3) === 400, testArr);
runTest("it should push the value that was at position 3 (600) to position 4", list.getDataAtPosition(4) === 600, testArr);
runTest("it should push the value that was at position 4 (700) to position 5", list.getDataAtPosition(5) === 700, testArr);
runTest("it should have a length of 6", list.length() === 6, testArr);

console.log("\ninserting new item at the at position 4 in the list");
list.insertDataAtPosition(500, 4);
runTest("it should match the value at position 4", list.getDataAtPosition(4) === 500, testArr);
runTest("it should push the value that was at position 4 (600) to position 5", list.getDataAtPosition(5) === 600, testArr);
runTest("it should push the value that was at position 5 (700) to position 6", list.getDataAtPosition(6) === 700, testArr);
runTest("it should have a length of 7", list.length() === 7, testArr);

// Deleting item at the front of the list
console.log("\ndeleting item at the front of the list");
list.deleteFront();
runTest("the value that was at position 1 (200) should now be at position 0", list.getDataAtPosition(0) === 200, testArr);
runTest("it should have a length of 6", list.length() === 6, testArr);

// Deleting item at the end of the list
console.log("\ndeleting item at the end of the list");
list.deleteEnd();
runTest("it should have a length of 5", list.length() === 5, testArr);
testErrorHandling("should catch when finding the item we deleted", () => list.getDataAtPosition(6), true, testArr, INVALID_INDEX_OUTSIDE);

// Deleting item in the middle of the list
console.log("\ndeleting item in the middle of the list");
list.deleteDataAtPosition(2);
runTest("the value that was at position 3 (500) should now be at position 2", list.getDataAtPosition(2) === 500, testArr);
runTest("it should have a length of 4", list.length() === 4, testArr);

/* EDGE CASES */
console.log("\n\nEDGE CASES");
console.log("insertDataAtPosition edge cases");
const insertDataAtPositionOutOfList = new SingleLinkedList();
insertDataAtPositionOutOfList.insertEnd(1);
testErrorHandling("should catch if adding ", () => insertDataAtPositionOutOfList.insertDataAtPosition(100, 100), true, testArr, INVALID_ADD_OUTSIDE);

console.log("\ngetDataAtPosition edge cases");
const getDataAtPosition = new SingleLinkedList();
testErrorHandling("should catch when finding in an empty list", () => getDataAtPosition.getDataAtPosition(0), true, testArr, CANNOT_FIND_EMPTY);
getDataAtPosition.insertFront(300);
testErrorHandling("should catch when finding a negative index", () => getDataAtPosition.getDataAtPosition(-1), true, testArr, INVALID_INDEX_NEGATIVE);
testErrorHandling("should catch when finding an item at an index that doesn't exist", () => getDataAtPosition.getDataAtPosition(1000), true, testArr, INVALID_INDEX_OUTSIDE);

console.log("\ngdeleteDataAtPosition edge cases");
const deleteDataAtPosition = new SingleLinkedList();
testErrorHandling("should catch when deleting a negative index", () => deleteDataAtPosition.deleteDataAtPosition(-1), true, testArr, INVALID_DELETE_NEGATIVE);
testErrorHandling("should catch when deleting an index that doesn't exist", () => getDataAtPosition.deleteDataAtPosition(100), true, testArr, INVALID_DELETE_OUTSIDE);

summarizeTests(testArr);
