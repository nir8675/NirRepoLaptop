// let nir = {
//     age: 22,
//     school: "katzir",
//     userName: "nir8675"
// };


// let userName = localStorage[`userName`];


// document.querySelector(`.btnSave`).addEventListener(`click`, function () {

//     userName = document.querySelector(`.name`).value;
//     localStorage[`userName`] = userName;


//     console.log(userName);



// });

// document.querySelector(`.btnName`).addEventListener(`click`, function () {
//     alert(userName);
// })


let firstName = document.querySelector(`.name`);
let lastName = document.querySelector(`.lastName`);
let btnSave = document.querySelector(`.btn-nameLastName`)
btnSave.addEventListener(`click`, function () {


    localStorage[`first name`] = firstName.value;
    localStorage[`last name`] = lastName.value;


})


let clearLocal = document.querySelector(`.btn-clear`);
clearLocal.addEventListener(`click`, function () {
    localStorage.clear()

})


