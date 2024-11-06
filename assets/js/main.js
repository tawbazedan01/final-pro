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
    }
}
let count = 0;

function countMillion() {
    if (count <= 10) {
        document.querySelector("#million").textContent = count;
        count++;
    }
}

let percentNum = 0;

function countPercent() {
    if (percentNum <= 100) {
        document.querySelector("#percent").textContent = percentNum;
        percentNum++;
    }
}
let intervalPlus = setInterval(countPlus, 50);
let intervalMillion = setInterval(countMillion, 300);
let intervalPercent = setInterval(countPercent, 50);

const countDown=()=>{
  const now = new Date().getTime();
  const hours = Math.floor((now%86400000)/(3600000));
  const minutes = Math.floor((now%(1000*60*60))/(60000));
  const seconds = Math.floor((now%(1000*60))/(1000));
  document.querySelector(".hours").textContent=hours;
  document.querySelector(".minutes").textContent=minutes;
  document.querySelector(".seconds").textContent=seconds;
}
setInterval(()=>{
  countDown();
},1000)
