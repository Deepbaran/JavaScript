# JavaScript

This repository contains all the JavaScript codes that I learned while starting to learn Frontend Development.

# Notes:

+++++++++++++++
Topics:
+++++++++++++++
===============
JS Engine:
===============

- JS needs a set of tool/sw so that the JS code can be converted to the Machine understandable code.
- Browsers comes up with a compiler that can turn the JS code into executable code.
- JS Engines:

1. Google - V8
2. Mozilla - Spider Monkey

- JS is run by any of the two ways:

1. Interpreter
2. JIT (Just In Time Compiler)

- JS is a interpreted language.

===============
ECMAScript:
===============

- JavaScript with guidelines.
- ES6: 2015
- ES8: 2017
- ES10

===============
Variables:
===============
var - These are Functional scoped or lexical scoped. This means that once declared, they are accessible through out the function or if declared in global scope then is accessible throughout the code. We can redeclare a var variable. Hoisting is also happens to them unless stopped by using the strict keyword.

let - These are block scoped. These act as normal variables. We cannot redeclare a let variable.

const - Same as let but once assigned cannot be reassigned. const must be defined while being declared.

===============
Data Types:
===============

1. Number
2. Boolean
3. String
4. Null
5. Undefined (!= Not defined)
6. Object (Array is also considered as a Object in JS)
7. Symbol
8. BigInt

===============
Operators:
===============
Arithmetic: +-/\*% [Follow BODMAS Rule]
Conditional: > < >= <= >== <== == ===
typeof operator
Logical Operator: && || !

===============
DOM:
===============
Methods to grab HTML elements: [Read more]

---

1. document.getElementsTagName()
2. document.getElementsById()
3. document.getElementsByClass()
4. document.querySelector()
5. document.querySelectorAll()

## elements:

- innerHTML is used to grab the inner HTML element or content inside the element.
- innerText is used to grab the inner Text of the element.
- style is used to change the CSS of the element.

+++++++++++++++
Personal Notes:
+++++++++++++++

- Interpolation: JavaScript string interpolation is the process of embedding an expression into part of a string. A template literal is used to embed expressions. You can add values such as variables and mathematical calculations into a string using interpolation.
- Use template literals (``) when adding variables into strings instead of string literals ('').
- Strings are immutable in JS.
- Even if an array or object are assigned as const, we can change the values inside it as the const variable is referring the object stored in the memory and not it's values.
- Technically Functions are considered as a Scope in HS and the others with {} such as loops and conditionals are not considered as a scope.
- For all REGULAR FUNCTION CALLS, this points to window object or the global object.
- DOM (Document Object Model): The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
- Everything is a doument in DOM.
- The DOM API is one of the multiple web APIs built into web browsers.
- Two main APIs in DOM are document and window.
- In JavaScript everyting is kind of object (including functions).
- Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.
- Arrays are Objects in JS.
- Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype
- \_\_proto\_\_ shows the attributes inherited by the child object from its parent and the parent's \_\_proto\_\_ shows the attributes it inherited from it's parent and it goes on till the \_\_proto\_\_ becomes null and this chain of \_\_proto\_\_ is called prototype chaining.
- In functional programming functions are used as varaibles.
- JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.
- undefined is not an object if JS. But Null is an object.
- UTF-16 allows us to include chinese, korean, japanese, etc characters as well as emojis.

+++++++++++++++
Links:
+++++++++++++++ 0. DOM - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

1. Null vs Undefined - https://stackabuse.com/javascript-check-if-variable-is-a-undefined-or-null/
2. Null vs Undefined vs to Not defined - https://medium.com/technoetics/difference-between-null-undefined-and-not-defined-in-javascript-3a52a62894b
3. undefined vs Not defined - https://www.geeksforgeeks.org/explain-the-difference-between-undefined-and-not-defined-in-javascript/#:~:text=In%20JavaScript%2C%20they%20both%20are,then%20it%20would%20be%20undefined
4. Operator Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
5. Expressions and Operators - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
6. Callback Function - https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
7. Events - https://developer.mozilla.org/en-US/docs/Web/Events
8. Object - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
9. Prototypal Inheritance - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
10. Event Loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
11. Promise - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
12. JS Sort - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort