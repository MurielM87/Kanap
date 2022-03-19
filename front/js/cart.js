let params = new URLSearchParams(window.localStorage);
let basketId = params.get("localStorage"); //recuperation de l'id du localStorage
console.log(basketId);

//recuperation de la carte
const cart = getCart();

//recuperation de l'element de la carte
const cartList = document.getElementById("cart__items");
const cartTitle = document.querySelector("h1");
const cartPrice = document.querySelector(".cart__price p");
const cartOrder = document.querySelector(".cart__order");

//variables pour recuperer le prix total et la quantite dans le panier
const totalProductsQuantity = document.getElementById("totalQuantity");
const totalPrice = document.getElementById("totalPrice");

//insertion des produits dans le panier
//for (let product of cart) {
  const productId = product.id;
  const productColor = product.color;
  const productQuantity = product.quantity;
  const productName = product.name;

  
//recuperation des donnees de l'API
fetch("http://localhost:3000/api/products/${productId}")
.then((response) => response.json())
.then((productDetails) => {
  const productArticle = document.createElement("article"); //creation de la balise article
      productArticle.classList.add("cart__item");
      productArticle.setAttribute("data-id", productId);
      productArticle.setAttribute("data-color", productColor);
      cartList.appendChild(productArticle);
 
      const productImgContainer = document.createElement("div"); //creation de la balise div
      productImgContainer.classList.add("cart__item__img");
      productArticle.appendChild(productImgContainer);

      const productImg = document.createElement("img"); //creation de la balise image
      productImg.src = productDetails.imageUrl;
      productImg.alt = productDetails.altTxt;
      productImgContainer.appendChild(productImg);

      const productContent = document.createElement("div"); //creation de la balise div contenu carte
      productContent.classList.add("cart__item__content");
      productArticle.appendChild(productContent);
      
      const productContentDescription = document.createElement("div"); //creation de la balise description
      productContentDescription.classList.add("cart__item__content__description");
      productContent.appendChild(productContentDescription);

      const productName = document.createElement("h2"); //creation de la balise h2 pour le nom
      productName.textContent = productDetails.name;
      productContentDescription.appendChild(productName);

      const productColorPicked = document.createElement("p"); //creation de la balise p
      productColorPicked.textContent = productColor;
      productContentDescription.appendChild(productColorPicked);

      const productPrice = document.createElement("p");//creation de la balise p pour le prix
      productPrice.textContent = `${productDetails.price} €`;
      productContentDescription.appendChild(productPrice);

      const productContentSettings = document.createElement("div");//creation de la balise div
      productContentSettings.classList.add("cart__item__content__settings");
      productContent.appendChild(productContentSettings);

      const productQuantitySettings = document.createElement("div");//creation de la balise div pour la quantite
      productQuantitySettings.classList.add("cart__item__content__settings__quantity");
      productContentSettings.appendChild(productQuantitySettings);

      const productQuantityPickedLabel = document.createElement("p");//creation de la balise p pour la quantite
      productQuantityPickedLabel.textContent = "Quantité : ";
      productQuantitySettings.appendChild(productQuantityPickedLabel);
      //creation balise produit quantite
      let productQuantityPicked = document.createElement("input");
      productQuantityPicked.setAttribute("type", "number");
      productQuantityPicked.setAttribute("name", "itemQuantity");
      productQuantityPicked.setAttribute("min", 1);
      productQuantityPicked.setAttribute("max", 100);
      productQuantityPicked.setAttribute("value", productQuantity);
      productQuantityPicked.classList.add("itemQuantity");
      productQuantitySettings.appendChild(productQuantityPicked);

      //creation balise suppression produit
      let productDelete = document.createElement("div");
      productDelete.classList.add("cart__item__content__settings__delete");
      productContentSettings.appendChild(productDelete);

      //creation balise bouton suppression
      let productDeleteButton = document.createElement("p");
      productDeleteButton.classList.add("deleteItem");
      productDeleteButton.textContent = "Supprimer";
      productDelete.appendChild(productDeleteButton);

      productDeleteButton.addEventListener("click", function () {
        removeFromCart(product);
        //rechargement de la page
        document.location.reload();
      });

      
})
.catch((err) => console.log(`Erreur : ${err}`)); 

