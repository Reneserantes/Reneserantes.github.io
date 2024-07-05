/*const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}
btnLike1.addEventListener("click", countLike1)


const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}
btnLike2.addEventListener("click", countLike2)


const btnDislike1 = document.getElementById("btnDislike1")
const count3 = document.getElementById("count3")

function countDislike1() {
  let DislikeCounts = parseInt(count3.value) + 1
  count3.textContent = DislikeCounts.toString()
}
btnDislike1.addEventListener("click", countDislike1)




const btnDislike2 = document.getElementById("btnDislike2")
const count4 = document.getElementById("count4")

function countDislike2() {
  let DislikeCounts = parseInt(count4.value) + 1
  count4.textContent = DislikeCounts.toString()
}
btnDislike2.addEventListener("click", countDislike2)


const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n"
}
submit.addEventListener("click",submitComment)
*/

var products = [];
var quantities = [];
var prices = [];
for (var i = 1; i <= 6; i++) {
    products.push(document.getElementById("product" + i));
    quantities.push(document.getElementById("qty" + i));
    prices.push(document.getElementById("price" + i));
}

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";
    var totalPrice = 0;

    for (var i = 0; i < products.length; i++) {
        if (parseFloat(quantities[i].value) > 0) {
            var qty = parseFloat(quantities[i].value);
            var price = parseFloat(prices[i].textContent);
            var order = `${qty} pc/s x ${prices[i].textContent}------${products[i].textContent}------ Php ${qty * price}\n`;
            carts.textContent += order;
            totalPrice += qty * price;
        }
    }
    total.value = '₱ ' + totalPrice.toFixed(2);
}

function calculateChange() {
    let totalPrice = parseFloat(total.value.replace('₱ ', ''));
    let cashTendered = parseFloat(cash.value);
    if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
        let changeAmount = cashTendered - totalPrice;
        change.value = '₱ ' + changeAmount.toFixed(2);
    } else {
        change.value = '';
    }
}

function purchaseButton() {
    let totalPrice = parseFloat(total.value.replace('₱ ', ''));
    let cashTendered = parseFloat(cash.value);
    if (cashTendered >= totalPrice) {
        alert('Thank you for your purchase');
    } else {
        alert('Insufficient Cash, please enter the right amount');
    }
}

quantities.forEach((qty) => {
    qty.addEventListener("keyup", addOrder);
});

cash.addEventListener("keyup", calculateChange);

document.getElementById('purchaseButton').addEventListener('click', purchaseButton);
