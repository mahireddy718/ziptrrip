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
//In this approach, I used two for loops. The outer loop prints each row, and the inner loop prints numbers in reverse order. A variable called row is used to build the pattern before printing it.
//T.c-> O(n^2) because of the nested loops, and S.c-> O(1) as we are not using any extra space except for the row variable.


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

//In this approach, I used an array to store the numbers in each row and then used the join method to convert the array into a string before printing it. The outer loop iterates through each row, and the inner loop fills the array with numbers in reverse order.
//T.c-> O(n^2) because of the nested loops, and S.c-> O(n) as we are using an array to store the numbers in each row.