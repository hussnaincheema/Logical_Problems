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
