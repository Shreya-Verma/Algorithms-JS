export function naiveBubbleSort(original) {
  if (!original || original.length == 0) return -1;
  if (original.length === 1) return original;

  let arr = [...original];

  for (let i = 0; i < arr.length; i++) {
    //passess
    console.log("pass ", i);
    let swap = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap += 1;
        console.log("swap", swap);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/**
 *
 *  Time complexity:
 *  Best: O(n) : array is already sorted
 *  Avg: O(n^2)
 *  Worst: O(n^2)
 *
 */
export function bubbleSort(original) {
  //[40, 60, 50, 20, 100, 10, 30, 80, 90, 70]
  if (!original || !original.length) return -1;
  if (original.length === 1) return original;

  let arr = [...original];
  let swapped;
  let pass = 0;

  do {
    swapped = false;
    pass += 1;
    console.log("Effextive pass", pass);
    let swap = 0;
    for (let i = 0; i < arr.length; i++) {
      //40
      //60
      //60
      //60
      //100
      //100
      //100
      //100
      //100
      //..
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        //false
        //true
        //true
        //false
        //true
        //true
        //true
        //true
        //true
        swap += 1;
        console.log("Effective swap", swap);
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        //[40, 50, 60, 20, 100, 10, 30, 80, 90, 70]
        //[40, 50, 20, 60, 100, 10, 30, 80, 90, 70]
        //[40, 50, 20, 60, 10, 100, 30, 80, 90, 70]
        //[40, 50, 20, 60, 10, 30, 100, 80, 90, 70]
        //[40, 50, 20, 60, 10, 30, 80, 100, 90, 70]
        //[40, 50, 20, 60, 10, 30, 80, 90, 100, 70]
        //[40, 50, 20, 60, 10, 30, 80, 90, 70, 100]
        //....
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
