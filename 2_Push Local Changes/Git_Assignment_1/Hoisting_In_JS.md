
# Hoisting in JavaScript

**Hoisting** is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that a variable or function can be used before it has been declared.

## How Hoisting Works

JavaScript only hoists declarations, not initializations. This is important because the declaration is made at the top of the scope, but the assignment stays where it is in the code.

### Variable Hoisting

When using `var`, the variable declaration is hoisted to the top, but the value assignment is not.

```javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

In the example above, the declaration `var x;` is hoisted to the top of the scope, but the assignment `x = 5;` happens where it appears in the code.

However, if you try the same with `let` or `const`, it will result in a `ReferenceError` because `let` and `const` are not initialized until their definition is encountered in the code.

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

### Function Hoisting

Function declarations are fully hoisted, meaning you can invoke the function before its declaration.

```javascript
greet(); // Output: Hello!
function greet() {
  console.log("Hello!");
}
```

In this case, the entire function `greet()` is hoisted to the top, allowing it to be called before its declaration.

However, **function expressions** are not hoisted in the same way. If a function is assigned to a variable, the behavior is similar to variable hoisting.

```javascript
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};
```

Here, the declaration `var sayHi;` is hoisted, but the assignment `sayHi = function () { ... }` is not. Therefore, calling `sayHi()` before the assignment results in an error.

## Key Takeaways

1. **Function Declarations** are hoisted with their body.
2. **Variable Declarations** are hoisted, but assignments are not.
3. **let** and **const** declarations are hoisted, but they remain in a "temporal dead zone" until the line of code where they are defined.
4. **Function Expressions** behave like variables and are only hoisted by their declaration, not their assignment.
