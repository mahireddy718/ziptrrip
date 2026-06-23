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


//Method 2: Using Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];

console.log(removeDuplicates(numbers));

//Method 3: Using filter and indexOf
function removeDuplicates(arr) {
    return arr.filter(function(value, index) {
        return arr.indexOf(value) === index;
    });
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
console.log(removeDuplicates(numbers));


//Method 4: Using reduce
function removeDuplicates(arr) {
    return arr.reduce(function(result, value) {
        if (!result.includes(value)) {
            result.push(value);
        }
        return result;
    }, []);
}
let numbers = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
console.log(removeDuplicates(numbers));
