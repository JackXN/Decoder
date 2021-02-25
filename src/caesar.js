// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    normalAlphabet = normalAlphabet.split('');

  function caesar(input, shift, encode = true) {
    let result = "";
    try {
      if (shift === 0 || shift > 25 || shift < -25 || !shift) {
        throw false
      } else {
           input.toLowerCase().split('').forEach((char) => {
              if (!normalAlphabet.includes(char)) {
                  result += char;
              } else {
                let matchingLetter;
                let encodedIndex;
                let encodedLetter;
                
                  matchingLetter = normalAlphabet.find((letter) => letter === char)
                    if (encode) {
                    encodedIndex = (normalAlphabet.indexOf(matchingLetter) + shift) % 26; 
                    } 
                    if (!encode) {
                        encodedIndex = (normalAlphabet.indexOf(matchingLetter) - shift) % 26;
                    }
                    if (encodedIndex < 0) {
                      encodedIndex += 26;
                    }
                    encodedLetter = normalAlphabet[encodedIndex];
                    result += encodedLetter
                  } 
              })
            return result;
          }
      } catch (error) {
      return error;
      }
    }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;