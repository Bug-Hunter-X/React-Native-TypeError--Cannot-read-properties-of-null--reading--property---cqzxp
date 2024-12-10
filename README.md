# React Native TypeError: Cannot read properties of null (reading 'property')

This repository demonstrates a common error in React Native applications: `TypeError: Cannot read properties of null (reading 'property')`. This error typically arises when attempting to access a property of an object that is currently null or undefined.

The `bug.js` file showcases the problematic code, while `bugSolution.js` offers a solution to effectively handle this issue and prevent the error.

## Solution

The primary solution is to perform null checks before accessing object properties, ensuring that the object exists before attempting to read its properties.  The example below demonstrates effective use of optional chaining and nullish coalescing.