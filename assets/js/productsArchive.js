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

function displayProducts(products) {
    const productContainer = document.querySelector(".row");
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = `
        <div class="col-md-3 mb-4">
            <div class="card p-3 h-100">
                <img src="${product.imageURL}" class="card-img-top" alt="${product.name}">
                    <div class="card-body d-flex flex-column gap-1">
                            <h5 class="card-title">${product.name}</h5>
                            <span class="price d-block">$${product.prise}</span>
                            <div class="pt-3"><a href="#" class="add nav-link">Add to card</a></div>
                    </div>
            </div>
        </div>
        `
        productContainer.innerHTML += productCard;

    });
}
displayProducts(products);