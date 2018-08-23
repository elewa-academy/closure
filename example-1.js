// https://goo.gl/JJ4jJe
let arg = "lodo";
function hello_closer(input) {
  function hello_closed() {
    return "hello " + input;
  };
  return hello_closed;
};
let greet_lodo = hello_closer(arg);
let greeing = greet_lodo();

// ----- breakdown ------

let greet_lodo;
{ // = hello_closer('lodo');
	let args = {
	  input: "lodo"
	};
	let ret_val;
	hello_closer: {
	  function hello_closed() {
	    return "hello " + args.input;
	  };
	  ret_val = hello_closed;
	  break hello_closer;
	};
	greet_lodo = ret_val;
};

let greeting;
{ // = greet_lodo();
	let closure = {
	  frame: "hello_close('lodo')",
	  input: "lodo";
	};
	let ret_val;
	hello_closed: {
	  ret_val = "hello " + closure.input;
	  break hello_closed;
	};
	greeting = ret_val;
};
