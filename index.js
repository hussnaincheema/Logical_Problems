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

      for(let i=1; i<=n; i++){
            result = result *i;
      }

      return result;
}

const fact = factorial(5);

console.log(fact);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. How to Reverse a String

const reversedString = (str) =>{
      let reverse = '';

      for(let i=str.length - 1; i>=0; i--){
            reverse = reverse + str[i];
      }

      return reverse;
}

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
}

const reversedNum = reverseNumber(12345);

console.log(reversedNum);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 10. How to Sort an Array

const sortArray = (arr) => {

      let sortedArray = arr.sort((a,b) => a-b);

      return sortedArray;
}

const sorted = sortArray([5, 2, 9, 1, 5, 6]);

console.log(sorted);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 11. How to Swap two numbers without using third

const swapNumbers = (a, b) => {
      [a, b] = [b, a];

      return [a, b];
}

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
        } 
        else if (num > secondLargest && num !== largest) {
            thirdLargest = secondLargest;
            secondLargest = num;
        } 
        else if (num > thirdLargest && num !== secondLargest) {
            thirdLargest = num;
        }
    }

    return [secondLargest, thirdLargest];
}

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
        } 
        else if (num < secondSmallest && num !== smallest) {
            thirdSmallest = secondSmallest;
            secondSmallest = num;
        } 
        else if (num < thirdSmallest && num !== secondSmallest) {
            thirdSmallest = num;
        }
    }

    return [secondSmallest, thirdSmallest];
}

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
}

const primeCheck = isPrime(7);

console.log(primeCheck);

///////////////////////////////////////////////////////////////////////////////////////////////////////