/**
 * appel de l'API selon le produit selectionne
 */
let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); //recuperation de l'id du produit
console.log(productId);

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

  //////////////////////////////////////////////////
  //ajout produit selectionne + quantite dans le panier
  const addToCartBtn = document.querySelector("#addToCart");
  console.log("ok");

  //variables pour nom quantite et couleur
  let cartItem = [
  cartName = document.getElementById("title").textContent, 
  cartColor = document.querySelector("option").value,
  cartQuantity = document.getElementById("quantity").value,
  cartPrice = document.getElementById("price").value,
  ];

    //selectionner le bouton envoyer au panier
      addToCartBtn.addEventListener("click", () => {
        
      //choix couleur de l'utilisateur dans une variable
        for (j = 0; j < cartColor.length; j++) {
          console.log(cartColor);

          if (cartItem) {
            //s'il y a deja des produits enregistres dans le local storage
            cartItem.push(cartItem);
            localStorage.setItems("productKanap", JSON.stringify(cartItem)); //pour conserver les produits dans le panier //du json au javascript
          } else {
            cartItem = [];
            cartItem.push(cartItem); //ajouter dans addEventListener
            localStorage.setItems("productKanap", JSON.stringify(cartItem)); //pour conserver les produits dans le panier //du json au javascript
          } //s'il n'y a pas de produit enregistre dans le local storage
        }
      });
      console.log(cartItem);

    /*  for (let i = 0; i < localStorage.length; i++) {
        let productId = localStorage.productId(i);
       
        console.log(productId, localStorage.getItem(productId))    
      }; */
      
      