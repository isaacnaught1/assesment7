let array = [28, 43, -12, 30, 4, 0, 12]

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)

//Time complexity: O(n^2)
//Space complexity: O(1)


function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
    }

    console.log(hasUniqueChars('monday'))


//Time complexity:O(n)
//Space complexity: O(1)

const isPangram = (string) => 
new Set(string.toLowerCase().match(/[a-z]/g)).size === 26

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))
console.log(isPangram("The Quick Brown Fox Jumps over the lazy dog"))


//Time complexity:O(1)
//Space complexity:O(1)


function longestString(...strs) {
    return strs.sort(function(a, b) {return b.length - a.length})[0]
  }
  
  console.log(longestString('boop', 'blooms', 'hello'))


//Time complexity:O(1)
//Space complexity:O(1)