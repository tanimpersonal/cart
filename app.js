document.getElementById('phone-plus').addEventListener('click', function () {

    plusMinus(true, 'phone', 1219);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    plusMinus(false, 'phone', 1219);
})

document.getElementById('case-plus').addEventListener('click', function () {
    plusMinus(true, 'case', 59);
})

document.getElementById('case-minus').addEventListener('click', function () {
    plusMinus(false, 'case', 59);
})

function plusMinus(check, product, price) {
    const productQuantity = document.getElementById(product + '-number');
    let phoneNumberValue = productQuantity.value;
    if (check == true) {
        productQuantity.value = parseInt(phoneNumberValue) + 1;
    } else if (check == false) {
        if (productQuantity.value > 0) {
            productQuantity.value = parseInt(phoneNumberValue) - 1;
        } else {
            alert('not possible');
        }
    }
    quantityCalc(productQuantity.value, product, price);
}
// costing function
function quantityCalc(quantity, product, price) {
    const phonePrice = document.getElementById(product + '-price');
    let quantityTotal = quantity * price;
    phonePrice.innerText = quantityTotal;
    let subTotal= document.getElementById('sub-total');
    let taxId= document.getElementById('tax');
    let grand= document.getElementById('grand-total');
    subTotal.innerText=total();
    let tax=parseInt(subTotal.innerText)*0.2;
    taxId.innerText=Math.round(tax);
    let grandTotal= parseInt(subTotal.innerText)+parseInt(taxId.innerText);
    grand.innerText=grandTotal;
}

function total() {
    let myClass = document.getElementsByClassName('price-class');
    let total= 0;  
    for (classes of myClass) {
        let value = parseInt(classes.innerText);
        total = value + total;
    }
    return total;
}