//Approach 1: Using built-in methods
function reverseStringBuiltin(str) {
    return str.split("").reverse().join("");
}
//In this approach, I used JavaScript built-in methods. First, split("") converts the string into an array of characters. Then reverse() reverses the array, and join("") combines the characters back into a string. This is the shortest and easiest approach.
//T.c-> O(n) and S.c-> O(n)


//Approach 2: Using a loop
function reverseStringLoop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
//In this approach, I used a for loop. The loop starts from the last character and moves towards the first character. Each character is added to a new string variable called result.
//T.c-> O(n) and S.c-> O(n)


//Approach 3: Using recursion
function reverseStringRecursive(str) {
    if (str.length <= 1) return str;
    return reverseStringRecursive(str.slice(1)) + str[0];
}

//In this approach, I used recursion. The function keeps calling itself by removing the first character until only one character is left. While returning, the characters are added in reverse order.
//T.c-> O(n) and S.c-> O(n) due to the call stack

//Approach 4 : Using two pointers
function reverseStringTwoPointers(str) {

    let characters = str.split("");
    let left = 0;
    let right = characters.length - 1;
    while (left < right) {
        let temp = characters[left];
        characters[left] = characters[right];
        characters[right] = temp;
        left++;
        right--;
    }
    return characters.join("");
}
console.log(reverseStringTwoPointers("Bhaskara"));

//In this approach, I used two pointers. One pointer starts from the beginning of the string and the other from the end. The characters at these pointers are swapped until they meet in the middle.
//T.c-> O(n) and S.c-> O(n) because of the array created by split method