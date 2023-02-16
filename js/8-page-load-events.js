/*
2 page load event hota h
1. DOMContentLoaded: the browser fully loaded HTML and completed building the DOM tree. however it hsn't loaded exeternal resources like stylesheets and images. in this event, you can start selecting dom nodes or initialize the interface
i.e jb dom tree bn jata h then ye event trigger hota h. aur is event tk koi external css, image,js etc nhi load hota h. hum external chij download hone se pahle kuchh karna chahte hn then ye event use karenge

sb kuchh download ho jaye tb use karu to ye event h
2. load: the browser loaded the html and also external resources like images, css.
when you leave the page, the following evemnts fire in sequences:
hum chahte hn ki sbkuch download ho jaye to kuch karna h toh iska use karenge


//pahle dom tree create hoga then img load hoga


window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Tree created");
});
window.addEventListener('load', function () {
    console.log("fully loaded");
});

//pahle domtree create hoga then img load hogaphir load event run hoga


//ab hum chahte hn ki ek paricular img load ho tabhi load function trigger karo



window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Tree created");
});

let img = document.getElementById('image');

img.addEventListener('load', function () {
    console.log("fully loaded");
});


//pahle sb external chij load hota tha to fully loaded show karta tha. ab img ko particularly target kiye hn to img load hone p fully load show karega

*/
//hum onload se v kar sakte hn. inline m bahut event m on lag jata h. check on net

function loadimg() {
    console.log("img loaded");  //img load hoga then ye function run hoga
}
