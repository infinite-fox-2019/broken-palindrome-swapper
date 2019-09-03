/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  if (isPalindrome(str)) return true;
  let newStr = '';
  for (var i = 0; i < str.length - 1; i++) {
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j+1];
        newStr += str[j];
        j = j + 1;
      } else {
        newStr += str[j];
      }
    }
    if (isPalindrome(newStr)) return true;
    newStr = '';
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE

//Test case tambahan
console.log(palindromeSwapper('kasurinirusak')); // TRUE
console.log(palindromeSwapper('kasuirnirusak')); // TRUE
console.log(palindromeSwapper('kanurisirusak')); // FALSE
console.log(palindromeSwapper('wwe')); // TRUE
console.log(palindromeSwapper('maanm')); // TRUE
console.log(palindromeSwapper('m')); // TRUE
console.log(palindromeSwapper('')); // TRUE