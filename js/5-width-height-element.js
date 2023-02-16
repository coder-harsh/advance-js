//kisi v element ka height and width kaise pata karte hn
/*
height-width is of 2 type
1. offset: border, margin and padding include hota h
2. client: border margin include nhi hota h sirf padding include hota h
//padding dono m include hota h
*/

let boxdiv = document.getElementById("box");

let width = boxdiv.offsetWidth;
let height = boxdiv.offsetHeight;


console.log(width); //1264 offset width
console.log(height); //251 offset height

width = boxdiv.clientWidth;
height = boxdiv.clientHeight;

console.log(width); //1246 as border not included that's why it is less than 1
console.log(height); //250 as border not included that's why it is less than 1

//is trah se height and width jan sakte hn