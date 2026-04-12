// 1. How to Count Number of Alphabets in a String?
const countAlphabets = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      (str.charAt(i) >= "A" && str.charAt(i) <= "Z") ||
      (str.charAt(i) >= "a" && str.charAt(i) <= "z")
    ) {
      count++;
    }
  }
  return count;
};

const alphabets = countAlphabets("Hello World! 123");

console.log(alphabets);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. How to Count Numbers of Vowels in a String?

const countVowels = (str) => {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

const vowels = countVowels("Hello World! 123");

console.log(vowels);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. How to Count Number of Words in a String?

const countWords = (str) => {
  let words = str.trim().split(/\s+/);
  return words.length;
};

const wordCount = countWords("Hello World! 123");

console.log(wordCount);

// OR

const countWordsInString = (str) => {
    let words = str.trim().split(" ");
    return words.length;
}

const countedWords = countWordsInString("Hello World Hey");
console.log(countedWords)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. How to Count Number of Sentences in a String?

const countSentences = (str) => {
  let sentences = str.split(/[.!?]+/);
  return sentences.filter((sentence) => sentence.trim().length > 0).length;
};

const sentenceCount = countSentences("Hello World! How are you? I am fine.");

console.log(sentenceCount);

// OR

const countSentencesInString = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.' || str[i] === '!' || str[i] === '?') {
      count++;
    }
  }
  return count;
};

const sentenceCounted = countSentencesInString("Hello World! How are you? I am fine.");

console.log(sentenceCounted);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. How to Remove Duplicate Elements from JavaScript Array?

const removeDuplicates = (arr) => {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};

const unique = removeDuplicates([1, 2, 3, 2, 4, 1, 5]);

console.log(unique);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. How to Find Duplicate Elements in an Array

const findDuplicates = (arr) => {
  let duplicates = [];
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    } else {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
};

const duplicates = findDuplicates([1, 2, 3, 2, 4, 1, 5]);
const sortedDuplicates = duplicates.sort((a, b) => a - b);

console.log(sortedDuplicates);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. How to find Factorial of a Number

const factorial = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
};

const fact = factorial(5);

console.log(fact);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. How to Reverse a String

const reversedString = (str) => {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }

  return reverse;
};

const reversed = reversedString("Hello World!");

console.log(reversed);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. How to Reverse a Number

const reverseNumber = (num) => {
  let reversed = 0;

  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10;
    reversed = reversed * 10 + digit;
  }

  return reversed;
};

const reversedNum = reverseNumber(12345);

console.log(reversedNum);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. How to Sort an Array

const sortArray = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);

  return sortedArray;
};

const sorted = sortArray([5, 2, 9, 1, 5, 6]);

console.log(sorted);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. How to Swap two numbers without using third

const swapNumbers = (a, b) => {
  [a, b] = [b, a];

  return [a, b];
};

const swapped = swapNumbers(5, 10);

console.log(swapped);

// Using Arithmetic Operations

const swapWithoutTemp = (a, b) => {
  a = a + b; // a now holds the sum of a and b
  b = a - b; // b now holds the original value of a
  a = a - b; // a now holds the original value of b

  return [a, b];
};

const swappedWithoutTemp = swapWithoutTemp(5, 10);

console.log(swappedWithoutTemp);  

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. Find Second Largest and Third Largest Numbers.

const findLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (num > thirdLargest && num !== secondLargest) {
      thirdLargest = num;
    }
  }

  return [secondLargest, thirdLargest];
};

const largestNumbers = findLargest([5, 2, 9, 1, 5, 6]);
console.log(largestNumbers);

// OR

const LargestNumbers = (arr) => {
    let largest = 0, secondLargest = 0, thirdLargest = 0;
    
    for(let i=0; i< arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    

    for(let i=0; i<arr.length; i++){
        if(arr[i] > thirdLargest && arr[i] !== largest && arr[i] !== secondLargest){
            thirdLargest = arr[i];
        }
    }
    
    return {secondLargest, thirdLargest};
}

const largest = findLargest([5, 2, 9, 1, 5, 6]);
console.log(largest);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 12. Find Second Smallest and Third Smallest Numbers.

const findSmallest = (arr) => {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  let thirdSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = num;
    } else if (num < thirdSmallest && num !== secondSmallest) {
      thirdSmallest = num;
    }
  }

  return [secondSmallest, thirdSmallest];
};

const smallestNumbers = findSmallest([5, 2, 9, 1, 5, 6]);
console.log(smallestNumbers);

// OR

const smallestNumber = (arr) => {
    
    let smallest = arr[0], secondSmallest=arr[1], thirdSmallest=arr[2];
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < secondSmallest && arr[i] !== smallest){
            secondSmallest = arr[i];
        }
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < thirdSmallest && arr[i] !== smallest && arr[i] !== secondSmallest){
            thirdSmallest = arr[i];
        }
    }
    
    return {smallest, secondSmallest, thirdSmallest};
}

const smallest = findSmallest([5, 2, 9, 1, 5, 6]);
console.log(smallest);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Check if a number is Prime.

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const primeCheck = isPrime(7);

console.log(primeCheck);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Check if a number is Even or Odd without using %.

const isEvenOrOdd = (num) => {
  for (let i = 0; i < num; i++) {
    if (Math.floor(num / i) * i === num) {
      return true;
    }
  }
  return false;
};

const evenOrOdd = isEvenOrOdd(10);

console.log(evenOrOdd);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 15. Check if a number is Palindrome.

const isPalindrome = (num) => {
  let originalNum = num;
  let reversedNum = 0;

  while (num > 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  return originalNum === reversedNum;
};

const palindromeCheck = isPalindrome(12321);

console.log(palindromeCheck);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 16. Check if a String is Palindrome.

const isStringPalindrome = (str) => {
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
};

const stringPalindromeCheck = isStringPalindrome("A man, a plan, a canal, Panama");

console.log(stringPalindromeCheck); 

// OR

const StringPalindrome = (str) => {
  // First remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'a' && char <= 'z') || 
        (char >= 'A' && char <= 'Z') || 
        (char >= '0' && char <= '9')) {
      cleanedStr += char.toLowerCase();
    }
  }
  
  let reversedStr = cleanedStr.split("").reverse().join("");
  
  return cleanedStr === reversedStr;
};

const stringPalindromeChecked = StringPalindrome("A man, a plan, a canal, Panama");
console.log(stringPalindromeChecked); // true

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17. Check if a String is Anagram. 
//Anagram = Two strings that contain the same characters in the same frequency, just in a different order.

const areAnagrams = (str1, str2) => {
  const cleanString = (str) =>
    str.replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").sort().join("");

  return cleanString(str1) === cleanString(str2);
};

const anagramCheck = areAnagrams("listen", "silent");

console.log(anagramCheck);

// OR

const isAnagram = (str1, str2) => {
  // Remove spaces and convert to lowercase
  const clean1 = str1.replace(/[^A-Za-z]/g, "").toLowerCase();
  const clean2 = str2.replace(/[^A-Za-z]/g, "").toLowerCase();
  
  // If lengths differ, can't be anagrams
  if (clean1.length !== clean2.length) return false;
  
  // Sort characters and compare
  const sorted1 = clean1.split("").sort().join("");
  const sorted2 = clean2.split("").sort().join("");
  
  return sorted1 === sorted2;
};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("debit card", "bad credit")); // true

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18. Check if a String is a Substring of Another String.

const isSubstring = (str1, str2) => {
  return str2.includes(str1);
};

const substringCheck = isSubstring("world", "Hello World!");

console.log(substringCheck);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 19. Check if a String is a Rotation of Another String.

// A string rotation means taking a string and moving some characters from the beginning to the end (or vice versa) while maintaining order.

const areRotations = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const combined = str1 + str1;
  return combined.includes(str2);
};

const rotationCheck = areRotations("abcde", "deabc");

console.log(rotationCheck);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//20. Sum of All integers in an Array.

const sumOfArray = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
};

const arraySum = sumOfArray([1, 2, 3, 4, 5]);

console.log(arraySum);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 21. Check if a String Contains Only Digits.

const containsOnlyDigits = (str) => {
  for (let char of str) {
    if (char < "0" || char > "9") {
      return false;
    }
  }
  return true;
};

const onlyDigitsCheck = containsOnlyDigits("12345");

console.log(onlyDigitsCheck);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 22. Check if a String Contains Only Alphabets.

const containsOnlyAlphabets = (str) => {
  for (let char of str) {
    if (
      (char < "A" || char > "Z") &&
      (char < "a" || char > "z")
    ) {
      return false;
    }
  }
  return true;
};

const onlyAlphabetsCheck = containsOnlyAlphabets("Hello");

console.log(onlyAlphabetsCheck);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 23. Check if a String Contains Only Alphanumeric Characters.

const containsOnlyAlphanumeric = (str) => {
  for (let char of str) {
    if (
      (char < "A" || char > "Z") &&
      (char < "a" || char > "z") &&
      (char < "0" || char > "9")
    ) {
      return false;
    }
  }
  return true;
};

const onlyAlphanumericCheck = containsOnlyAlphanumeric("Hello123");

console.log(onlyAlphanumericCheck);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//24. Multiply two numbers without using * operator.

const multiply = (a, b) => {
  let result = 0;

  for (let i = 0; i < Math.abs(b); i++) {
    result += Math.abs(a);
  }

  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return -result;
  }
  return result;
};

const multiplicationResult = multiply(5, -3);

console.log(multiplicationResult);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//25. Find Missing Number in any array.

const findMissingNumber = (arr, n) => {
  let totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  let arraySum = arr.reduce((sum, num) => sum + num, 0); // Actual sum of array elements

  return totalSum - arraySum;
};

const missingNumber = findMissingNumber([1, 2, 4, 5], 5);

console.log(missingNumber);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 26. Swaps the number between 15 and 20 without using any conditional statement if number is 15 return 20 and if number is 20 return 15.

const swapNumber = (num) => {
    return 35 - num;
}

const swappedNumber = swapNumber(15);

console.log(swappedNumber);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 27. Find max Numbers in an Array

const findMax = (arr) => {
      let max = arr[0];

      for(let i=0; i<arr.length; i++){
            if(arr[i] > max){
                  max = arr[i];
            }
      }
      return max;
}

const maxNumber = findMax([1, 2, 3, 4, 5]);

console.log(maxNumber);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 28. Write a function that counts how many times a given element (target) appears in an array.

const countOccurrences = (arr, target) => {
  let count = 0;

  for(let i=0; i<arr.length; i++){
    if(arr[i] === target){
      count++;
    }
  }     
      return count;
}

const occurrences = countOccurrences([1, 2, 3, 2, 4, 2], 2);

console.log(occurrences);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 29. Find Consecutive Numbers in an Array

const findConsecutive = (arr) => {
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] === arr[i - 1] + 1) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [1000, 2, 50, 3, 1, 4];
console.log(findConsecutive(numbers));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 30. INPUT

// [
//   ["ton", "ate", "rat"],
//   ["tea", "eat", "not"],
//   ["tar"]
// ]

// Expected Output

// [
//   ["ate", "eat", "tea"],
//   ["ton", "not"],
//   ["tar", "rat"]
// ] 

// Simple Method

// Steps

// 1. Flatten the array (convert nested arrays into one array).

// 2. Sort characters of each word to create a key.

// 3. Group words with the same sorted key.

const groupAnagrams = (arr) => {

  // Step 1: Flatten array
  const words = arr.flat();
  const map = {};
  for (let word of words) {

    // Step 2: sort letters
    const key = word.split("").sort().join("");

    // Step 3: group anagrams
    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  return Object.values(map);

}


const input = [
  ["ton", "ate", "rat"],
  ["tea", "eat", "not"],
  ["tar"]
];

console.log(groupAnagrams(input));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 31. Find the five longest words that appear only once in the string

// Simple Method

// Steps

// 1. Convert string → array of words

// 2. Count occurrences

// 3. Keep words that appear once

// 4. Sort by word length (descending)

// 5. Take first 5 words

const findLongestUniqueWords = (str) => {

  const words = str.toLowerCase().split(" ");

  const uniqueWords = words.filter(word =>
    words.indexOf(word) === words.lastIndexOf(word)
  );

  uniqueWords.sort((a, b) => b.length - a.length);
  return uniqueWords.slice(0, 5);

}

const str = "JavaScript is powerful and JavaScript developers write powerful applications using modern frameworks";

console.log(findLongestUniqueWords(str));

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 32. Find the first Non-repeating character in the string.

const firstNonRepeatingChar = (str) => {

  for (let i = 0; i < str.length; i++) {

    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }

  }

  return null;
}

const nonRepeatingChar = firstNonRepeatingChar("swiss");

console.log(nonRepeatingChar);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 33. Find the missing Number in an array of 1 to N.

const findMissingNumber = (arr) => {
  const n = arr.length + 1;

  for(let i = 1; i <= n; i++){
    if(!arr.includes(i)){
      return i;
    }
  }

}

const missingNum = findMissingNumber([1, 2, 4, 5]);

console.log(missingNum);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 34. Reverse an integer without converting to string.

// Simple Method (Using Math)

// Idea

// 1. Get last digit using modulus %

// 2. Add it to reversed number

// 3. Remove last digit using Math.floor(num / 10)

const reverseInteger = (num) => {

  let reversed = 0;

  let sign = num < 0 ? -1 : 1;
  num = Math.abs(num);

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed * sign;
}

const reversedInt = reverseInteger(-12345);

console.log(reversedInt);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 35. Find the most frequent element in an Array.

const mostFrequent = (arr) => {

  let maxCount = 0;
  let result;

  for(let i = 0; i < arr.length; i++){

    let count = 0;

    for(let j = 0; j < arr.length; j++){

      if(arr[i] === arr[j]){
        count++;
      }

    }

    if(count > maxCount){
      maxCount = count;
      result = arr[i];
    }

  }

  return result;
}

const frequentElement = mostFrequent([1, 2, 3, 2, 4, 1, 5]);

console.log(frequentElement);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 36. Move all Zeros to end of an Array.

// Idea

// 1. Create a new array for non-zero numbers

// 2. Count zeros

// 3. Add zeros at the end

const moveZeros = (arr) => {

  let result = [];
  let zeroCount = 0;
  for(let num of arr){

    if(num === 0){
      zeroCount++;
    } else {
      result.push(num);
    }
  }

  for(let i = 0; i < zeroCount; i++){
    result.push(0);
  }
  return result;

}

const movedZeros = moveZeros([0, 1, 0, 3, 12]);

console.log(movedZeros);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 37. Find Longest String in an Array.

// Input: ["apple", "banana", "cherry", "date"]

// Output: "banana"

const longestString = (arr) => {

  let longest = "";

  for(let str of arr){
    if(str.length > longest.length){
      longest = str;
    }
  }

  return longest;
}

const longestStr = longestString(["apple", "banana", "cherry", "date"]);

console.log(longestStr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 38. Input: "aaabbcaa"

// Output: "a3b2c1a2"

const compressString = (str) => {

  let result = "";
  let count = 1;

  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

const compressed = compressString("aaabbcaa");

console.log(compressed);    

//////////////////////////////////////////////////////////////////////////////////////////////////////////////  

// 39. Write a function to find the longest word in a given string.

// Using Built-in Methods


const longestWord = (str) => {

  const words = str.split(" ");
  let longest = "";

  for(let word of words){
    if(word.length > longest.length){
      longest = word;
    }
  }

  return longest;
}

const longestW = longestWord("The quick brown fox jumps over the lazy dog");

console.log(longestW);

// Using Reduce Method

const longestWordReduce = (str) => {

  const words = str.split(" ");

  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

}

const longestWReduce = longestWordReduce("The quick brown fox jumps over the lazy dog");

console.log(longestWReduce);  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 40. Group Array Items by Property.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
//   { name: "Eve", age: 35 }
// ];

const grouped = users.reduce((acc, user) => {
  const key = user.age;

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(user);
  return acc;
}, {});

console.log(grouped);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 41. Remove all spaces from a given string.

// Input - " Hello World! This is a test. "

// Output - "HelloWorld!Thisisatest."

const removeSpaces = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }

  return result;
};

const noSpaces = removeSpaces(" Hello World! This is a test. ");

console.log(noSpaces);

// Using split() + join()

const removeSpacesSplit = (str) => {
  return str.split(" ").join("");
};

const noSpacesSplit = removeSpacesSplit(" Hello World! This is a test. ");

console.log(noSpacesSplit);

// Using Trim()

const removeSpacesTrim = (str) => {
  return str.trim();
};

const noSpacesTrim = removeSpacesTrim(" Hello World! This is a test. ");

console.log(noSpacesTrim);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 42. Check if any element in an array satisfies a given condition (greater than 100).
const hasElementGreaterThan100 = (arr) => {
  return arr.some((num) => num > 100);
};

const checkGreaterThan100 = hasElementGreaterThan100([10, 50, 150, 20]);

console.log(checkGreaterThan100);

// Using For Loop

const hasGreaterThan100 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      return true;
    }
  }
  return false;
};

const checkGreaterThan100Loop = hasGreaterThan100([10, 50, 150, 20]);

console.log(checkGreaterThan100Loop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 43. Find the average of an array of numbers.

const average = (arr) => {
  if (arr.length === 0) return 0;

  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
};

const avg = average([10, 20, 30, 40, 50]);

console.log(avg);

// Using For Loop

const averageLoop = (arr) => {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

const avgLoop = averageLoop([10, 20, 30, 40, 50]);

console.log(avgLoop);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 44. Find the median of an array of numbers.

const median = (arr) => {
  if (arr.length === 0) return 0;

  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
};

const med = median([10, 20, 30, 40, 50]);

console.log(med);

// Using For Loop

const medianLoop = (arr) => {
  if (arr.length === 0) return 0;

  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
};

const medLoop = medianLoop([10, 20, 30, 40, 50]);

console.log(medLoop); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 45. Find the mode of an array of numbers.

const mode = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let modes = [];

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;   
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
    }
  }   

  for (let num in frequency) {
    if (frequency[num] === maxFreq) {
      modes.push(Number(num));
    }
  }

  return modes;
};

const modeResult = mode([1, 2, 3, 2, 4, 1, 5]);

console.log(modeResult);  

// Using For Loop

const modeLoop = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let modes = [];

  for (let i = 0; i < arr.length; i++) {  
    let num = arr[i];
    frequency[num] = (frequency[num] || 0) + 1; 
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
    }
  }

  for (let num in frequency) {
    if (frequency[num] === maxFreq) {
      modes.push(Number(num));
    }
  }

  return modes;
};

const modeLoopResult = modeLoop([1, 2, 3, 2, 4, 1, 5]);

console.log(modeLoopResult);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 46. First Letter of String to Uppercase.

const capitalizeFirstLetter = (str) => {
  if (str.length === 0) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
};

const capitalized = capitalizeFirstLetter("hello world");

console.log(capitalized);

// Using For Loop

const capitalizeFirstLetterLoop = (str) => {
  if (str.length === 0) return str; 
  let result = str.charAt(0).toUpperCase();

  for (let i = 1; i < str.length; i++) {
    result += str.charAt(i);
  }

  return result;
};    

const capitalizedLoop = capitalizeFirstLetterLoop("hello world");

console.log(capitalizedLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 47. Convert String to Title Case.

const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const titleCased = titleCase("hello world from javascript");

console.log(titleCased);

// Using For Loop

const titleCaseLoop = (str) => {
  const words = str.toLowerCase().split(" ");
  let result = "";  
  for (let i = 0; i < words.length; i++) {  
    let word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1); 
    if (i < words.length - 1) {
      result += " ";
    }
  } 
  return result;
} 

const titleCasedLoop = titleCaseLoop("hello world from javascript");

console.log(titleCasedLoop);  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 48. Convert String to Camel Case.

const camelCase = (str) => {  
  return str
    .toLowerCase()
    .split(" ") 
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

const camelCased = camelCase("hello world from javascript");

console.log(camelCased);

// Using For Loop

const camelCaseLoop = (str) => {  
  const words = str.toLowerCase().split(" ");
  let result = "";  
  for (let i = 0; i < words.length; i++) {  
    let word = words[i];  
    if (i === 0) {
      result += word;
    } else {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
  } 
  return result;
}

const camelCasedLoop = camelCaseLoop("hello world from javascript");

console.log(camelCasedLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 49. Convert String to Character Array

// Using split()

const stringToCharArraySplit = (str) =>{
  const convertedStringSplit = str.split("");
  return convertedStringSplit;
}

const charArraySplit = stringToCharArraySplit("Hello World");

console.log(charArraySplit);

// Using Spread Operator

const stringToCharArraySpread = (str) => {
  const convertedStringSpread = [...str];
  return convertedStringSpread;
}

const charArraySpread = stringToCharArraySpread("Hello World");

console.log(charArraySpread);

// Using Array.from()

const stringToCharArrayFrom = (str) => {
  const convertedStringFrom = Array.from(str);
  return convertedStringFrom;
}

const charArrayFrom = stringToCharArrayFrom("Hello World");

console.log(charArrayFrom);

// Using For Loop

const stringToCharArrayLoop = (str) => {
  const convertedStringLoop = [];

  for(let i=0; i<str.length; i++){
    convertedStringLoop.push(str[i]);
  }
  return convertedStringLoop;
}

const charArrayLoop = stringToCharArrayLoop("Hello World");

console.log(charArrayLoop);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 50. Convert Character Array to String

// Using join()

const charArrayToStringJoin = (arr) => {
  const convertedCharArrayJoin = arr.join("");
  return convertedCharArrayJoin;
}

const stringFromCharArrayJoin = charArrayToStringJoin(['H', 'e', 'l', 'l', 'o']);

console.log(stringFromCharArrayJoin);

// Using For Loop

const charArrayToStringLoop = (arr) => {
  let convertedCharArrayLoop = "";

  for(let i=0; i<arr.length; i++){
    convertedCharArrayLoop += arr[i];
  }
  return convertedCharArrayLoop;
}

const stringFromCharArrayLoop = charArrayToStringLoop(['H', 'e', 'l', 'l', 'o']);

console.log(stringFromCharArrayLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 51. Move all Zeroes to the end of an Array

// Using Loop

const moveZeroes = (arr) => {
  let result = [];
  let zeroCount = 0;

  for(let num of arr){
    if(num === 0){
      zeroCount++;
    } else {
      result.push(num);
    }
  }

  for(let i=0; i<zeroCount; i++){
    result.push(0);
  }

  return result;
}

const movedZeroes = moveZeroes([0, 1, 0, 3, 12]);

console.log(movedZeroes);

// Using Filter + Concat

const moveZeroesFilter = (arr) => {
  const nonZeroes = arr.filter(num => num !== 0);
  const zeroes = arr.filter(num => num === 0);
  const result = nonZeroes.concat(zeroes);
  return result;
}

const movedZeroesFilter = moveZeroesFilter([0, 1, 0, 3, 12]);

console.log(movedZeroesFilter);

// Using Filter + Spread Operator

const moveZeroesSpread = (arr) => {
  const nonZeroes = arr.filter(num => num !== 0);
  const zeroes = arr.filter(num => num === 0);
  const result = [...nonZeroes, ...zeroes];
  return result;
}

const movedZeroesSpread = moveZeroesSpread([0, 1, 0, 3, 12]);

console.log(movedZeroesSpread);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 52. Check if Value is Array.

// Using Arrow Function (Best Way)

const isArray = (value) => {

  const result = Array.isArray(value);
  return result;
}

const arrayCheck = isArray([1, 2, 3]);

console.log(arrayCheck);

const notArrayCheck = isArray("Hello");

console.log(notArrayCheck);

// Alternative (Arrow + instanceof)

const isArrayInstanceof = (value) => {

  const result = value instanceof Array;
  return result;
}

const arrayCheckInstanceof = isArrayInstanceof([1, 2, 3]);  
console.log(arrayCheckInstanceof);

const notArrayCheckInstanceof = isArrayInstanceof("Hello");
console.log(notArrayCheckInstanceof);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 53. Flatten Nested Arrays.

// Using Recursion

const flattenArray = (arr) => {
  let result = [];

  for(let item of arr){
    if(Array.isArray(item)){
      result = result.concat(flattenArray(item));
    } 
    else {
      result.push(item);
    }
  }

  return result;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const flattened = flattenArray(nestedArray);

console.log(flattened);

// Using Built-in flat() method

const flattenArrayFlat = (arr) => {
  return arr.flat(Infinity);
}

const flattenedFlat = flattenArrayFlat(nestedArray);

console.log(flattenedFlat);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 54. Convert Number to Array of Digits.

// Using String Conversion

const numberToDigitsString = (num) => {
  const digits = num.toString().split("").map(Number);
  return digits;
}

const digitsFromNumberString = numberToDigitsString(12345);

console.log(digitsFromNumberString);

// Using Spread Operator

const numberToDigitsSpread = (num) => {
  const digits = [...num.toString()].map(Number);
  return digits;
}

const digitsFromNumberSpread = numberToDigitsSpread(12345);

console.log(digitsFromNumberSpread);

// Using For Loop 

const numberToDigitsLoop = (num) => {
  const digits = [];
  const numStr = num.toString();

  for(let i=0; i<numStr.length; i++){
    digits.push(Number(numStr[i]));
  }

  return digits;
}

const digitsFromNumberLoop = numberToDigitsLoop(12345);

console.log(digitsFromNumberLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 55. Sum of all elements in an Array.

// Using Reduce Method

const sumArrayReduce = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

const sumReduce = sumArrayReduce([1, 2, 3, 4, 5]);

console.log(sumReduce);

// Using For Loop

const sumArrayLoop = (arr) => {
  let sum = 0;

  for(let i=0; i<arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

const sumLoop = sumArrayLoop([1, 2, 3, 4, 5]);

console.log(sumLoop); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 56. Reverse an Array.

// Using Built-in reverse() method

const reverseArrayBuiltIn = (arr) => {
  const reversed = arr.slice().reverse();
  return reversed;
}

const reversedBuiltIn = reverseArrayBuiltIn([1, 2, 3, 4, 5]); 
console.log(reversedBuiltIn);

// Using For Loop

const reverseArrayLoop = (arr) => {
  const reversed = [];

  for(let i=arr.length - 1; i>=0; i--){
    reversed.push(arr[i]);
  }

  return reversed;
}

const reversedLoop = reverseArrayLoop([1, 2, 3, 4, 5]);
console.log(reversedLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 57. Count the frequency of each element in an Array.

// Using Reduce Method

const countFrequencyReduce = (arr) => {
  const frequency = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return frequency;
}

const frequencyReduce = countFrequencyReduce([1, 2, 3, 2, 4, 1, 5]);  
console.log(frequencyReduce);

// Using For Loop

const countFrequencyLoop = (arr) => {
  const frequency = {};

  for(let i=0; i<arr.length; i++){
    let num = arr[i];
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return frequency;
}

const frequencyLoop = countFrequencyLoop([1, 2, 3, 2, 4, 1, 5]);
console.log(frequencyLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 58. Convert an object into an array of key-value pairs.

// Using Object.entries()

const objectToKeyValuePairsEntries = (obj) => {
  const keyValuePairs = Object.entries(obj);
  return keyValuePairs;
}

const obj = { a: 1, b: 2, c: 3 };
const keyValuePairsEntries = objectToKeyValuePairsEntries(obj);

console.log(keyValuePairsEntries);

// Using For Loop

const objectToKeyValuePairsLoop = (obj) => {
  const keyValuePairs = [];

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      keyValuePairs.push([key, obj[key]]);
    } 
  }

  return keyValuePairs;
}

const keyValuePairsLoop = objectToKeyValuePairsLoop(obj);

console.log(keyValuePairsLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 59. Write a function to split (chunk) an array into smaller arrays of a given size.

// Using For Loop

const chunkArrayLoop = (arr, size) => {
  const chunks = [];

  for(let i=0; i<arr.length; i+=size){
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

const chunkedLoop = chunkArrayLoop([1, 2, 3, 4, 5, 6], 2);
console.log(chunkedLoop);

// Using While Loop

const chunkArrayWhile = (arr, size) => {
  const chunks = [];
  let i = 0;

  while(i < arr.length){
    chunks.push(arr.slice(i, i + size));
    i += size;
  }

  return chunks;
}

const chunkedWhile = chunkArrayWhile([1, 2, 3, 4, 5, 6], 2);
console.log(chunkedWhile);

// Using Reduce Method

const chunkArrayReduce = (arr, size) => {
  return arr.reduce((chunks, item, index) => {
    if(index % size === 0){
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
}

const chunkedReduce = chunkArrayReduce([1, 2, 3, 4, 5, 6], 2);
console.log(chunkedReduce);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 60. Write a function Sort an array in ascending order based on the frequency of elements.

const sortByFrequency = (arr) => {
  const freq = {};

  // Step 1: Count frequency
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  // Step 2: Get unique elements
  const unique = [...new Set(arr)];

  // Step 3: Sort by frequency
  unique.sort((a, b) => freq[a] - freq[b]);

  return unique;
};

const sortedByFrequency = sortByFrequency([1, 2, 3, 2, 4, 1, 5]);

console.log(sortedByFrequency); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 61. Write an arrow function that removes a given value from an array in-place (without creating a new array) and returns the updated array.

// Using For Loop

const removeValueInPlace = (arr, value) => {
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] === value){
      arr.splice(i, 1);
      i--; // Adjust index after removal
    }
  }

  return arr;
}

const updatedArray = removeValueInPlace([1, 2, 3, 2, 4, 1, 5], 2);
const sortedArray = updatedArray.sort((a, b) => a - b);

console.log(sortedArray);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 62. Write an arrow function that takes a string and capitalizes the first letter of each word, returning the updated string.

// Using Built-in Methods

const capitalizeWords = (str) => {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const capitalizedString = capitalizeWords("hello world from javascript");

console.log(capitalizedString);

// Using For Loop

const capitalizeWordsLoop = (str) => {
  const words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 0) {
      result.push(word[0].toUpperCase() + word.slice(1));
    }
  }

  return result.join(" ");
};

const capitalizedStringLoop = capitalizeWordsLoop("hello world from javascript");

console.log(capitalizedStringLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 63. Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

// Using match + Regex

const countVowelsShortcut = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

const vowelCount = countVowelsShortcut("Hello World");

console.log(vowelCount);

// Using For Loop

const countVowelsLoop = (str) => {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
      count++;
    } 
  }

  return count;
}

const vowelCountLoop = countVowelsLoop("Hello World");

console.log(vowelCountLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 64. Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

// Using Filter + Reduce

const sumEvenNumbersFilter = (arr) => {
  return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

const sumEvenFilter = sumEvenNumbersFilter([1, 2, 3, 4, 5, 6]);

console.log(sumEvenFilter);

// Using For Loop 

const sumEvenNumbersLoop = (arr) => {
  let sum = 0;

  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      sum += arr[i];
    }
  }

  return sum;
}

const sumEvenLoop = sumEvenNumbersLoop([1, 2, 3, 4, 5, 6]);

console.log(sumEvenLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 65. Write a function that finds the longest prefix (continuous repeating characters from the start of the string) using an arrow function.

// Using For Loop

const longestPrefix = (str) => {
  if (!str) return "";

  let prefix = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[0]) {
      prefix += str[i];
    } else {
      break;
    }
  }

  return prefix;
};

const longestPrefixResult = longestPrefix("aaaaabbcaa");

console.log(longestPrefixResult);

// Using Regex

const longestPrefixRegex = (str) => {
  const match = str.match(/^(\w)\1*/);
  return match ? match[0] : "";
};

const longestPrefixRegexResult = longestPrefixRegex("aaaaabbcaa");

console.log(longestPrefixRegexResult);  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 66. Write a function that counts the number of consecutive repeating characters from the beginning of a string using an arrow function.

// Using For Loop

const countPrefix = (str) => {
  if (!str) return 0;

  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[0]) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

const prefixCount = countPrefix("aaaaabbcaa");

console.log(prefixCount);

// Using Regex

const countPrefixRegex = (str) => {
  const match = str.match(/^(\w)\1*/);
  return match ? match[0].length : 0;
};

const prefixCountRegex = countPrefixRegex("aaaaabbcaa");

console.log(prefixCountRegex);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 67. Write a function to find the first peak element in an array. A peak element is one that is greater than its immediate neighbors.

// Using For Loop

const findPeakElement = (arr) => {
  for(let i=1; i<arr.length - 1; i++){
    if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
      return arr[i];
    }
  }

  return null; // No peak found
}

const peakElement = findPeakElement([1, 3, 2, 5, 4]);

console.log(peakElement);

// Using Built-in Methods

const findFirstPeakElementBuiltIn = (arr) =>
  arr.find((num, i) => 
    i > 0 && i < arr.length - 1 &&
    num > arr[i - 1] && num > arr[i + 1]
  ) ?? -1;

const peakElementBuiltIn = findFirstPeakElementBuiltIn([1, 3, 2, 5, 4]);

console.log(peakElementBuiltIn);  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 68. Write a function to find the first valley element in an array. A valley element is one that is less than its immediate neighbors.

// Using For Loop

const findValleyElement = (arr) => {
  for(let i=1; i<arr.length - 1; i++){
    if(arr[i] < arr[i - 1] && arr[i] < arr[i + 1]){
      return arr[i];
    }
  }

  return null; // No valley found
}

const valleyElement = findValleyElement([3, 1, 4, 2, 5]);

console.log(valleyElement);

// Using Built-in Methods 
const findFirstValleyElementBuiltIn = (arr) =>
  arr.find((num, i) => 
    i > 0 && i < arr.length - 1 &&
    num < arr[i - 1] && num < arr[i + 1]
  ) ?? -1;

const valleyElementBuiltIn = findFirstValleyElementBuiltIn([3, 1, 4, 2, 5]);

console.log(valleyElementBuiltIn);  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 69. Write a function to check whether two arrays have the same elements in the same order.

// Using For Loop

const arraysEqual = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;

  for(let i=0; i<arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }

  return true;
} 

const areArraysEqual = arraysEqual([1, 2, 3], [1, 2, 3]);

console.log(areArraysEqual);

const areArraysNotEqual = arraysEqual([1, 2, 3], [3, 2, 1]);

console.log(areArraysNotEqual);

// Using JSON.stringify()

const arraysEqualStringify = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const areArraysEqualStringify = arraysEqualStringify([1, 2, 3], [1, 2, 3]);

console.log(areArraysEqualStringify);

const areArraysNotEqualStringify = arraysEqualStringify([1, 2, 3], [3, 2, 1]);

console.log(areArraysNotEqualStringify);

// Using Built-in Methods

const arraysEqualBuiltIn = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

const areArraysEqualBuiltIn = arraysEqualBuiltIn([1, 2, 3], [1, 2, 3]);

console.log(areArraysEqualBuiltIn);

const areArraysNotEqualBuiltIn = arraysEqualBuiltIn([1, 2, 3], [3, 2, 1]);

console.log(areArraysNotEqualBuiltIn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 70. Write a function to remove all spaces from a string.

// Using Built-in Methods

const removeSpacesBuiltIn = (str) => {
  return str.split(" ").join("");
}

const noSpace = removeSpacesBuiltIn(" Hello World! This is a test. ");

console.log(noSpace);

// Using For Loop

const removeSpacesLoop = (str) => {
  let result = "";

  for(let i=0; i<str.length; i++){
    if(str[i] !== " "){
      result += str[i];
    }
  }

  return result;
}

const noSpaceLoop = removeSpacesLoop(" Hello World! This is a test. ");

console.log(noSpaceLoop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 71. Write a function to check if any element in an array is greater than 100.

// Using Built-in Methods

const hasGreaterThan100BuiltIn = (arr) => {
  return arr.some(num => num > 100);
}

const checkGreaterThan100BuiltIn = hasGreaterThan100BuiltIn([10, 50, 150, 20]);

console.log(checkGreaterThan100BuiltIn);

const checkNotGreaterThan100BuiltIn = hasGreaterThan100BuiltIn([10, 50, 20]);

console.log(checkNotGreaterThan100BuiltIn);

// Using For Loop

const hasGreaterThan100Loop = (arr) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i] > 100){
      return true;
    }
  }
  return false;
} 

const checkGreaterThan100Loop = hasGreaterThan100Loop([10, 50, 150, 20]);

console.log(checkGreaterThan100Loop);

const checkNotGreaterThan100Loop = hasGreaterThan100Loop([10, 50, 20]);

console.log(checkNotGreaterThan100Loop);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 72. Write a function to convert a Map into a plain JavaScript object.

// Using Object.fromEntries
const mapToObject = (map) => Object.fromEntries(map);

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

console.log(mapToObject(map)); // { a: 1, b: 2, c: 3 }

//Using for..of Loop

const mapToObjectLoop = (map) => {
  const obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
};

const mapLoop = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

console.log(mapToObjectLoop(mapLoop)); // { a: 1, b: 2, c: 3 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 73. Write a function to convert a Set into an array.

// Using Spread Operator

const setToArraySpread = (set) => {
  return [...set];
}

const mySet = new Set([1, 2, 3]);
console.log(setToArraySpread(mySet)); // [1, 2, 3]  

// Using Array.from()

const setToArrayFrom = (set) => {
  return Array.from(set);
} 
const mySetFrom = new Set([1, 2, 3]);
console.log(setToArrayFrom(mySetFrom)); // [1, 2, 3]

// Using For..of Loop

const setToArrayLoop = (set) => {
  const arr = [];
  for (const item of set) {
    arr.push(item);
  } 
  return arr;
}

const mySetLoop = new Set([1, 2, 3]);
console.log(setToArrayLoop(mySetLoop)); // [1, 2, 3]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 74. Write a function to filter out all falsy values (false, 0, "", null, undefined, NaN) from an array.

// Using Filter Method

const filterFalsy = (arr) => {
  return arr.filter(Boolean);
}

const filteredFalsy = filterFalsy([0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN]);

console.log(filteredFalsy); // [1, 2, 3, 4, 5]

// Using For Loop

const filterFalsyLoop = (arr) => {
  const result = [];

  for(let i=0; i<arr.length; i++){
    if(arr[i]){
      result.push(arr[i]);
    }
  }

  return result;
} 

const filteredFalsyLoop = filterFalsyLoop([0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN]);

console.log(filteredFalsyLoop); // [1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 75. Write a function to remove the first non-repeating element from an array.

// Using For Loop

const removeFirstNonRepeating = (arr) => {
  const frequency = {};

  // Count frequency
  for(let i=0; i<arr.length; i++){
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  } 
  // Find first non-repeating
  for(let i=0; i<arr.length; i++){
    if(frequency[arr[i]] === 1){
      arr.splice(i, 1);
      break;
    }   
  }

  return arr;
}

const updatedArrayNonRepeating = removeFirstNonRepeating([1, 2, 3, 2, 4, 1, 5]);

console.log(updatedArrayNonRepeating); // [2, 3, 2, 4, 1, 5]

// Using Built-in Methods

const removeFirstNonRepeatingBuiltIn = (arr) => {
  const frequency = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {}); 
  const firstNonRepeating = arr.find(num => frequency[num] === 1);  
  if (firstNonRepeating !== undefined) {
    arr.splice(arr.indexOf(firstNonRepeating), 1);
  }
  return arr;
};

const updatedArrayNonRepeatingBuiltIn = removeFirstNonRepeatingBuiltIn([1, 2, 3, 2, 4, 1, 5]);

console.log(updatedArrayNonRepeatingBuiltIn); // [2, 3, 2, 4, 1, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 76. Write a function to find most repeated element in an array.

// Using For Loop

const mostRepeatedElement = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let mostRepeated = null;

  for(let i=0; i<arr.length; i++){
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    if(frequency[arr[i]] > maxFreq){
      maxFreq = frequency[arr[i]];
      mostRepeated = arr[i];
    }
  }

  return mostRepeated;
} 

const mostRepeated = mostRepeatedElement([1, 2, 3, 2, 4, 1, 5]);

console.log(mostRepeated); // 1 or 2 (both appear twice)

// Using Built-in Methods

const mostRepeatedElementBuiltIn = (arr) => {
  const frequency = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
};

const mostRepeatedBuiltIn = mostRepeatedElementBuiltIn([1, 2, 3, 2, 4, 1, 5]);

console.log(mostRepeatedBuiltIn); // 1 or 2 (both appear twice)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 77. Write a function to find the least repeated element in an array.

// Using For Loop

const leastRepeatedElement = (arr) => {
  const frequency = {};
  let minFreq = Infinity;
  let leastRepeated = null;

  for(let i=0; i<arr.length; i++){
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  } 
  for(let key in frequency){
    if(frequency[key] < minFreq){
      minFreq = frequency[key];
      leastRepeated = key;
    }
  }

  return leastRepeated;
}

const leastRepeated = leastRepeatedElement([1, 2, 3, 2, 4, 1, 5]);

console.log(leastRepeated); // 3, 4, or 5 (each appears once)

// Using Built-in Methods

const leastRepeatedElementBuiltIn = (arr) => {
  const frequency = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {}); 
  return Object.keys(frequency).reduce((a, b) => frequency[a] < frequency[b] ? a : b);
}

const leastRepeatedBuiltIn = leastRepeatedElementBuiltIn([1, 2, 3, 2, 4, 1, 5]);

console.log(leastRepeatedBuiltIn); // 3, 4, or 5 (each appears once)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 78. Write a function to separate Even and Odd numbers in an array.

// Using For Loop
const separateEvenOdd = (arr) => {
  const even = [];
  const odd = [];
  
  for(let i=0; i<arr.length; i++){  
    if(arr[i] % 2 === 0){
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    } 
  }

  return { even, odd };
}

const separated = separateEvenOdd([1, 2, 3, 4, 5, 6]);

console.log(separated); // { even: [2, 4, 6], odd: [1, 3, 5] }

// Using Built-in Methods

const separateEvenOddBuiltIn = (arr) => {
  const even = arr.filter(num => num % 2 === 0);
  const odd = arr.filter(num => num % 2 !== 0);
  return { even, odd };
}

const separatedBuiltIn = separateEvenOddBuiltIn([1, 2, 3, 4, 5, 6]);

console.log(separatedBuiltIn); // { even: [2, 4, 6], odd: [1, 3, 5] }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 79. Write a function to check which of the two arrays is sorted in ascending order.

// Using For Loop

const isSortedAscending = (arr) => {
  for(let i=1; i<arr.length; i++){
    if(arr[i] < arr[i - 1]){
      return false;
    }
  }
  return true;
}

const checkSorted1 = isSortedAscending([1, 2, 3, 4, 5]);

console.log(checkSorted1); // true

const checkSorted2 = isSortedAscending([5, 4, 3, 2, 1]);

console.log(checkSorted2); // false

// Using Built-in Methods

const isSortedAscendingBuiltIn = (arr) => {
  return arr.every((num, i) => i === 0 || num >= arr[i - 1]);
}

const checkSortedBuiltIn1 = isSortedAscendingBuiltIn([1, 2, 3, 4, 5]);

console.log(checkSortedBuiltIn1); // true

const checkSortedBuiltIn2 = isSortedAscendingBuiltIn([5, 4, 3, 2, 1]);

console.log(checkSortedBuiltIn2); // false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 80. Write a function to rotate an array to the right by k positions.

// Using For Loop

const rotateRightLoop = (arr, k) => {
  const n = arr.length;
  k = k % n; // handle k > n

  for (let i = 0; i < k; i++) {
    const last = arr.pop(); // remove last element
    arr.unshift(last);      // add at the beginning
  }

  return arr;
};

const arr = [1, 2, 3, 4, 5];
console.log(rotateRightLoop(arr, 2)); // [4, 5, 1, 2, 3]

// Using Built-in Methods 

const rotateRightBuiltIn = (arr, k) => {
  const n = arr.length;
  k = k % n; // handle k > n
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

const arrBuiltIn = [1, 2, 3, 4, 5];
console.log(rotateRightBuiltIn(arrBuiltIn, 2)); // [4, 5, 1, 2, 3]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 81. Write a function to rotate an array to the left by k positions.

// Using For Loop

const rotateLeftLoop = (arr, k) => {
  const n = arr.length;
  k = k % n; // handle k > n

  for (let i = 0; i < k; i++) {
    const first = arr.shift(); // remove first element
    arr.push(first);          // add at the end
  }

  return arr;
};

const arrLeft = [1, 2, 3, 4, 5];
console.log(rotateLeftLoop(arrLeft, 2)); // [3, 4, 5, 1, 2]

// Using Built-in Methods

const rotateLeftBuiltIn = (arr, k) => {
  const n = arr.length;
  k = k % n;
  return arr.slice(k).concat(arr.slice(0, k));
}

const arrLeftBuiltIn = [1, 2, 3, 4, 5];
console.log(rotateLeftBuiltIn(arrLeftBuiltIn, 2)); // [3, 4, 5, 1, 2]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 82. Write a function to find the union of two arrays (all unique elements from both arrays.

// Using Set

const unionArraysSet = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
} 

const unionSet = unionArraysSet([1, 2, 3], [3, 4, 5]);

console.log(unionSet); // [1, 2, 3, 4, 5]

// Using For Loop

const unionLoop = (arr1, arr2) => {
  const result = [...arr1]; // start with all elements of arr1

  for (let i = 0; i < arr2.length; i++) {
    if (!result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

console.log(unionLoop(arr1, arr2)); // [1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 83. Write a function to find the intersection of two arrays (only the common elements between both arrays).

// Using Set

const intersectionArraysSet = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter(num => set2.has(num));
}

const intersectionSet = intersectionArraysSet([1, 2, 3], [3, 4, 5]);  
console.log(intersectionSet); // [3]

// Using For Loop

const intersectionLoop = (arr1, arr2) => {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    } 
  }

  return result;
};

const arr1Loop = [1, 2, 3];
const arr2Loop = [3, 4, 5];

console.log(intersectionLoop(arr1Loop, arr2Loop)); // [3]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 84. Write a function to find the difference between two arrays (elements that are in the first array but not in the second).

// Using Set

const differenceArraysSet = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter(num => !set2.has(num));
}

const differenceSet = differenceArraysSet([1, 2, 3], [3, 4, 5]);  
console.log(differenceSet); // [1, 2]

// Using For Loop

const differenceLoop = (arr1, arr2) => {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  } 
  return result;
} 

const arrDiff1Loop = [1, 2, 3];
const arrDiff2Loop = [3, 4, 5];

console.log(differenceLoop(arrDiff1Loop, arrDiff2Loop)); // [1, 2]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 85. Write a function to reverse the words in a string.

// Using Built-in Methods

const reverseWordsBuiltIn = (str) => {
  return str.split(" ").reverse().join(" ");
} 
const reversedWordsBuiltIn = reverseWordsBuiltIn("Hello World from JavaScript");

console.log(reversedWordsBuiltIn); // "JavaScript from World Hello"

// Using For Loop

const reverseWordsLoop = (str) => {
  const words = str.split(" "); // split string into words
  const reversed = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  return reversed.join(" "); // join back into string
};

const reversedWordsLoop = reverseWordsLoop("Hello World from JavaScript");

console.log(reversedWordsLoop); // "JavaScript from World Hello"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 86. Write a function to check if a string is a palindrome without using the reverse() method.

// Using For Loop

const isPalindromeLoop = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindromeLoop("racecar")); // true
console.log(isPalindromeLoop("hello"));   // false

// Using Built-in Methods

const isPalindromeBuiltIn = (str) => {
  const len = str.length;
  return str.split("").every((char, i) => char === str[len - 1 - i]);
};

console.log(isPalindromeBuiltIn("racecar")); // true
console.log(isPalindromeBuiltIn("hello"));   // false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 87. Write a function to convert an array of objects into an object, using each object's id as the key.

// Using For Loop

const arrayToObjectLoop = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].id] = arr[i];
  }
  return obj;
};

const arrLoop = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const objectFromArrayLoop = arrayToObjectLoop(arrLoop);

console.log(objectFromArrayLoop); // { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }

// Using Built-in Methods

const arrayToObjectBuiltIn = (arr) => {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

const objectFromArrayBuiltIn = arrayToObjectBuiltIn(arr);

console.log(objectFromArrayBuiltIn); // { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 88. Write a function to check if a string is a valid email address using regular expressions.

// Using Regex

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email"));    // false
console.log(isValidEmail("test@.com"));       // false
console.log(isValidEmail("test@com"));       // false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 89. Write a function to check if a string is a valid URL using regular expressions.

// Using Regex

const isValidURL = (url) => {
  const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
  return regex.test(url);
}

console.log(isValidURL("http://example.com")); // true
console.log(isValidURL("https://www.example.com/path")); // true
console.log(isValidURL("invalid-url")); // false
console.log(isValidURL("http:/example.com")); // false  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 90. Write a function to check if all elements in an array have the same type.

// Using For Loop

const allSameTypeLoop = (arr) => {
  if (arr.length === 0) return true; // empty array case
  const type = typeof arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== type) {
      return false;
    }
  }

  return true;
}

const checkSameTypeLoop1 = allSameTypeLoop([1, 2, 3]);
console.log(checkSameTypeLoop1); // true

const checkSameTypeLoop2 = allSameTypeLoop([1, "2", 3]);
console.log(checkSameTypeLoop2); // false

// Using Built-in Methods

const allSameTypeBuiltIn = (arr) => {
  if (arr.length === 0) return true;
  const type = typeof arr[0];
  return arr.every(item => typeof item === type);
}

const checkSameTypeBuiltIn1 = allSameTypeBuiltIn([1, 2, 3]);
console.log(checkSameTypeBuiltIn1); // true

const checkSameTypeBuiltIn2 = allSameTypeBuiltIn([1, "2", 3]);
console.log(checkSameTypeBuiltIn2); // false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 91. Write a function to clone an array so that the new array does not reference the original array.

// Using Spread Operator

const cloneArraySpread = (arr) => {
  const cloned = [...arr];
  return cloned;
}

const originalArray = [1, 2, 3];
const clonedArraySpread = cloneArraySpread(originalArray);  
console.log(clonedArraySpread); // [1, 2, 3]
console.log(clonedArraySpread === originalArray); // false

// Using Array.from()

const cloneArrayFrom = (arr) => {
  const cloned = Array.from(arr);
  return cloned;
}

const clonedArrayFrom = cloneArrayFrom(originalArray);  
console.log(clonedArrayFrom); // [1, 2, 3]
console.log(clonedArrayFrom === originalArray); // false  

// Using For Loop

const cloneArrayLoop = (arr) => {
  const cloned = [];
  for (let i = 0; i < arr.length; i++) {
    cloned.push(arr[i]);
  }
  return cloned;
}

const clonedArrayLoop = cloneArrayLoop(originalArray);  
console.log(clonedArrayLoop); // [1, 2, 3]
console.log(clonedArrayLoop === originalArray); // false  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 92. Write functions to convert an object into an array of key-value pairs and convert an array of key-value pairs back into an object.

// Object to Array of Key-Value Pairs

const objectToKeyValuePairs = (obj) => {
  return Object.entries(obj);
}

const myObject = { a: 1, b: 2, c: 3 };
const keyValuePairs = objectToKeyValuePairs(myObject);
console.log(keyValuePairs); // [['a', 1], ['b', 2], ['c', 3]]

// Array of Key-Value Pairs to Object

const keyValuePairsToObject = (arr) => {
  return Object.fromEntries(arr);
}

const arrayKeyValuePairs = [['a', 1], ['b', 2], ['c', 3]];
const objectFromKeyValuePairs = keyValuePairsToObject(arrayKeyValuePairs);
console.log(objectFromKeyValuePairs); // { a: 1, b: 2, c: 3 }

// Using For Loop

// Object to array
const objectToEntriesLoop = (obj) => {
  const result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
};

// Array to object
const entriesToObjectLoop = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i];
    obj[key] = value;
  }
  return obj;
};

const keyValuePairsLoop = objectToEntriesLoop(myObject);
console.log(keyValuePairsLoop); // [['a', 1], ['b', 2], ['c', 3]]

const objectFromKeyValuePairsLoop = entriesToObjectLoop(keyValuePairsLoop);
console.log(objectFromKeyValuePairsLoop); // { a: 1, b: 2, c: 3 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 93. Write a function to convert a string into an array of its characters.

// Using Built-in Methods

const stringToArrayBuiltIn = (str) => {
  return str.split("");
}

const charArrayBuiltIn = stringToArrayBuiltIn("Hello");
console.log(charArrayBuiltIn); // ['H', 'e', 'l', 'l', 'o']

// Using For Loop

const stringToArrayLoop = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}

const charArrayLoop = stringToArrayLoop("Hello");
console.log(charArrayLoop); // ['H', 'e', 'l', 'l', 'o']  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 94. Write a function to create an immutable object in JavaScript using Object.freeze().

const createImmutableObject = (obj) => {
  const immutableObj = Object.freeze({ ...obj });
  return immutableObj;
} 
const myImmutableObject = createImmutableObject({ name: "Alice", age: 30 });

console.log(myImmutableObject); // { name: 'Alice', age: 30 }

// Attempting to modify the object will not work
myImmutableObject.name = "Bob";
console.log(myImmutableObject); // { name: 'Alice', age: 30 } 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 95. Convert an array of objects into a single object.

// Using For Loop

const arrayToSingleObjectLoop = (arr) => {
  const obj = {};   

  for (let i = 0; i < arr.length; i++) {
    const key = Object.keys(arr[i])[0];
    obj[key] = arr[i][key];
  } 
  return obj;
};

const arrayOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }];
const singleObjectLoop = arrayToSingleObjectLoop(arrayOfObjects);
console.log(singleObjectLoop); // { a: 1, b: 2, c: 3 }

// Using Built-in Methods

const arrayToSingleObjectBuiltIn = (arr) => {
  return arr.reduce((obj, item) => {
    const key = Object.keys(item)[0];
    obj[key] = item[key];
    return obj;
  }, {});
}

const singleObjectBuiltIn = arrayToSingleObjectBuiltIn(arrayOfObjects);
console.log(singleObjectBuiltIn); // { a: 1, b: 2, c: 3 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 96. Write a function to merge two objects into a single object. If both objects have the same key, the second object’s value overwrites the first.

// Using For Loop

const mergeObjectsLoop = (obj1, obj2) => {
  const merged = {};
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) merged[key] = obj1[key];
  }
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) merged[key] = obj2[key];
  }
  return merged;
};

const mergeObjects = mergeObjectsLoop({ a: 1, b: 2 }, { b: 3, c: 4 })

console.log(mergeObjects);
// { a:1, b:3, c:4 }

// Using Built-in Method (Object.assign).

const mergeObjectsBuiltIn = (obj1, obj2) => Object.assign({}, obj1, obj2);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergeObjectsBuilt = mergeObjectsBuiltIn(obj1, obj2);
console.log(mergeObjectsBuilt); // { a:1, b:3, c:4 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 97. Write a function to copy an object so that the new object does not reference the original.

// Shallow Copy

const shallowCopy = (obj) => ({ ...obj });
// or using Object.assign
const shallowCopyAssign = (obj) => Object.assign({}, obj);

const original = { name: "Hussnain", age: 24, address: { city: "Lahore" } };
const copy = shallowCopy(original);

copy.name = "Ali";          // ✅ original not affected
copy.address.city = "Karachi"; // ❌ affects original because nested object is referenced

console.log(original);
// { name: "Hussnain", age: 24, address: { city: "Karachi" } }

//Deep Copy

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

const originalDeep = { name: "Hussnain", age: 24, address: { city: "Lahore" } };
const copyDeep = deepCopy(originalDeep);

copyDeep.address.city = "Karachi"; // ✅ does NOT affect original

console.log(originalDeep);
// { name: "Hussnain", age: 24, address: { city: "Lahore" } }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 98. Use object destructuring in JavaScript and provide default values if a property does not exist.

//Basic Object Destructuring with Default

const getUserInfo = (user) => {
  const { name, age, city = "Unknown" } = user;
  return `Name: ${name}, Age: ${age}, City: ${city}`;
};

const user = { name: "Hussnain", age: 24 };

console.log(getUserInfo(user));
// Output: "Name: Hussnain, Age: 24, City: Unknown"

//Nested Object Destructuring with Default

const user = {
  name: "Hussnain",
  age: 24,
  address: { city: "Lahore" }
};

const {
  name,
  age,
  address: { city, zip = 12345 } = {}  // default for nested
} = user;

console.log(name, age, city, zip);
// Output: "Hussnain 24 Lahore 12345"

//Function Parameter Destructuring with Defaults

const printUser = ({ name, age, city = "Unknown" }) => {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
};

printUser({ name: "Hussnain", age: 24 });
// Output: "Name: Hussnain, Age: 24, City: Unknown"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 99. Write a function to check if Array contains a specific value.

// Using Built-in Method

const containsValueBuiltIn = (arr, value) => {
  return arr.includes(value);
}

const checkContainsBuiltIn = containsValueBuiltIn([1, 2, 3, 4, 5], 3);

console.log(checkContainsBuiltIn); // true

const checkNotContainsBuiltIn = containsValueBuiltIn([1, 2, 3, 4, 5], 6);

console.log(checkNotContainsBuiltIn); // false

// Using For Loop

const containsValueLoop = (arr, value) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i] === value){
      return true;
    }
  }
  return false;
}

const checkContainsLoop = containsValueLoop([1, 2, 3, 4, 5], 3);

console.log(checkContainsLoop); // true

const checkNotContainsLoop = containsValueLoop([1, 2, 3, 4, 5], 6);

console.log(checkNotContainsLoop); // false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 100. write a function to calculate sum of all digits of a number.

// Using For Loop

const sumOfDigitsLoop = (num) => {
  let sum = 0;
  const numStr = Math.abs(num).toString(); // handle negative numbers

  for(let i=0; i<numStr.length; i++){
    sum += parseInt(numStr[i]);
  }

  return sum;
}

const sumDigitsLoop = sumOfDigitsLoop(1234);

console.log(sumDigitsLoop); // 10

const sumDigitsNegativeLoop = sumOfDigitsLoop(-567);

console.log(sumDigitsNegativeLoop); // 18

// Using Built-in Methods

const sumOfDigitsBuiltIn = (num) => {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
}

const sumDigitsBuiltIn = sumOfDigitsBuiltIn(1234);

console.log(sumDigitsBuiltIn); // 10

const sumDigitsNegativeBuiltIn = sumOfDigitsBuiltIn(-567);

console.log(sumDigitsNegativeBuiltIn); // 18 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 101. Write a function to find the largest element in nested Arrays.

// Using For Loop

const largestInNestedArraysLoop = (arr) => {
  let largest = -Infinity;

  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      const nestedLargest = largestInNestedArraysLoop(arr[i]);
      if(nestedLargest > largest){
        largest = nestedLargest;
      }
    } else if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const largestInNestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(largestInNestedArraysLoop(largestInNestedArray)); // 7




/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OUTPUT BASED QUESTIONS

myFunc();

var myFunc = () => {
  console.log("One");
};

myFunc();

function myFunc ()  {
  console.log("Two");
}

myFunc();

// OUTPUT

Two
One
One

// Explanation

// 🧠 Step-by-Step Explanation
// 🔹 1. Hoisting Phase

// During hoisting:

// 👉 Function declaration is fully hoisted:
// function myFunc () {
//   console.log("Two");
// }
// 👉 var is hoisted but initialized as undefined:
// var myFunc; // undefined

// ⚠️ But important rule:

// 👉 Function declaration takes priority over var

// So after hoisting, internally it becomes:

// var myFunc = function () {
//   console.log("Two");
// };
// 🔹 2. Execution Phase
// ▶️ First Call
// myFunc();

// 👉 Calls the function declaration
// ✅ Output:

// Two
// ▶️ Then this runs:
// var myFunc = () => {
//   console.log("One");
// };

// 👉 Now myFunc is reassigned to arrow function

// ▶️ Second Call
// myFunc();

// 👉 Calls new function
// ✅ Output:

// One
// ▶️ Function Declaration (already hoisted, ignored now)
// function myFunc () {
//   console.log("Two");
// }

// 👉 No effect now (already overridden)

// ▶️ Third Call
// myFunc();

// 👉 Still arrow function
// ✅ Output:

// One