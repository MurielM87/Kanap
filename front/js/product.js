//appel de l'API selon le produit selectionne
let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); //recuperation de l'id du produit
console.log(productId);

fetch(`http://localhost:3000/api/products/${productId}`)
  .then(function (res) {
    return res.json();
  })
  .then(function (kanap) {
    console.log(kanap);

    const itemCart = document.querySelector(".item__img");

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

    //ajout du choix de couleurs
    const kanapColors = kanap.colors;
    console.log(kanapColors);

    for (i = 0; i < kanapColors.length; i++) {
      const itemColor = document.createElement("option");
      colors.appendChild(itemColor);
      itemColor.value = kanap.colors[i];
      itemColor.innerText = kanap.colors[i];
    }
  })
  .catch((err) => console.log(`Erreur : ${err}`));

//////envoyer le produit choisi dans le panier//////
fetch(`http://localhost:3000/api/products/${productId}`)
  .then(function (res) {
    return res.json();
  })
  .then(function (kanap) {
    const itemColors = kanap.colors;
    const itemQuantity = document.querySelector("#quantity");
    console.log(itemQuantity);

    //selectionner le bouton envoyer au panier
    const addToCartBtn = document.querySelector("#addToCart");
    console.log("ok");
    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();

      //choix couleur de l'utilisateur dans une variable
      for (j = 0; j < itemColors.length; j++) {
        console.log(itemColors);

        if (productId) {
          //s'il y a deja des produits enregistres dans le local storage
          console.log("ok");
          productId.push(itemOptions);
          localStorage.setItems("productKanap", JSON.stringify(productId)); //pour conserver les produits dans le panier //du json au javascript
          //popupConfirmation();
        } else {
          productId = [];
          productId.push(itemOptions); //ajouter dans le addEventListener
          localStorage.setItems("productKanap", JSON.stringify(productId)); //pour conserver les produits dans le panier //du json au javascript
        } //s'il n'y a pas de produit enregistre dans le local storage
      }
    });
  });

//selection de l'id du choix couleur et de la quantite
//const itemColors = document.querySelector("#colors");
//console.log(itemColors);

//recuperation des informations du produit selectionne
/*let itemOptions = {
  name: "${kanap.name}.${kanap._id}",
  option: "${kanap.colors}",
  //quantite: itemQuantity,
  price: "${kanap.price}",
};
console.log(itemOptions);*/

/////////////////////envoyer dans le localStorage

//recuperer les valeurs du formulaire dans le local storage
//voir storage.setItems (mdn docs)

//fonction fenetre popup - optionnel
/*const popupConfirmation = () => {
  if(window.confirm(`${productId.name} option: ${chooseItem} a bien été ajouté au panier
Consulter le panier OK ou revenir à l'accueil ANNULER`)){
    window.location.href = "cart.html";
}else{
  window.location.href = "index.html";
}
};*/
