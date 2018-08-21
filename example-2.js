// https://goo.gl/PYv71u
let arg = "lodo";
function hello_closer(input) {
  let diminutive = "ella";
  function hello_closed(greeting) {
    return greeting + " " + input + diminutive;
  };
  return hello_closed;
};
let greet_lodo = hello_closer(arg);
let greeing = greet_lodo();

// ----- breakdown -----

let greet_lodo_traced;
{ // = hello_closer('lodo');
	let args = {
	  input: "lodo"
	};
	let ret_val;
	hello_closer: {
	  let diminutive = "ella";
	  function hello_closed(greeting) {
	    return greeting + " " + args.input + diminutive;
	  };
	  ret_val = hello_closed;
	  break hello_closer;
	};
};

let greeting_traced;
{ // = greet_lodo_traced();
	let closure = {
	  frame: "hello_closer('lodo')",
	  input: "lodo",
	  diminutive: "ella"
	};
	let args = {
	  greeting
	};
	let ret_val;
	hello_closed: {
	  ret_val = args.greeting + " " + closure.input + closure.diminutive;
	  break hello_closed;
	};
};