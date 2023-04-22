function rotateArray(arr, k) {
  // recursive solution, but is overengineering...
  // const end = arr.length-1;
  // return k===0 ? arr : rotateArray([...arr.slice(end),...arr.slice(0,end)], k-1);

  // O(n) solution
  const pop = arr.slice(arr.length - k);
  const rest = arr.slice(0,arr.length - k);
  return [...pop, ...rest];

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
 */
