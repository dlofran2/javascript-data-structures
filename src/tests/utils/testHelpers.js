export const runTest = (name, test, testArr) => {
  console.log(name, test);
  testArr.push({ name, passing: test });
};

export const testErrorHandling = (name, test, shouldCatch, testArr, message) => {
  try {
    test();
    console.log(name, !shouldCatch);
    testArr.push({ name, passing: !shouldCatch });
  } catch (error) {
    let valid = shouldCatch && message === error.message;
    console.log(name, valid);
    testArr.push({ name, passing: valid });
  }
};

export const summarizeTests = testArr => {
  const numberOfTests = testArr.length;
  const numberOfPassingTests = testArr.filter(test => test.passing).length;
  const numberOfFailingTests = numberOfTests - numberOfPassingTests;
  console.log(`\nNumber of tests: ${numberOfTests}`);
  console.log(`Passing tests: ${numberOfPassingTests}`);
  console.log(`Failing tests: ${numberOfFailingTests}`);
  testArr.filter(test => !test.passing).map(test => console.log("FAIL:", test.name));
};
