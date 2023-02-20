//ab hum window ke sath thoda play karte hn


//ab hum jante hn window ka size pata karna chahte hn
//2 tarh ka window size hota h. 1. innerheight and innerwidth  2. outerheight and outerwidth

//1.innerheight and innerwidth jahan humare webpage dikhega

//2. outerheight and outerwidth: pura browser

/*
console.log(window.innerHeight); //259 in px. sirf page ka height
console.log(window.innerWidth); //1280


document.write(window.outerHeight); //680 in px . pura browser ka height
document.write(window.outerWidth); //1280


//new window kaise open karte hn

let btn = document.getElementById("btn1");
btn.addEventListener('click', function () {
    window.open();  //window object ka ek method. btn clcik p ek blank window open ho jata h.
});



let btn = document.getElementById("btn1");
btn.addEventListener('click', function () {
    window.open(url, target/window_name, windowFeatures);  //esme 3 parameter pass hota h.
});



let btn = document.getElementById("btn1");
let url = "https://www.google.com";
let features = "height=500,width=500";
btn.addEventListener('click', function () {
    window.open(url, 'google', features);  //500x500 ka ek window google.com wala open ho jayega google name se.opened window ka url change nhi kar sakte.
});



//name google dene s kya use hota h.
//hum chahte hn ki google.com jo open h usime open ho yahoo.com btn2 clcik pe.

let btn = document.getElementById("btn1");
let btns = document.getElementById("btn2");
let close = document.getElementById("close");
let url = "https://www.google.com";
let features = "height=500,width=500";
btn.addEventListener('click', function () {
    window.open(url, 'google', features);  //500x500 ka ek window google.com wala open ho jayega google name se.opened window ka url change nhi kar sakte.
});

btns.addEventListener('click', function () {
    window.open('https://www.yahoo.com', 'google'); //jo google wala window open h, usime yahoo wala window open ho btn2 click p
});

*/
let win;
let btn = document.getElementById("btn1");
// let btns = document.getElementById("btn2");
let close = document.getElementById("close");
let url = "https://www.google.com";
let features = "height=500,width=500";
btn.addEventListener('click', function () {
    win = window.open(url, 'google', features);
});



//popup close
close.addEventListener('click', function () {
    win.close(); //Uncaught ReferenceError: win is not defined. so us win ko global bnna padega
});
