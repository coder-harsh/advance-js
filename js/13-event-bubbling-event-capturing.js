//most imp concept of event
/*
<body><div><button>Send</button></div></body> agar sb p onclick h to pahle kiska event shuru hoga
kisi sitution m chahenge ki pahle body s shuru ho kisi m sochenge ki pahle btn se shuru ho event.
event bubbling: event start from most specific element and flows upwards towards least specific element(the document or even window)
in bubbling, on click btn event occurs in following order
btn
div with id
body
html
document

i.e pahle child se execute hoga

event capturing: event starts from least specific element and flows downwards towards the most specicfic element. i.e child.
when u click btn event occurs in follwoing order.

document
html
body
div with container
btn

how to add  this
addEventListner(event,function,useCapture)

the default value is false, which will use the bubbing propagation, when the value is set to true then event use the capturing propagation.

false: bubbling: default: child 1st
true: capturing: parent 1st


let d = document.getElementById("box");
let b = document.getElementById("btn");

b.addEventListener('click', btnclick);  //3sra para nhi diya to default false means bubbling hoga i.e child pahle event hoga
d.addEventListener('click', divclick);
document.body.addEventListener('click', bodyclick);


function btnclick() {
    console.log("Button clicked...");
}
function divclick() {
    console.log("div clicked...");
}
function bodyclick() {
    console.log("body clicked...");
}


//pahle btn click then div then body i.e bubbling
//ab direct div p click p pahle div clicked then body clciked
//agar body p clcik kare to body clciked hoga


//ab all m true lagane p hi event capturing hoga


let d = document.getElementById("box");
let b = document.getElementById("btn");

b.addEventListener('click', btnclick, true); //sirf btn m true dene se default bubbling jaisa kam karega

d.addEventListener('click', divclick, true); //btn and div m true hone se btn clcik pe capturing hoga i.e pahle div then btn then body(bubbling as no true in body)
document.body.addEventListener('click', bodyclick, true); //3no m true se capturing hoga i.e body, div then btn

function btnclick() {
    console.log("Button clicked...");
}
function divclick() {
    console.log("div clicked...");
}
function bodyclick() {
    console.log("body clicked...");
}
agar normal tarike se karna to, sbko false ya true do
*/

//ab hum chahte ki agar btn p clcik kare to sirf btn wala event ho,div aur body activate na ho. uske liye ek function h stop propagation


let d = document.getElementById("box");
let b = document.getElementById("btn");

b.addEventListener('click', btnclick);  //3sra para nhi diya to default false means bubbling hoga i.e child pahle event hoga
d.addEventListener('click', divclick);
document.body.addEventListener('click', bodyclick);


function btnclick(event) { //function p event parameter se ek object bn jata h. event nam k object ka function/method milta h stoppropagation
    console.log("Button clicked...");
    event.stopPropagation(); //ab sirf btn wala event hoga. i.e wo parent ko nhi dega next move. agr div p click karu to div and body event hoga
}
function divclick(event) {
    console.log("div clicked...");
    event.stopPropagation(); //ab btn clcik p btn event, div clcik p div enet only hoga. body p sirf body hoga
}
function bodyclick() {
    console.log("body clicked...");
}