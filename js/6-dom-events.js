//dom events are actions that occour as a result of the user action or as result of state change of the element of a dom tree

//like gar kuchh user action ya state change hua to hum ya hamara webpage react kare to isse hum event kahte h


//dom event for example
/*
when user click the mouse
when a webpage is loaded

when an image is loaded

when mouse move over n element
when input field is changed
when an html form is submitted
when a user strokes a key


//event is of 2 type
user event
webpage state change



//2 tarike se event start kar sakte hn
// 1. inline event
// 2. event listner method se
//inline m on likhna padta h eventname se pahle
3. shotcut: ananymous function s pahle


function btnclick() {
    alert("button was clicked"); //btn click se alert hoga
}

let btncl = document.getElementById("btn");
btncl.addEventListener("click", btnclick); //isme 2 parameter pass hota h. 1st kaun sa event karna h. 2nd kaun sa function execute karna h. click h event,btnclick h function

//click event  '' / " " ke andr hoga. btnclick function bina '' hoga


//iska ek shotcut v h. hum anonymous function(no nmae) se v kar sakte hn

let btncl = document.getElementById("btn");
btncl.addEventListener("click", function () {
    alert("button was clicked");
});

//agr function ek hi bar use karna to anonymous function bana lo. agar bar bar same function execute karna ho to function banao


//kya ek event p multiple event listner lagaya ja sakt h? yes
*/

let btncl = document.getElementById("btn");
btncl.addEventListener("click", function () {
    console.log("button was clicked");
});

btncl.addEventListener("mouseover", function () {
    console.log("Mouse over is activated");
});

btncl.addEventListener("mouseout", function () {
    console.log("Mouse out is activated");
});

btncl.addEventListener("dblclick", function () {
    console.log("doubleclick is activated");
});
btncl.addEventListener("focus", function () {
    console.log("focus is activated"); //only 1st time hover p hoga
});
