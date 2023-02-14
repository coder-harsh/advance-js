//ksi v elemment ka attribute kaise change karte hn js s

let but = document.getElementById("btn");


//btn select ho chuka h ab hum attribute add karenege

but.setAttribute("name", "form"); //<button id="btn" name="form">Send</button> addd ho jayega

//class add karte hn
but.setAttribute("class", "btn-send");   //<button id="btn" name="form" class="btn-send">Send</button>


//jo attribute pahle se set hn uska value kaise pata kare
let btnname = but.getAttribute("name");
console.log(btnname); //form bcs btn name yahi set kiye the.


//attribute remove karna
but.removeAttribute("name"); //<button id="btn" class="btn-send">Send</button> set name attribute remove ho gaya h


//kaise jangeneg ki koi attribute h ya nahi
let hasattr = but.hasAttribute("name");
console.log(hasattr); //false bcs there is no name attribute in btn. it will return true/false


//now you know how to set/get/check/remove attribute in elements