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
    const products = [
        { id: 'product1', price: 28503 },
        { id: 'product2', price: 500069 },
        { id: 'product3', price: 60066 },
        { id: 'product4', price: 69999 },
        { id: 'product5', price: 59999 },
        { id: 'product6', price: 69569 }
    ];

    const cartTextArea = document.getElementById('carts');
    const totalInput = document.getElementById('total');
    const cashInput = document.getElementById('cash');
    const changeInput = document.getElementById('change');
    const purchaseButton = document.getElementById('purchaseNow');

    function calculateTotal() {
        let total = 0;
        let cartContent = '';
        products.forEach((product, index) => {
            const qty = document.getElementById(`qty${index + 1}`).value;
            if (qty > 0) {
                const subtotal = qty * product.price;
                total += subtotal;
                cartContent += `${product.id}: ${qty} x ${product.price} = ${subtotal}\n`;
            }
        });
        cartTextArea.value = cartContent;
        totalInput.value = total;
    }

    function calculateChange() {
        const total = parseFloat(totalInput.value);
        const cash = parseFloat(cashInput.value);
        if (!isNaN(total) && !isNaN(cash)) {
            const change = cash - total;
            changeInput.value = change >= 0 ? change : 'Insufficient cash';
        }
    }

    products.forEach((product, index) => {
        const qtyInput = document.getElementById(`qty${index + 1}`);
        qtyInput.addEventListener('input', calculateTotal);
    });

    cashInput.addEventListener('input', calculateChange);

    purchaseButton.addEventListener('click', function() {
        const change = parseFloat(changeInput.value);
        if (isNaN(change) || change < 0) {
            alert('Insufficient cash. Please enter the correct amount.');
        } else {
            alert('Purchase successful!');
            products.forEach((product, index) => {
                document.getElementById(`qty${index + 1}`).value = '';
            });
            cartTextArea.value = '';
            totalInput.value = '';
            cashInput.value = '';
            changeInput.value = '';
        }
    });
});

