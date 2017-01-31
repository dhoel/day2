function createGreeter(greeting) {

  return function(name) {
    return greeting + " " + name;
  }
}

var hello = createGreeter("Hello");
var bonjour = createGreeter("Bonjour");

console.log(hello("Anna"));
console.log(bonjour("Sofia"));
