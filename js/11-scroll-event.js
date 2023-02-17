//jb koi page p mouse k scrool se kuchh kar raha h uppar niche to pata chl jata h
/*
window.addEventListener('scroll', function () {
    console.log("scrolling...");  //upar niche karenge to scroll hoga
});

//ab agar scrool upar ya niche ho janna h to kya karenges
window.addEventListener('wheel', function (event) {//only valid for scroll with wheel/touch pad not scrollbar scroll.event parameter se scroll ka bare m pata chalega //deltay for vertical scroll. deltax for horizental scroll. deltay m ek no jayega.
    if (event.deltaY < 0) {
        console.log("scrolling up..");  //agr no 0 se chota hoga to scroll up hoga
    }
    else if (event.deltaY > 0) {
        console.log("scrolling down.."); //aur agr no 0 se bda hoga to scroll down hoga
    }
});

//agar page se focus loose ho to kuchh kare jaise saurav mukharjee.in site m title change ho jata h dusre page m jane se
window.addEventListener('blur', function () {
    alert("come to this page");
});
*/
//kaise detect kare ki user scroll karke 500px ya kuch px tk aa chuka h. jaise pop up dikhna, chat dikhna etc.
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 150) { //pageYOffset for vertical scroll. pageYOffset return the no in px for scroll. only ek if se initial scroll 150px hone p change karega. but phir hum agr scroll up kar denge to v color red rahega.  so we will use else condition too 
        this.document.body.style.background = "red";
    }
    else {
        this.document.body.style.background = "white"; //150px se kam hone p color white  ho jayega
    }
});
//pageYOffset batata h ki page kitna verticall scroll hua h px m