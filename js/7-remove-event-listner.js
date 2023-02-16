//ab hum same event listner v multiple time laga sakte hn

let btnvar = document.getElementById("btn");
function click1() {
    console.log("Click1 action activated");
}
function click2() {
    console.log("Click2 action activated");
}

btnvar.addEventListener('click', click1);
btnvar.addEventListener('click', click2);

//dono function ek hi click p execute ho raha h

//now remove kaise karte hn jo event listner add kiya gaya h

//remove function tabhi kam karega jb humne dd event listner function k through hi kuchh add kiya h and hum anonymous function use nahi karte external function use karte hn tb

//hum chahte hn ki ek particular condition p click2ht diya jay.

btnvar.removeEventListener("click", click2); //click2 ab remove ho chuka h. click: click event remove karna h. click2: kis function ko remove karna h
