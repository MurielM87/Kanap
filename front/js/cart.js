let params = new URLSearchParams(window.localStorage);
let basketId = params.get("localStorage"); //recuperation de l'id du localStorage
console.log(basketId);

/*
//variables
//let productColor = document.getElementsByClassName("product-color"); //à revoir pour data-color
//let productQuantity = document.getElementById("totalQuantity");
//console.log(productColor);
//console.log(productQuantity);


//fetch
fetch(`http://localhost:3000/api/products/`)
  .then(function (res) {
  return res.json();
  })
  .then (function(basket){
  console.log(basket)

  const articleID = document.createElement("article");
  document.getElementById("cart__items").appendChild(articleID);
  articleID.classList.add("cart__item");
  //articleID.data-id = product_Id; //à verifier
  //articleID.data-color = product-color;

  const articleItem = document.createElement("div");
  articleID.appendChild(articleItem);
  articleItem.classList.add("cart__item__img");
  
  const articleImg = document.createElement("img");
  articleItem.appendChild(articleImg);
  articleImg.src = productList.imageUrl;
  articleImg.alt = productList.AltTxt;

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

  })
  //.catch((err) => console.log(`Erreur : ${err}`));


//gestion du panier

  //pour calculer la quantite totale
  function getNumberProduct(){
      let number = 0 ; 
      for (let cartItem of basket){
          number += cartItem.quantity;
      }
      return number;
  }
  //pour calculer le prix total
  function getTotalPrice(){
      let total = 0;
      for (let CartItem of basket){
          total += cartItem.quantity * cartItem.price;
      }
      return total;
  };


//validation formulaire

document.querySelector('form input[type="submit"]').addEventListener("submit",(e) => {
    e.preventDefault(); //annuler envoi formulaire
    let fields = document.querySelector(".cart_order input").checkValidity(); //verifier si champ valide et afficher message si pas valide
    let valid = true;
    for (let field of fields){
        valid &= check(field);
        if(!valid){
            break;
        }
    }
    if (valid){
        console.log("ok");
    }
});

function check(input){
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
        input.setCustomValidity("ce champ est obligatoire");
    }
    if (input.validity.tooShort) {
        input.setCustomValidity("ce champ doit comporter au moins 3 caractères")
    }
    return input.reportValidity();
}*/
