//abhi tak humne dekha inline style change karte hn
//as hum css change karna chahte hn to inline css se kar denge. but wo external/internal file css ko overwrite kar dega. ab hum css ko dekhna chahte h

//hum jannna chahte hn ki kaun sa style laga h
let but = document.getElementById("btn");

let css = getComputedStyle(but);
console.log(css); // all css on btn. including jo css browser laga deta h default


//hum only jo css lagagye the wo dekhna chahte hn
console.log(css.color); //rgb(255, 255, 255) i.e white(internal css)


//ek chij aur
console.log(css.color);  //rgb(0, 0, 255) ab ye (inline css) wala dikheyga color bcs inline css has more value.jis css ka more value hota h wo console m print hoga
