// Given that you are using JavaScript. Write a function that takes n as input. And prints the following pattern.
//Method 1: Using nested loops
function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j;
    }
    console.log(row);
  }
}
pattern(5);



//Method 2: Using Array and join method
// Print pattern using an array
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let numbers = [];
        for (let j = i; j >= 1; j--) {
            numbers.push(j);
        }
        console.log(numbers.join(""));
    }
}

printPattern(5);