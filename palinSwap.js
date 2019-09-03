/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */

 //arcecar
function palindromeSwapper(str) {
  
  if (isPalindrome(str)){
    return true;
  }

  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    newStr=""
    for (var j = 0; j < str.length; j++) {

      debugger
      if (i === j) {
        if(str[j+1]!=undefined){
          newStr += str[j+1];
        }
        newStr += str[j];
        j++ 
      } 
      else {
        newStr += str[j];
      }
      
    }
    
    if (isPalindrome(newStr)){
      return true;
    } else{
      return false
    }
  }
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join("") === str){
    return true;
  } else if (str.split('').reverse().join("") !== str){
    return false;
  }
  
}



console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
