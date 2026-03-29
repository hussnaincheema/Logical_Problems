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

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. How to Count Number of Sentences in a String?

const countSentences = (str) => {
  let sentences = str.split(/[.!?]+/);
  return sentences.filter((sentence) => sentence.trim().length > 0).length;
};

const sentenceCount = countSentences("Hello World! How are you? I am fine.");

console.log(sentenceCount);

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

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17. Check if a String is Anagram.

const areAnagrams = (str1, str2) => {
  const cleanString = (str) =>
    str.replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").sort().join("");

  return cleanString(str1) === cleanString(str2);
};

const anagramCheck = areAnagrams("listen", "silent");

console.log(anagramCheck);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18. Check if a String is a Substring of Another String.

const isSubstring = (str1, str2) => {
  return str2.includes(str1);
};

const substringCheck = isSubstring("world", "Hello World!");

console.log(substringCheck);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 19. Check if a String is a Rotation of Another String.

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
  let totalSum = (n * (n + 1)) / 2;
  let arraySum = arr.reduce((sum, num) => sum + num, 0);

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

// 57. Count the frequesncy of each element in an Array.

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

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