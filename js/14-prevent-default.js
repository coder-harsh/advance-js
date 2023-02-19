//now dekheneg ek function prevent default jo dom k default behaviour ko change karmne m kam karta h.

//hum chahte ki link p click karne m us link p na jye ya double clcik p jaye i.e single clcik p disble karna padega.

let link = document.getElementById("anchor");
link.addEventListener('click', function (e) { //e name ka ek object jayega
    console.log("link clicked");
    e.preventDefault(); //e object ka ek method h prevent default //ab ye link click p link p nahi jayega
});

//use of this: form bana k submit na karna. hum chahte ki pahle form validation kare themn ye kam aayega