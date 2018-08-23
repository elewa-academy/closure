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

let greet_lodo_traced;
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
};

let greeting_traced;
{ // = greet_lodo();
	let closure = {
	  frame: "hello_closer_traced('lodo')",
	  input: "lodo";
	};
	let ret_val;
	hello_closed: {
	  ret_val = "hello " + closure.input;
	  break hello_closed;
	};
};
