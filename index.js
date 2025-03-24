function hasTargetSum(array, target) {
  // Create a set to store numbers we have seen
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (let num of array) {
    // Calculate the complement that would add up to the target
    let complement = target - num;

    // Check if we have already seen the complement
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // If no pair adds up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  - The function loops through the array once: O(n)
  - Checking and adding elements in a Set is O(1) on average
  - Overall time complexity: O(n)
*/

/* 
  Pseudocode:
  1. Create an empty Set to store numbers we have seen.
  2. Loop through the array:
    a. Compute the complement (target - current number).
    b. If the complement is in the Set, return true.
    c. Add the current number to the Set.
  3. If no pairs sum to the target, return false.
*/

/*
  Explanation:
  - We use a Set to keep track of numbers we’ve already encountered.
  - Instead of using a nested loop (O(n²)), we check for the complement in O(1) time.
  - This makes our solution efficient with O(n) time complexity.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
