const cardArticle = document.getElementById("cart__items");

//intégration dynamique du HTML
const articleID = document.createElement("article");
document.getElementById("items").appendChild(articleID);
articleID.setAttribute("class", "cart__item"); 
articleID.setAttribute("date-id", "{product-ID}"); //à verifier
articleID.setAttribute("data-color", "{product-color}")

const articleItem = document.createElement('div');
articleItem.appendChild(articleID);
articleItem.setAttribute("cart__item__img");

const articleImg = document.createElement('img');
articleImg.appendChild(articleItem);
articleImg.setAttribute("src", "../images/product01.jpg");
articleImg.setAttribute("alt", "Photographie d'un canapé");

const articleContent = document.createElement("div");
articleContent.appendChild(articleID);
articleContent.setAttribute("class", "cart__item__content");

const articleDescription = document.createElement("div");
articleDescription.appendChild(articleContent);
articleDescription.setAttribute("class", "cart__item__content__description");

const articleName = document.createElement("h2")
articleName.appendChild(articleDescription);
articleName.textContent("Nom du produit"); //à compléter
const articleColor = document.createElement("p");
articleColor.appendChild(articleDescription);
articleColor.textContent("Vert"); //à compléter
const articlePrice = document.createElement("p");
articlePrice.appendChild(articleDescription);
articlePrice.textContent("42,00 €") //à compléter

const articleSettings = document.createElement("div");
articleSettings.appendChild(articleContent);
articleSettings.setAttribute("class", "cart__item__content__settings");

const articleQuantity = document.createElement("div");
articleQuantity.appendChild(articleSettings);
articleQuantity.setAttribute("class", "cart__item__content__settings__quantity");

const articleNumber = document.createElement("p");
articleNumber.textContent("Qté : ") //à compléter

const articleDelete = document.createElement("div");
articleDelete.appendChild(articleSettings);
articleDelete.setAttribute("class", "cart__item__content__settings__delete");

const articleDeleteItems = document.createElement("p");
articleDeleteItems.appendChild(articleDelete);
articleDeleteItems.setAttribute("class", "deleteItem");
articleDeleteItems.textContent("Supprimer")

