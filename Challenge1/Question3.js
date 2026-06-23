//Method 1: Using for loop and includes method
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
console.log(removeDuplicates(numbers));

//In this approach, I created an empty array called unique. I traversed the original array using a for loop. Before adding a number, I checked whether it was already present using includes(). If it was not present, I added it to the new array. This method is simple and preserves the original order.
//T.c-> O(n^2) because includes() has a time complexity of O(n) and we are using it inside a loop, and S.c-> O(n) for the new array created to store unique values.



//Method 2: Using Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];

console.log(removeDuplicates(numbers));

//In this approach, I used a Set. A Set is a built-in JavaScript object that stores unique values. By converting the array into a Set, all duplicates are automatically removed. Then, I used the spread operator to convert the Set back into an array.
//T.c-> O(n) and S.c-> O(n) for the new array created to store unique values.


//Method 3: Using filter and indexOf
function removeDuplicates(arr) {
    return arr.filter(function (value, index) {
        return arr.indexOf(value) === index;
    });
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
console.log(removeDuplicates(numbers));

//In this approach, I used the filter method. The filter method creates a new array with all elements that pass the test implemented by the provided function. The test checks if the index of the current value is equal to its first occurrence in the array. If it is, it means the value is unique and should be included in the new array.
//T.c-> O(n^2) because indexOf() has a time complexity of O(n) and we are using it inside filter, and S.c-> O(n) for the new array created to store unique values.


//Method 4: Using reduce
function removeDuplicates(arr) {
    return arr.reduce(function (result, value) {
        if (!result.includes(value)) {
            result.push(value);
        }
        return result;
    }, []);
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
console.log(removeDuplicates(numbers));

//In this approach, I used the reduce method. The reduce method executes a reducer function on each element of the array, resulting in a single output value. I initialized the result as an empty array. For each value, I checked if it was already present in the result array using includes(). If it was not present, I added it to the result array.
//T.c-> O(n^2) because includes() has a time complexity of O(n) and we are using it inside reduce, and S.c-> O(n) for the new array created to store unique values.


//Using sorting and a loop

function removeDuplicates(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i - 1]) {
            result.push(sorted[i]);
        }
    }
    return result;
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
console.log(removeDuplicates(numbers));