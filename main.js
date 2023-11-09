const menuEmail = document.querySelector(".email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconBurgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".my-order-container");
const inicio = document.querySelector(".inicio");
const flechitaGris = document.querySelector(".flechita");
const productDetail = document.querySelector(".product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

iconBurgerMenu.addEventListener("click", toggleMenuMobile);
menuEmail.addEventListener("click", toggleDesktopMenu);
iconShoppingCart.addEventListener("click", toggleShoppingCart);
flechitaGris.addEventListener("click", salirDelCarrito);
productDetailCloseIcon.addEventListener("click", closeProductDetail);

function toggleDesktopMenu(){
const shoppingCartOpen = !shoppingCart.classList.contains("inactive");

desktopMenu.classList.toggle("inactive");
    if(shoppingCartOpen){
        shoppingCart.classList.add("inactive");
        inicio.classList.remove("inactiveMax");
    };
}
function toggleMenuMobile(){
    const shoppingCartOpen = !shoppingCart.classList.contains("inactive");
    if(shoppingCartOpen){
        shoppingCart.classList.add("inactive");
    }else{
        inicio.classList.toggle("inactiveMax");
    };

    mobileMenu.classList.remove("inactiveMax");
    mobileMenu.classList.remove("inactive");
};
function toggleShoppingCart(){
    const mobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const desktopMenuOpen = !desktopMenu.classList.contains("inactive");
    if(mobileMenuOpen){
        mobileMenu.classList.toggle("inactive");
        inicio.classList.toggle("inactive");
    }
    else if(desktopMenuOpen){
        desktopMenu.classList.add("inactive");
}
    inicio.classList.toggle("inactiveMax");
    inicio.classList.remove("inactive");
    shoppingCart.classList.toggle("inactive");
};
function salirDelCarrito(){
    shoppingCart.classList.toggle("inactive");
    inicio.classList.remove("inactive");
    inicio.classList.remove("inactiveMax");
};
function openProductDetail(){
    productDetail.classList.remove("inactive");
    shoppingCart.classList.add("inactive");
    inicio.classList.add("inactiveMax");

};
function closeProductDetail(){
    productDetail.classList.add("inactive");
    inicio.classList.remove("inactiveMax");
};

const productList = [];
productList.push({
    price: 120,
    name: "Bicicleta",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    price: 10,
    name: "Cassettes",
    img: "https://images.pexels.com/photos/3642350/pexels-photo-3642350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 80,
    name: "Cámara",
    img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 120,
    name: "Bicicleta",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    price: 10,
    name: "Cassettes",
    img: "https://images.pexels.com/photos/3642350/pexels-photo-3642350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 80,
    name: "Cámara",
    img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 120,
    name: "Bicicleta",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    price: 10,
    name: "Cassettes",
    img: "https://images.pexels.com/photos/3642350/pexels-photo-3642350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 80,
    name: "Cámara",
    img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 120,
    name: "Bicicleta",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    price: 10,
    name: "Cassettes",
    img: "https://images.pexels.com/photos/3642350/pexels-photo-3642350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 80,
    name: "Cámara",
    img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 120,
    name: "Bicicleta",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    price: 10,
    name: "Cassettes",
    img: "https://images.pexels.com/photos/3642350/pexels-photo-3642350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 80,
    name: "Cámara",
    img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 120,
    name: "Bicicleta",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    price: 10,
    name: "Cassettes",
    img: "https://images.pexels.com/photos/3642350/pexels-photo-3642350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 80,
    name: "Cámara",
    img: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    productImg.addEventListener("click", openProductDetail);
    /* Este addEventListener ejecuta la función que abre el detalle del producto cada vez que clickamos en una imagen */

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const divForInfo = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText= product.price + " €";

    const productName = document.createElement("p");
    productName.innerText = product.name;

    divForInfo.appendChild(productPrice);
    divForInfo.appendChild(productName);

    const figure = document.createElement("figure");

    const imgFigure = document.createElement("img");
    imgFigure.setAttribute("src", "./Icons/icon_cart.svg");


    figure.appendChild(imgFigure);
    productInfo.append(divForInfo, figure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);