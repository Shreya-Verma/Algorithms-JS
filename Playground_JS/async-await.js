/**
 *
 * Aync await through generators
 */
function doWhenDataReceived(value) {
  // callback function to be called
  returnNextElement.next(value); //doing this, resumes the generator function to run line console.log(data);
}
function* createFlow() {
  const data = yield fetch("https://cat-fact.herokuapp.com/facts");
  // returns afer yield, at this point assignment to data is kept on hold and the value of data is undefines
  // Data is the complete response , we still have to await .json() on data., which will still be a promise. So again we have to do .then() to get the values
  console.log(data);
}
const returnNextElement = createFlow(); // an iterator , waiting to call .next();
const futureData = returnNextElement.next(); // is an iterator object containing  promise, // {value: Promise, done: false}
futureData.value.then(doWhenDataReceived);
