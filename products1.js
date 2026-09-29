
const product=[
    {
        id: 1,
        name: "Light Blue Asymmetrical Ruched Side Tie Sleeveless Top",
        category : "tops",
        rating: 4.0,
        price: 399,
        image: "tops1.jpg"
    },
      {
        id: 2,
        name: "Tokyo Talkies Casual Flute Sleeve Printed Women White",
        category : "tops",
        rating: 4.2,
        price: 799,
        image: "tops2.jpg"
    },
      {
        id: 3,
        name: "Tokyo Talkies Women Casual Solid Green Top",
        category : "tops",
        rating: 4.5,
        price: 1599,
        image: "tops3.jpg"
    },
      {
        id: 4,
        name: "Tokyo Talkies Casual Solid Women Black Top",
        category : "tops",
        rating: 4.9,
        price: 509,
        image: "tops4.jpg"
    },
      {
        id: 5,
        name: "Modestouze Attires Women's Floral Pattern Rayon Blend Maxi Dress with Sweetheart Neck Half Puff Sleeve Floo",
        category : "dresses",
        rating: 4.9,
        price: 509,
        image: "dresses1.jpg"
    },
      {
        id: 6,
        name: "Aachho Rose Mist Pink Cotton Printed",
        category : "dresses",
        rating: 4.5,
        price: 999,
        image: "dresses2.jpg"
    },
      {
        id: 7,
        name: "Aachho Sky Blue Printed Cotton Dress",
        category : "dresses",
        rating: 4.0,
        price: 711,
        image: "dresses3.jpg"
    },
      {
        id: 8,
        name: "Modestouze Attires Dress for Women Western, Maxi Dresses",
        category : "dresses",
        rating: 3.9,
        price: 1299,
        image: "dresses4.jpg"
    }
]
const productList = document.getElementById("productList");
const categoryName = document.getElementById("categoryName");
const urlParams =  new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const filteredProducts = product.filter(function(product) {
    return product.category === category;
});
categoryName.textContent=category;
filteredProducts.forEach(function(product){
    const card = document.createElement("div");
    card.innerHTML =`
    <img src= "${product.image}" alt = "${product.name}">
    <h2>${product.name}</h2>
    <p>₹${product.price}</p>
    <p>⭐${product.rating}</p>
    <button class="add-cart" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(card);
});
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const productId = Number(button.dataset.id);

        const selectedProduct = product.find(function(product) {
            return product.id === productId;
        });

        alert(selectedProduct.name + " added to cart");
    });
});