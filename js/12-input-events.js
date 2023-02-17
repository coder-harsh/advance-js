//important events

//input m jb hum click karte hain to focus p chla jata hn. mouse htaa dte hn to blur ho jata hn
/*
let x = document.getElementById("myinp");

x.addEventListener('focus', myfoc);  //click krte hn input to focus m chla jata hn.
x.addEventListener('blur', myblr);//click krte hn input to focus m chla jata hn aur jb ek bar click karne k badd mouse hatate hn to blur m jata hn

function myfoc() {
    x.style.background = "yellow";
}
function myblr() {
    x.style.background = "green";
}


//change event: input field m kuchh change aaya h
let x = document.getElementById("myinp");
x.addEventListener('change', function () {
    console.log(this.value); //input m kuch type karne k bad agr khi bahar click kare to input wala value print ho jayega
});

//jb jb value change hoga input ka tbhi ye batayega. to jb jb value change detect karna h toh iska use karenge
*/

//input event: jb jb kuch type ya remove karenge tb tb wo detect hoga
let x = document.getElementById("myinp");
x.addEventListener('input', function () {
    console.log(this.value);
});

//change event m input value change hone p aur bahar click hone p detect hoga
//input event m value enter/change hone p hi detect hoga i.e kuch v change hone p detect hoga. ye input/textarea p kam karega