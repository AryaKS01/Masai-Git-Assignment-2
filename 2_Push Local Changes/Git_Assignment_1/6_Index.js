// Function to find even and odd numbers in an array
function checkOddEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is an Even number.");
    } else {
        console.log(num + " is an Odd number.");
    }
}

let number = 15
checkOddEven(number);

// Function to print a simple pattern
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '* ';
        }
        console.log(str);
    }
}
printPattern(5);

