let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); //recuperation de l'id du produit
console.log(productId);

fetch(`http://localhost:3000/api/products/${productId}`)
  .then(function (res) {
  return res.json();
  })
  .then (function(basket){
  console.log(basket)
  })
  .catch((err) => console.log(`Erreur : ${err}`));



//variables
//let productColor = document.getElementsByClassName("product-color"); //à revoir pour data-color
//let productQuantity = document.getElementById("totalQuantity");
//console.log(productColor);
//console.log(productQuantity);

//1ere methode d'integration dynamique du HTML
const articleID = document.createElement("article");
document.getElementById("cart__items").appendChild(articleID);
articleID.classList.add("cart__item");
articleID.setAttribute("data-id", "{product-ID}"); //à verifier
articleID.setAttribute("data-color", "{product-color}");

const articleItem = document.createElement("div");
articleID.appendChild(articleItem);
articleItem.classList.add("cart__item__img");

const articleImg = document.createElement("img");
articleItem.appendChild(articleImg);
//articleImg.src = "${productList.imageUrl}";
articleImg.alt = "Photographie d'un canapé";

const articleContent = document.createElement("div");
articleID.appendChild(articleContent);
articleContent.classList.add("cart__item__content");

const articleDescription = document.createElement("div");
articleContent.appendChild(articleDescription);
articleDescription.classList.add("cart__item__content__description");

const articleName = document.createElement("h2");
articleDescription.appendChild(articleName);
articleName.innerText = "Nom du produit"; //à compléter
const articleColor = document.createElement("p");
articleDescription.appendChild(articleColor);
articleColor.innerText = "Vert"; //à compléter
const articlePrice = document.createElement("p");
articleDescription.appendChild(articlePrice);
articlePrice.innerText = "42,00 €"; //à compléter

const articleSettings = document.createElement("div");
articleContent.appendChild(articleSettings);
articleSettings.classList.add("cart__item__content__settings");

const articleQuantity = document.createElement("div");
articleSettings.appendChild(articleQuantity);
articleQuantity.classList.add("cart__item__content__settings__quantity");

const articleNumber = document.createElement("p");
articleNumber.innerText = "Qté : "; //à compléter

const articleDelete = document.createElement("div");
articleSettings.appendChild(articleDelete);
articleDelete.classList.add("cart__item__content__settings__delete");

const articleDeleteItems = document.createElement("p");
articleDelete.appendChild(articleDeleteItems);
articleDeleteItems.classList.add('deleteItem');
articleDeleteItems.innerText = "Supprimer";
