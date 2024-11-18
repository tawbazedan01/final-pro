document.addEventListener("DOMContentLoaded", () => {
    const quantitySelect = document.querySelector('.quantity select');
    const subtotalElement = document.querySelector('.subtotal span');
    const totalElement = document.querySelector('.total span');
    const removeIcon = document.querySelector('.fa-x');
    const couponButton = document.querySelector('.coupon button');

    quantitySelect.addEventListener('change', (e) => {
        const price = 30;
        const quantity = parseInt(e.target.value);
        const subtotal = price * quantity;
        subtotalElement.textContent = `$${subtotal}`;
        totalElement.textContent = `$${subtotal}`;
    });


    removeIcon.addEventListener('click', () => {
        alert('Product removed from cart');

    });

    removeIcon.addEventListener('click', () => {
        alert('Product removed from cart');

        const productImage = document.querySelector('.img img');


        if (productImage) {

            productImage.remove();


            const newImage = document.createElement('img');
            newImage.src = './assets/img/productsPage/product2.png';
            newImage.alt = 'New Product';
            newImage.width = 60;

            const imgContainer = document.querySelector('.img');
            if (imgContainer) {
                imgContainer.appendChild(newImage);
            }

            const productName = document.querySelector('.product span');
            if (productName) {
                productName.remove();

                const newProduct = document.createElement('span');
                newProduct.textContent = "Firming Neck Cream";
                const newProductName = document.querySelector('.product');
                if (newProductName) {
                    newProductName.appendChild(newProduct);
                }

            }

        }
    });


   
    couponButton.addEventListener('click', () => {
        const couponInput = document.querySelector('.coupon input').value;
        if (couponInput === "DISCOUNT10") {
            alert('Coupon applied! 10% discount added.');
            const total = parseFloat(totalElement.textContent.slice(1));
            totalElement.textContent = `$${(total * 0.9).toFixed(2)}`;
        } else {
            alert('Invalid coupon code.');
        }
    });
});
