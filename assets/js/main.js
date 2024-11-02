function addToCart(e) {
    e.preventDefault();
    const link = this;
    link.innerHTML = 'View Cart <i class="fa-solid fa-check"></i>';
    link.classList.add('view-cart');
}

document.querySelectorAll(".add").forEach(function(button) {
    button.onclick = addToCart;
});
