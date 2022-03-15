/**
 * appel de l'API selon le produit selectionne
 */
let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); //recuperation de l'id du produit
console.log(productId);

//ajout produit selectionne + quantite dans le panier
const addToCartBtn = document.querySelector("#addToCart");

/**
 * appel API selon ID produit
 */
fetch(`http://localhost:3000/api/products/${productId}`)
  .then(function (res) {
    return res.json();
  })
  .then(function (kanap) {
    console.log(kanap);

    const itemCart = document.querySelector(".item__img");

    //creation balise image
    const itemImg = document.createElement("img");
    itemCart.appendChild(itemImg);
    itemImg.src = kanap.imageUrl;
    itemImg.alt = kanap.altTxt;

    //ajout titre h1
    document.querySelector("h1").innerText = kanap.name;

    //ajout prix
    document.querySelector("#price").innerText = kanap.price;

    //ajout description
    document.querySelector("#description").innerText = kanap.description;

    //ajout couleurs
    for (const color of kanap.colors) {
      const itemColor = document.createElement("option");
      colors.appendChild(itemColor);
      itemColor.value = color;
      itemColor.innerText = color;
    }
  })
  .catch((err) => console.log(`Erreur : ${err}`));



//selectionner le bouton envoyer vers le panier
addToCartBtn.addEventListener("click", () => {
  
  let basket = getBasket();


  //variable pour nom quantite et couleur
  let product = {
    id : productId,
    name : document.getElementById("title").textContent,
    color : document.getElementById("colors").value,
    quantity : Number(document.getElementById("quantity").value),
  };

  let productFound = basket.find(p => p.id == productId); //find pour chercher un element dans un tableau par rapport à une condition
  if(productFound != undefined){
    //productFound.quantity++; //ajout à la quantite
    product.quantity = product.quantity + productFound.quantity;
  }

  //ajout produit dans local storage
  basket.push(product);
  localStorage.setItem("basket", JSON.stringify(basket));

  

});

function getBasket () {
  let basket = localStorage.getItem("basket"); //transformer chaine de caracteres en objet
  if(basket == null){ //si panier vide
    return [];
  }else{
    return JSON.parse(basket);
  }
}
/*
function addBasket(cartItem){
  let basket = getBasket();
  let foundCart = basket.find(p => p.id == product.name); //find pour chercher un element dans un tableau par rapport à une condition
  if(foundCart != undefined){
    foundCart.quantity++; //ajout à la quantite
  }else{
    foundCart.quantity = 1; //creation de la carte produit
    basket.push(cartItem);
  }
  
  saveBasket(basket);
}
//supprimer produit du panier
function removeBasket(cartItem){
  let basket = getBasket();
  basket = basket.filter(p = p.id != cartItem.cartName);
  saveBasket(basket);
}

//changement quantite
function changeQuantity(cartItem, cartQuantity){
  let basket = getBasket();
  let foundCart = basket.find(p => p.id == cartItem.cartName);
  if (foundCart != undefined){
    foundCart.quantity += quantity;
    if(foundCart.quantity <= 0){
      removeBasket(cartItem);
    }else{
      saveBasket(basket);
    }
  }
}*/