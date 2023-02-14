//now we will see ki inline style kaise change karte h. inline style: jo hum attribute se style dete hn

let btn = document.getElementById("but");
//1st method. cssText method
btn.style.cssText = "background-color:red; color:white";  //jaise attrb dete hn inline waise hi " " k andr likh denge. ye v pahle wala inline css ko overwrite kar dega
//<button id="but" style="background-color: red; color: white;">Send</button> ho jayega


//2nd method. set attribute se

btn.setAttribute("style", "border-radius:12px"); //5 no line k css ko overwrite kar dega inline. even jo inline style html m likha h usko v
//<button id="but" style="border-radius:12px">Send</button>


//3rd method. btn.style.property="value"

btn.style.color = "red"; //ye line no 11 k css ko overwrite nhi karega. but mix ho jayega. <button id="but" style="border-radius: 12px; color: red;">Send</button>

btn.style.borderColor = "blue"; //<button id="but" style="border-radius: 12px; color: red; border-color: blue;">Send</button>

//setAttribute, cssText m ek problem h ki pahle se jo inline style h usko overwrite kar dega

//btn.style.property="value" m ek bar m ek hi property, value  de sakte hn

//cssText se css inline overwrite se bachne k liye
// btn.style.cssText += "background-color:red;border-radius:10px;"; karne se purna inline css m add kar dega ye new wala inline css