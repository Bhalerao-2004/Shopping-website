const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const shopBtn = document.getElementById("shopBtn");
const message = document.getElementById("message");

searchBtn.addEventListener("click",function(){
    const searchText = searchInput.value.trim();
    if(searchText===""){
        message.textContent="Please enter a product";
        return;
    }
    message.textContent=` Searching for: ${searchText} `;
});
shopBtn.addEventListener("click",function(){
    message.textContent="Opening products";
})