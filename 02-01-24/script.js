let productList = []
let buttonAdd = document.querySelector(`#product_add`);
let tableList = document.querySelector(`#tableProducts`)

buttonAdd.addEventListener(`click` , function(){
    
    const productObj = {
        productName:document.querySelector(`input[name=product_name]`).value,
        productPrice:document.querySelector(`input[name=product_price]`).value,
        productImage:document.querySelector(`input[name=product_image]`).value,
        productCategory:document.querySelector(`select[name=product_category]`).value,
    }
    productList.push(productObj);
    renderTable();
})

function renderTable (){
    tableList.textContent = ``;
for (let index = 0; index < productList.length; index++) {
    const element = productList[index];

    const tableRow = document.createElement(`tr`);

    const tableCell1 = document.createElement(`td`);
    tableCell1.textContent = element.productName;
    const tableCell2 = document.createElement(`td`);
    tableCell2.textContent = element.productPrice;
    const tableCell3 = document.createElement(`td`);
    tableCell3.textContent = element.productImage;
    const tableCell4 = document.createElement(`td`);
    tableCell4.textContent = element.productCategory;

    tableRow.appendChild(tableCell1)
    tableRow.appendChild(tableCell2)
    tableRow.appendChild(tableCell3)
    tableRow.appendChild(tableCell4)

    tableList.appendChild(tableRow)
}


};
