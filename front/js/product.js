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
    const itemCart = document.getElementsByClassName("item__img");
    
    const itemImg = document.createElement("img");
    itemCart.appendChild(itemImg);
    itemImg.src = kanap.imageUrl;
    itemImg.alt = kanap.altTxt;

    const itemName = document.getElementById("title");
    itemName.textInner = kanap.name;

    const itemPrice = document.getElementById("price");
    itemPrice.textInner = kanap.price;

    const itemDescription = document.getElementById("description");
    itemDescription.textInner = kanap.description;
    
    const itemColor = document.querySelector("option value");
    itemColor.value = kanap.colors;

  });
//.catch((err) => console.log(`Erreur : ${err}`));

//envoyer au panier
