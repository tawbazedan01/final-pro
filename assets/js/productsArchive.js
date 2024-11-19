
const products = [
    { name: "Brightening Eye Serum", prise: 30, imageURL: "./assets/img/productsPage/product5.png", dateAdded: "2024-11-05" },
    { name: "Clarifying Face Wash", prise: 30, imageURL: "./assets/img/productsPage/product3.png", dateAdded: "2024-11-03" },
    { name: "Cosmetic Skincare Cream", prise: 30, imageURL: "./assets/img/productsPage/product9.png", dateAdded: "2024-11-09" },
    { name: "Firming Neck Cream", prise: 30, imageURL: "./assets/img/productsPage/product2.png", dateAdded: "2024-11-02" },
    { name: "Hand Cream Diamond", prise: 30, imageURL: "./assets/img/productsPage/product7.png", dateAdded: "2024-11-07" },
    { name: "Hydrating Lip Balm", prise: 30, imageURL: "./assets/img/productsPage/product4.png", dateAdded: "2024-11-04" },
    { name: "Moisturizer SPF 30", prise: 30, imageURL: "./assets/img/productsPage/product1.png", dateAdded: "2024-11-01" },
    { name: "Purp Perfume", prise: 30, imageURL: "./assets/img/productsPage/product6.png", dateAdded: "2024-11-06" },
    { name: "Radiant Glow Serum", prise: 30, imageURL: "./assets/img/productsPage/product10.png", dateAdded: "2024-11-10" },
    { name: "Skincare Cream Tube", prise: 30, imageURL: "./assets/img/productsPage/product8.png", dateAdded: "2024-11-08" }
];
const originalOrder = [...products];
let currentProductIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    displayProductsInSwiper(products);
    addProductEventListeners();

    const swiper = new Swiper('.mySwiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document.querySelector("#productSort").addEventListener("change", function (e) {
        const value = e.target.value;
        if (value === "select") {
            products.length = 0;
            products.push(...originalOrder);
        } else if (value === "oldest") {
            products.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        } else if (value === "newest") {
            products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        }
        displayProductsInSwiper(products);
        addProductEventListeners();
    });
});

function displayProductsInSwiper(products) {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = '';
    for (let i = 0; i < products.length; i += 4) {
        const chunk = products.slice(i, i + 4);
        const slideContent = chunk.map(product => `
            <div class="col-12 col-md-6 col-lg-3 mb-4">
                <div class="card p-3 h-100">
                    <img src="${product.imageURL}" class="card-img-top" alt="${product.name}">
                    <div class="card-body d-flex flex-column gap-1">
                        <h5 class="card-title">${product.name}</h5>
                        <span class="price d-block">$${product.prise}</span>
                        <div class="pt-3"><a href="#" class="add nav-link">Add to card</a></div>
                    </div>
                </div>
            </div>
        `).join("");
        swiperWrapper.innerHTML += `<div class="swiper-slide"><div class="row">${slideContent}</div></div>`;
    }
}

function openProductModal(index) {
    currentProductIndex = index;
    updateModalContent(currentProductIndex);

    const modalElement = document.getElementById("productModal");
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);

    if (!modalElement.classList.contains("show")) {
        modal.show();
    }
}

function updateModalContent(index) {
    const product = products[index];
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
        <img src="${product.imageURL}" alt="${product.name}" class="img-fluid mb-3">
        <h3>${product.name}</h3>
        <p class="text-muted">Price: $${product.prise}</p>
        <p>Date Added: ${product.dateAdded}</p>
        <div class=""><a href="./details.html" class="link">See more product details</a></div>
    `;
}

function showNextProduct() {
    currentProductIndex = (currentProductIndex + 1) % products.length;
    openProductModal(currentProductIndex);
}

function showPreviousProduct() {
    currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
    openProductModal(currentProductIndex);
}

function addProductEventListeners() {
    document.querySelectorAll(".swiper-slide .card").forEach((card, index) => {
        card.addEventListener("click", () => openProductModal(index));
    });

    document.querySelector(".next-product").addEventListener("click", showNextProduct);
    document.querySelector(".prev-product").addEventListener("click", showPreviousProduct);
}
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
    const modalInstance = bootstrap.Modal.getInstance(document.getElementById("productModal"));
    modalInstance.hide();
});
