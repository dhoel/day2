What is scope? Your explanation should include the idea of global vs. local scope.

  Scope, or Variable Scope, is the idea regarding in which part of a program a given variable can be referenced or changed.
  In Javascript there are two scopes, Global and Local. Local scope is within a function so any variable that is declared
  (var varOne;) within a funtion can only be referenced or changed from inside that function - that variable's scope is local
  to that function. Global scope is throughout a program, outside of functions as well as within any functions. A variable
  that is declared outside of any functions has global scope and can be referenced or changed in any part of the program. Also,
  when a variable is assigned a value without being specifically declared (varOne = 'value';) from inside a function, that variable
  has global scope as well.

Why are global variables avoided?

  We generally want to avoide global variables, because as our code base gets larger, it becomes very easy to accidently change or alter an existing variable or have a bug enter our code, because of an undesirable side effect.

Explain JavaScript's strict mode

  Using strict Mode ('use strict';) will cause an error to be triggered if a variable is created without specifically declaring
  it using the keyword "var" (e.g. [varOne = 'foo';] instead of [var varOne = 'foo';])

  What are side effects, and what is a pure function?

  A side effect is when a function alters code outside of the function call. So if we had a function that called an array, and we pushed an item onto the array, we would have mutated the array, and therefore created a side effect. Not all side effects
  are bad. 

  A pure function is a function that returns a value that is only determined by its input values, without any observable side
  effects.

Explain variable hoisting in JavaScript.
