//keyboard event
//kauna sa keypress hua h

//hmare webpage p koi v keypress kare to pata chale. so hum pure window p lageynge

window.addEventListener('keydown', checkey);

function checkey(event) { //event var m koi v key press hoga to input aayega event listner s
    console.log(event.key);  //jo key  press karenge wo print hoga
}

//keyup m key press karke chhorenge to hoga