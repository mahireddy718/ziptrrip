//Approach 1: Using built-in methods
function reverseStringBuiltin(str) {
  return str.split("").reverse().join("");
}
 
//Approach 2: Using a loop
function reverseStringLoop(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
 
//Approach 3: Using recursion
function reverseStringRecursive(str) {
  if (str.length <= 1) return str;
  return reverseStringRecursive(str.slice(1)) + str[0];
}