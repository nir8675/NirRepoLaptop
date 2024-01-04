// let products = document.querySelector(`.product`)
// let button = document.querySelector(`.add-button`)
// let listProducts = document.querySelector(`.listShop`)
// let listShop = document.querySelector(`.listShop`)



// button.addEventListener(`click` , function(){
//     clickButton ()


// })

// function clickButton () {

//     let newTask = document.createElement('p');
//     newTask.textContent = products.value;
//     listShop.appendChild(newTask);



// }


let productsInput = document.querySelector(`.product-input`);
let buttonAdd = document.querySelector(`.add-button`);
let buttonClear = document.querySelector(`.clear-button`);
let listProducts = document.querySelector(`.list-shop`);
let totalItemsElement = document.querySelector(`#total-items`);
let lastModifiedDate = document.querySelector(`.last-modified-date`);
// let today = new Date().toLocaleString();
// let totalItems = 0;

buttonAdd.addEventListener(`click`, clickAdd);
buttonClear.addEventListener(`click`, clickClear);

function clickAdd() {
    // validate product input check if null
    if (!productsInput.value) return
    let newElement = document.createElement(`li`)
    newElement.textContent = productsInput.value;
    listProducts.appendChild(newElement);
    productsInput.value = ``;
    // totalItems++
    updateTotalItems();
    lastModifiedDate.textContent = new Date().toLocaleString()
};

function clickClear() {
    listProducts.textContent = ``;
    // totalItems = 0;
    updateTotalItems()
    lastModifiedDate.textContent = ``;
};

function updateTotalItems() {
    totalItemsElement.textContent = document.querySelector(`.list-shop`).childNodes.length;

};



for (let i = 8; i >= 1; i--) {
    console.log(i);
}
