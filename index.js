// 1. How to Count Number of Alphabets in a String?
const countAlphabets = (str) => {
      let count =0;

      for(let i=0; i<str.length; i++){
            if((str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') || (str.charAt(i) >= 'a' && str.charAt(i) <='z') ){
                  count++;
            }
      }
      return count;
}

const alphabets = countAlphabets("Hello World! 123");

console.log(alphabets);


//////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. How to Count Numbers of Vowels in a String?

const countVowels = (str) => {
      let count = 0;
      let vowels = 'aeiouAEIOU';

      for(let i=0; i<str.length; i++){
            if(vowels.includes(str[i])){
                  count++;
            }
      }
      return count;
}

const vowels= countVowels("Hello World! 123");

console.log(vowels);

//////////////////////////////////////////////////////////////////////////////////////////////////////      

// 3. How to Count Number of Words in a String?

const countWords = (str) => {
      let words = str.trim().split(/\s+/);
      return words.length;
}

const wordCount = countWords("Hello World! 123");

console.log(wordCount);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. How to Count Number of Sentences in a String?

const countSentences = (str) => {
      let sentences = str.split(/[.!?]+/);
      return sentences.filter(sentence => sentence.trim().length > 0).length;
}

const sentenceCount = countSentences("Hello World! How are you? I am fine.");

console.log(sentenceCount);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. How to Remove Duplicate Elements from JavaScript Array?

const removeDuplicates = (arr) => {
      let uniqueArray = [];

      for(let i=0; i<arr.length; i++){
            if(!uniqueArray.includes(arr[i])){
                  uniqueArray.push(arr[i]);
            }
      }
      return uniqueArray;
}

const unique= removeDuplicates([1, 2, 3, 2, 4, 1, 5]);

console.log(unique);

//////////////////////////////////////////////////////////////////////////////////////////////////////

