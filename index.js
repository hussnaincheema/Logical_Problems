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