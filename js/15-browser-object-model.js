//browser object model(bom) is used to  interact with browser through js

//bom ka main object window hota h.
//the window object represent a window in browser.

//ye window object hum nhi create karte but browser hi ek window object create karta h
//an object of window is created automaticlly by the browser.
/*
all global javascript objects, functions, and variables starting with the var keyword automatically becomes members of window object.

global variables are properties of the window object.

global functions are method of window object.

window is a default object
*/

var x = "hello";  //ye variable window object ka ek properties v ban chuka h. sirf var wala variable hi window object ka property banta h. let and const wala nhi
console.log(x); //hello
console.log(window.x); //hello

let h = "hi";
console.log(window.h); //undefined

function xyz() { //ye function method bn chuka h window object ka.
    console.log("Hi");
}


xyz(); //function call
window.xyz(); //Hi: method call

//but hum bina window object ka v function call, var print kar rahe bcs. window is default object so js understand xyz() means method of window object


//jaise hi window object bante hn waise hi method v ban jate hn. ex: alert, confirm, prompt etc. are also method of window.


window.alert("Hi"); //alert, prompt, confirm are method of window. koi v function jo hum direct use karte hn wo ek method h window object ka

//window object kisi v website open karne p brwoser automatically bana k deta h.


//jo v global function, variable(var key), object h wo member h window object ka.
