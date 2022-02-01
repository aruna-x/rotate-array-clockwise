function rotateArray(arr, k) {
  for(let i=0; i<k%arr.length; i++){
    let end = arr.pop();
    arr.unshift(end);
  }
  return arr;
}

if (require.main === module) {
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: [3, 1, 2]");
  console.log("=>", rotateArray([1, 2, 3], 4));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 0));
}

module.exports = rotateArray;

/**
 * 1. paraphrase
 * 
 * given an array and k, shift all elements clockwise k times.
 * clockwise = shift to the right, last el shifts to the beginning.
 * 
 * 2. tests
 * 
 * [1, 2, 3], 4
 * 
 * 3. pseudocode
 * 
 * use pop and unshift, k % arr.length times
 * 
 * 4. code (above)
 * 5. refactor
 * 6. optimize if time
 */
