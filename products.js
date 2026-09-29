

const product=[
    {
        id: 1,
        name: "SZN Botanical Printed V-Neck Kurti",
        category : "kurtis",
        rating: 4.0,
        price: 399,
        image: "kurtis.jpg"
    },
      {
        id: 2,
        name: "Rain and Rainbow Women Navy Cotton Printed Straight Kurti",
        category : "kurtis",
        rating: 4.2,
        price: 699,
        image: "kurtis1.jpg"
    },
      {
        id: 3,
        name: "Biba Green Printed Kurti",
        category : "kurtis",
        rating: 4.5,
        price: 999,
        image: "kurtis2.jpg"
    },
      {
        id: 4,
        name: "Jaipur Kurti Elegant Maroon Striped",
        category : "kurtis",
        rating: 3.9,
        price: 509,
        image: "kurtis3.jpg"
    },
     {
        id: 5,
        name: "Soch Tussar Printed Saree",
        category : "sarees",
        rating: 4.5,
        price: 1500,
        image: "Saree.jpg"
    },
     {
        id: 6,
        name: "Odette Red Georgette Embellished Saree For Women",
        category : "sarees",
        rating: 4.0,
        price: 2000,
        image: "Saree1.jpg"
    },
     {
        id: 7,
        name: "Koskii Mauve Satin Pearlwork Saree With Matching",
        category : "sarees",
        rating: 3.9,
        price: 1000,
        image: "Saree2.jpg"
    },
     {
        id: 8,
        name: "Libas Leheriya Embroidered Silk Blend Sareeby",
        category : "sarees",
        rating: 4.2,
        price: 1200,
        image: "Saree3.jpg"
    },
      {
        id: 9,
        name: "White Zari Embroidered Viscose Chanderi Jacquard Suit",
        category : "kurta-sets",
        rating: 4.2,
        price: 900,
        image: "kurta3.jpg"
    },
      {
        id: 10,
        name: "Women Blue Ethnic Motifs Printed Pure Cotton Kurta with Palazzos & Dupatta",
        category : "kurta-sets",
        rating: 4.0,
        price: 1200,
        image: "kurta4.jpg"
    },
      {
        id: 11,
        name: "Indo Era Green Embroidered Straight Kurta Trousers With Dupatta Set",
        category : "kurta-sets",
        rating: 4.5,
        price: 2200,
        image: "kurta2.jpg"
    },
      {
        id: 12,
        name: "Aachho Raksika Green Bandhani Silk Suit Set",
        category : "kurta-sets",
        rating: 3.8,
        price: 1000,
        image: "kurta1.jpg"
    },
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