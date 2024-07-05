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

document.addEventListener("DOMContentLoaded", function() {
    var product1 = document.getElementById("product1");
    var qty1 = document.getElementById("qty1");
    var price1 = document.getElementById("price1");

    var product2 = document.getElementById("product2");
    var qty2 = document.getElementById("qty2");
    var price2 = document.getElementById("price2");

    var product3 = document.getElementById("product3");
    var qty3 = document.getElementById("qty3");
    var price3 = document.getElementById("price3");

    var product4 = document.getElementById("product4");
    var qty4 = document.getElementById("qty4");
    var price4 = document.getElementById("price4");

    var product5 = document.getElementById("product5");
    var qty5 = document.getElementById("qty5");
    var price5 = document.getElementById("price5");

    var product6 = document.getElementById("product6");
    var qty6 = document.getElementById("qty6");
    var price6 = document.getElementById("price6");

    var carts = document.getElementById("carts");
    var total = document.getElementById("total");
    var cash = document.getElementById("cash");
    var change = document.getElementById("change");
    var purchaseButton = document.getElementById("purchaseNow");

    function addOrder() {
        var cartContent = '';
        var totalAmount = 0;

        function addToCart(qty, price, product) {
            var quantity = parseFloat(qty.value);
            var productPrice = parseFloat(price.textContent);
            if (!isNaN(quantity) && quantity > 0) {
                var subtotal = quantity * productPrice;
                totalAmount += subtotal;
                cartContent += `${quantity} pc/s x ${productPrice} ------ ${product.textContent} ----- Php ${subtotal.toFixed(2)}\n`;
            }
        }

        addToCart(qty1, price1, product1);
        addToCart(qty2, price2, product2);
        addToCart(qty3, price3, product3);
        addToCart(qty4, price4, product4);
        addToCart(qty5, price5, product5);
        addToCart(qty6, price6, product6);

        carts.textContent = cartContent;
        total.value = totalAmount.toFixed(2);
    }

    function calculateChange() {
        var totalAmount = parseFloat(total.value);
        var cashTendered = parseFloat(cash.value);
        if (!isNaN(totalAmount) && !isNaN(cashTendered)) {
            var changeAmount = cashTendered - totalAmount;
            change.value = changeAmount >= 0 ? changeAmount.toFixed(2) : 'Insufficient cash';
        }
    }

    [qty1, qty2, qty3, qty4, qty5, qty6].forEach(function(qtyInput) {
        qtyInput.addEventListener('input', addOrder);
    });

    cash.addEventListener('input', calculateChange);

    purchaseButton.addEventListener('click', function() {
        var changeAmount = parseFloat(change.value);
        if (isNaN(changeAmount) || changeAmount < 0) {
            alert('Insufficient cash. Please enter the correct amount.');
        } else {
            alert('Purchase successful!');
            // Resetting the form
            [qty1, qty2, qty3, qty4, qty5, qty6].forEach(function(qtyInput) {
                qtyInput.value = '';
            });
            carts.textContent = '';
            total.value = '';
            cash.value = '';
            change.value = '';
        }
    });
});


