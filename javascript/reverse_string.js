function reverseString(str) {
  // type your code here
  newStr = ''
  for(let i= str.length-1; i>-1; --i){
    newStr+=str[i]
  }
  return newStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'hello'");
  console.log("=>", reverseString("hello"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
