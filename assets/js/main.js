function addToCart(e) {
    e.preventDefault();
    const link = this;
    link.innerHTML = 'View Cart <i class="fa-solid fa-check"></i>';
    link.classList.add('view-cart');
}

document.querySelectorAll(".add").forEach(function(button) {
    button.onclick = addToCart;
});

let firstNum = 0;

function countPlus() {
    if (firstNum <= 150) {
        document.querySelector("#plus").textContent = firstNum;
        firstNum++;
    } else {
        clearInterval(interval);
    }
}
let count = 0;

function countMillion() {
    if (count <= 10) {
        document.querySelector("#million").textContent = count;
        count++;
    } else {
        clearInterval(interval);
    }
}

let percentNum = 0;

function countPercent() {
    if (percentNum <= 100) {
        document.querySelector("#percent").textContent = percentNum;
        percentNum++;
    } else {
        clearInterval(interval);
    }
}
let intervalPlus = setInterval(countPlus, 50);
let intervalMillion = setInterval(countMillion, 300);
let intervalPercent = setInterval(countPercent, 50);
