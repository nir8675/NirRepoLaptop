const inputText = document.querySelector(`.inputText`)
const inputText2 = document.querySelector(`.inputText2`)
const clickBtn = document.querySelector(".buttonClass")
const hoverbtn2 = document.querySelector(".HoverClass")



function printInput1(){
alert(inputText.value)
}

function printInput2(){
alert(inputText2.value)
}
clickBtn.addEventListener("click", printInput1)
hoverbtn2.addEventListener("mouseover", printInput2)




function ifLior (name , fn){ 
if (name === `lior`) {
    fn();
}
}






function helloWorld (){
console.log(`Hello World`);

}

let funAdd = helloWorld;

function sayBye(fn){
    console.log(`byeeeee`)
fn();
    console.log(`byeeeee`)

}

sayBye(funAdd)



sayBye(){
function()

(function(){

    alert(`Nir`)


})()

}

sayBye()


// תרגיל:
// שני אינפוטים שני כפתורים
// addeventlistener
// אחד עם click אחד עם hover.
// כשנלחץ על אחד הכפתורים תצא alert עם האינפוט.
// כשנעשה hover תצא alert עם האינפוט השני.
// מתקדמים: באותו כפתור שתי אופציות של הובר וclick
