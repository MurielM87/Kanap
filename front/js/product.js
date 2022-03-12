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

    //ajout du chox de couleurs
    let kanapColors = kanap.colors;
    console.log(kanapColors)

    const colors = document.querySelector("#colors");

    for (i = 0; i < kanapColors.length; i++){
      let itemColor = document.createElement("option");
      colors.appendChild(itemColor);
      itemColor.value = kanap.colors[i];
      itemColor.innerText = kanap.colors[i];
    }    
  });
  //.catch((err) => console.log(`Erreur : ${err}`)); 

//envoyer le produit choisi dans le panier


const addToCartBtn = document.querySelector("#addToCart");
addToCartBtn.addEventListener('click', () => {
  console.log('test')
  
});