To avoid this error, always check if the object exists before accessing its properties.  Here are a few ways to solve this:

**1. Optional Chaining (?.)**

Optional chaining allows you to safely access nested properties without causing an error if any intermediate property is null or undefined.

```javascript
const myObject = null;
console.log(myObject?.property); // Logs 'undefined', no error
```

**2. Nullish Coalescing (??)**

Nullish coalescing provides a default value if the expression evaluates to null or undefined.

```javascript
const myObject = null;
const value = myObject?.property ?? 'Default Value';
console.log(value); // Logs 'Default Value'
```

**3. Conditional (if) statement:**

Explicitly checking if the object is null or undefined.

```javascript
const myObject = null;
if (myObject) {
  console.log(myObject.property);
} else {
  console.log('Object is null or undefined');
}
```

Choose the method best suited for your situation, but always remember to account for the possibility of null or undefined objects to prevent runtime errors.