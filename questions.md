What is scope? Your explanation should include the idea of global vs. local scope.
Scope, or Variable Scope, is the idea regarding in which part of a program a given variable can be referenced or changed.
In Javascript there are two scopes, Global and Local. Local scope is within a function so any variable that is declared
(var varOne;) within a funtion can only be referenced or changed from inside that function - that variable's scope is local
to that function. Global scope is throughout a program, outside of functions as well as within any functions. A variable
that is declared outside of any functions has global scope and can be referenced or changed in any part of the program. Also,
when a variable is assigned a value without being specifically declared (varOne = 'value';) from inside a function, that variable
has global scope as well.

Why are global variables avoided?

Explain JavaScript's strict mode

What are side effects, and what is a pure function?

Explain variable hoisting in JavaScript.
