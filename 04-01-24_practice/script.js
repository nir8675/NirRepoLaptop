const inputProduct = document.querySelector('.inputProduct');
const inputPrice = document.querySelector('.inputPrice');
const ulContainer = document.querySelector('.ulContainer');
const inputImg = document.querySelector('.inputImg');
let arr = []; // creating an empty array


document.addEventListener('DOMContentLoaded', function () {
    pullFromStorage();
    loadItems();
})

document.querySelector('.btnSave').addEventListener('click', function () {
    addProduct();
});

function pullFromStorage() {
    // converting the stringified array into an array.
    arr = JSON.parse(localStorage.getItem('arrayAsString')) || []; // pulling the stringified array from LC
    // || [] if the under the key value there is nothing - return an empty array.
}

function insertToStorage() {
    // converting the array into a string
    localStorage.setItem('arrayAsString', JSON.stringify(arr)); // storing the array as string in LC
}

function loadItems() {
    arr.forEach(element => {
        createProduct(element.productName);
        createProduct(element.productPrice);
        createProduct(element.productImg);
    });
}

function createProduct(input, type) { // הגדרה של פונקציה
    const createLi = document.createElement(type);
    createLi.innerText = input.value;
    createLi.src = input.value;
    ulContainer.appendChild(createLi);
}

function addProduct() { // creating an object

    const obj = {
        productName: inputProduct.value,
        productPrice: inputPrice.value,
        productImg: inputImg.value,
    };

    arr.push(obj); // adding the object into the array
    insertToStorage();

    createProduct(inputProduct, 'li'); // קריאה לפונקציה
    createProduct(inputPrice, 'li');
    createProduct(inputImg, 'img');
}






/*
Local storage:

For primitive variables:

to insert a value to LC
2 options:
localStorage['num'] = num;
localStorage.setItem('num', num);

to pull a value from LC:
localStorage.getItem('num');


Objects:

1.

*/
// const arr = []; //creating an empty array

/* const obj = { // creating an object
  david: 'AtaGever',
  nir: 'AhlaGever',
  reuven: 'geverGever',
  noa: 'ahlaHamuda',
  lior: 'totah',
} */

// arr.push(obj); // adding the object into the array

// const arrAsString = JSON.stringify(arr); // converting the array to string
// const setArrInStorage = localStorage.setItem('arrAsString', arrAsString); // storing the array as string in LC

// const stringToArr = JSON.parse(arrAsString); // converting the stringified array into an array.
// const getArrFromStorage = localStorage.getItem('arrAsString') || []; // pulling the stringified array from LC
// || [] if the under the key value there is nothing - return an empty array.

// foreach loop to make all the elements in the webpage stay when refreshing.
















