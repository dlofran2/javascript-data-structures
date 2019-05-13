import SingleLinkedList from "../SingleLinkedList";
import {
  CANNOT_FIND_EMPTY,
  INVALID_INDEX_NEGATIVE,
  INVALID_INDEX_OUTSIDE,
  INVALID_ADD_NEGATIVE,
  INVALID_ADD_OUTSIDE,
  INVALID_DELETE_NEGATIVE,
  INVALID_DELETE_OUTSIDE
} from "../SingleLinkedList/constants";

describe("SingleLinkedList", () => {
  let list;
  beforeEach(() => {
    list = new SingleLinkedList();
  });

  it("should handle initialization", () => {
    expect(list.length()).toBe(0);
    expect(list.empty()).toBeTruthy();
    expect(list.head).toBeNull();
  });

  it("should handle inserting items in the front of the list", () => {
    list.insertFront(200);
    expect(list.getDataAtPosition(0)).toBe(200);
    expect(list.length()).toBe(1);

    list.insertFront(100);
    expect(list.getDataAtPosition(0)).toBe(100);
    expect(list.getDataAtPosition(1)).toBe(200);
    expect(list.length()).toBe(2);
  });

  it("should handle inserting items in the back of the list", () => {
    list.insertEnd(100);
    expect(list.getDataAtPosition(0)).toBe(100);
    expect(list.length()).toBe(1);

    list.insertEnd(200);
    expect(list.getDataAtPosition(0)).toBe(100);
    expect(list.getDataAtPosition(1)).toBe(200);
    expect(list.length()).toBe(2);
  });

  it("should handle inserting items in the middle of the list", () => {
    list.insertEnd(100);
    list.insertEnd(300);
    expect(list.length()).toBe(2);

    list.insertDataAtPosition(200, 1);
    expect(list.getDataAtPosition(0)).toBe(100);
    expect(list.getDataAtPosition(1)).toBe(200);
    expect(list.getDataAtPosition(2)).toBe(300);
    expect(list.length()).toBe(3);
  });

  it("should handle adding items at the front of the list with the insertDataAtPosition method", () => {
    list.insertDataAtPosition(100, 0);
    expect(list.getDataAtPosition(0)).toBe(100);
    expect(list.length()).toBe(1);
  });

  it("should delete items from the front of the list", () => {
    list.insertEnd(100);
    list.insertEnd(200);
    expect(list.length()).toBe(2);

    list.deleteFront();
    expect(list.getDataAtPosition(0)).toBe(200);
    expect(list.length()).toBe(1);

    list.deleteFront();
    expect(list.length()).toBe(0);
  });

  it("should delete items from the end of the list", () => {
    list.insertEnd(100);
    list.insertEnd(200);
    expect(list.length()).toBe(2);

    list.deleteEnd();
    expect(list.getDataAtPosition(0)).toBe(100);
    expect(list.length()).toBe(1);

    list.deleteFront();
    expect(list.length()).toBe(0);
  });

  it("should delete items from the middle of the list", () => {
    list.insertEnd(100);
    list.insertEnd(200);
    list.insertEnd(300);
    expect(list.length()).toBe(3);

    list.deleteDataAtPosition(1);
    expect(list.length()).toBe(2);
    expect(list.getDataAtPosition(0)).toBe(100);
    expect(list.getDataAtPosition(1)).toBe(300);
  });

  it("should handle deleting items at the front of the list with the deleteDataAtPosition method", () => {
    list.insertFront(100);
    expect(list.length()).toBe(1);
    list.deleteDataAtPosition(0);
    expect(list.length()).toBe(0);
  });

  it("should handle attempt to delete on an empty list", () => {
    expect(list.length()).toBe(0);
    list.deleteFront(0);
    list.deleteEnd(0);
  });

  it("should handle error cases of the getDataAtPosition method", () => {
    expect(() => list.getDataAtPosition(0)).toThrowError(new Error(CANNOT_FIND_EMPTY));
    list.insertFront(100);
    expect(() => list.getDataAtPosition(-1)).toThrowError(new Error(INVALID_INDEX_NEGATIVE));
    expect(() => list.getDataAtPosition(2)).toThrowError(new Error(INVALID_INDEX_OUTSIDE));
  });

  it("should handle error cases of the insertDataAtPosition method", () => {
    expect(() => list.insertDataAtPosition(100, -1)).toThrowError(new Error(INVALID_ADD_NEGATIVE));
    expect(() => list.insertDataAtPosition(100, 1)).toThrowError(new Error(INVALID_ADD_OUTSIDE));
  });

  it("should handle error cases of the deleteDataAtPosition method", () => {
    expect(() => list.deleteDataAtPosition(-1)).toThrowError(new Error(INVALID_DELETE_NEGATIVE));
    expect(() => list.deleteDataAtPosition(1)).toThrowError(new Error(INVALID_DELETE_OUTSIDE));
  });

  it("should the printList method", () => {
    list.insertFront(100);
    list.insertFront(200);
    list.insertFront(300);
    list.insertFront(400);
    list.insertFront(500);
    expect(list.printList()).toMatchSnapshot();
  });
});
