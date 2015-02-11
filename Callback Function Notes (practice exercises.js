
var getName = function() {
	var name = prompt('whats your name?')
};

var sayName = function() {
		getName();
		console.log(getName());
};

sayName(name);




//CALLBACK FUNTION (HOW TO CALL!!!)
//the callback should be in the function. 
// real life example would be like if you had users with lots of information then you would do a callback function so that all their data can be alerted, console.loged, or somthing like that all at once.

var logValue = function(x) {
	console.log(x());								//<<<<this x() part of the code wont let you use strings. but if you take it out you can.
};

var logValue(function() {
	return prompt('what is your name');                        //<<<this code is sycranis.
});

logValue(getName);