//how to chnge css/manipulate css with the help of class. the best of to change css is through class.
/*
let boxdiv = document.getElementById("box");
console.log(boxdiv.className); //color  //class dekhne ka 1st tarika

boxdiv.className += " dim"; //ab dono class lag gaya h box div m


// class dekhne ka 2nd trika
console.log(boxdiv.classList);  //class ka array bn chuka h  DOMTokenList(2) ['color', 'dim', value: 'color dim']

//agar class ek ek karke print karna h

for (let css of boxdiv.classList) {
    console.log(css); //color dim
}
*/

//classlist k through css kaise add karenge

let boxdiv = document.getElementById("box");
boxdiv.classList.add("dim");  //ab dim class ka style v apply ho chuka h


//ab hum isse class ko remove v kar sakte hn
boxdiv.classList.remove("dim");  //ab dim class remove ho chuka h


// ab replace: means ek class ko replace karke dusra laga de

boxdiv.classList.replace("color", "dim");  //color hat k dim class lag chuka h.para 1: kisko replace karna h. para 2: kisse replace karna h


//ab hum check karenge ki wo class laga h ki nahi
let result = boxdiv.classList.contains("color");
console.log(result); //false  as color class is not applied on element.



//toogle method for class: class nhi laga h to laga dega. agr class laga h to remove kar dega

boxdiv.classList.toggle("color");  //color class nhi tha to color clss apply kar dega. agr class laga hoga to use remove kar dega
