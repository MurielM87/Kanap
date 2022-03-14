let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); //recuperation de l'id du produit
console.log(productId);

//gestion du panier
class Basket{
  constructor() {
      let basket = localStorage.getItem("basket");
      if (basket == null) {
          this.basket = [];
      }else{
          this.basket = JSON.parse(basket); //transformer chaine de caracteres en objet
      }
  }

  save() {
      localStorage.setItem("basket", JSON.stringify(this.basket)); //transformer objet en chaine de caracteres
  }

  //fonction ajout au panier
  add(product){
      let foundProduct = this.basket.find(p => p.id == product.id); //find pour chercher un element dans un tableau par rapport à une condition
      if (foundProduct != undefined){
          foundProduct.quantity++;
      }else{
          product.quantity = 1;
          this.basket.push(product);
      }
      this.basket.push(product);
      this.save(); //pour enregistrer
  }
  //retirer un produit du panier
  remove(product){
      basket = this.basket.filter(p => p.id != p.quantity);
      this.save();
  }
  //pour changer la quantité
  changeQuantity (product, quantity){
      let foundProduct = this.basket.find(p => p.id == product.id); 
      if (foundProduct != undefined) {
          foundProduct.quantity += quantity;
          if(foundProduct.quantity <= 0){ //pour supprimer quand quantité à 0
              this.remmove(foundProduct); 
          }else{
              this.save();
          }
      }
      this.save();
  }
  //pour calculer la quantite totale
  getNumberProduct(){
      let number = 0 ; 
      for (let product of this.basket){
          number += product.quantity;
      }
      return number;
  }
  //pour calculer le prix total
  getTotalPrice(){
      let total = 0;
      for (let product of this.basket){
          total += product.quantity * product.price;
      }
      return total;
  }
}


/*
cart = JSON.parse(localStorage)

fetch(`http://localhost:3000/api/products/order`)
  .then(function (res) {
  return res.json();
  })
  .then (function(basket){
  console.log(basket)
  })
  //.catch((err) => console.log(`Erreur : ${err}`));



//variables
//let productColor = document.getElementsByClassName("product-color"); //à revoir pour data-color
//let productQuantity = document.getElementById("totalQuantity");
//console.log(productColor);
//console.log(productQuantity);

const articleID = document.createElement("article");
document.getElementById("cart__items").appendChild(articleID);
articleID.classList.add("cart__item");
articleID.data-id = product_Id; //à verifier
articleID.setAttribute("data-color", "{product-color}");

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
*/

//validation formulaire
document.querySelector('form input[type="submit"]').addEventListener("click", (e) => {
  e.preventDefault(); //annule envoi du formulaire
    //customed message  -- setCustomValidity obligatoirement sur un champ
    let input = document.querySelector('.cart__order');
    let valid = input.checkValidity(); 
    if(!valid){
      document.getElementById("firstNameErrorMsg").innerText = "erreur dans la saisie";
      document.getElementById("lastNameErrorMsg").innerText = "erreur dans la saisie";
      document.getElementById("addressErrorMsg").innerText = "erreur dans la saisie de l'adresse";
      document.getElementById("cityErrorMsg").innerText = "erreur dans la saisie de la ville";
      document.getElementById("emailErrorMsg").innerText = "erreur dans la saisie de l'email":
      //message(input);
    }
  });

//pour verifier le formulaire en entier
document.querySelector('form input[type="submit"]').addEventListener("click", (e) => {
  e.preventDefault(); //annule envoi du formulaire
  let fields = document.querySelectorAll('#formaulaire input, #formulaire select, #formulaire textarea'); //pour l'ensemble des champs
  let valid = true ; 
  for (let field of (fields)){ 
      valid &= check(field); //valid = valid && check(field);
      if(!valid){
          break;
      }
  }
  if (valid) {

  }
});
