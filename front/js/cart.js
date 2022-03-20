//récupérer les données enregistrées des produits dans le localStorage
let CartData = getCartDataFromStorage();
console.log(CartData);

//si le localStorage est vide
function getCartDataFromStorage() {
  let productCart = localStorage.getItem("myCart");
  if (productCart == null) {
    return [];
  } else {
    //transformer les données du LocalStorage en javascript
    return JSON.parse(productCart);
  }
}


//appel de l'API

fetch(`http://localhost:3000/api/products/`)
  .then(function (res) {
    return res.json();
  })
  .then(function (cartData) {
    console.log(CartData);
    const cartItems = document.getElementById("cart__items"); 

    for (product of cartData) {
      console.log (product);

      //integrer le HTML de manière dynamique
      const cartDetails = document.createElement("article");
      cartDetails.classList.add("cart__item");
      cartItems.appendChild(cartDetails);
      cartItems.setAttribute("data-id", "{product-ID}");
      cartItems.setAttribute("data-color", "{product.color}");

      const cartItemImg = document.createElement("div");
      cartItemImg.classList.add(cart__item_img);
      cartDetails.appendChild(cartItemImg);
      
      const cartImg = document.createElement("img"); //creation balise image
      cartImg.src = basket.image;
      cartImg.alt = "photographie d'un canapé";
      cartItemImg.appendChild(cartImg);

      const cartItemContent = document.createElement("div");
      cartItemContent.classList.add("cart__item__content");
      cartDetails.appendChild(cartItemContent);

      const cartItemDescription = document.createElement("div");
      cartItemDescription.classList.add("cart__item__content__description");
      cartItemContent.appendChild(cartItemDescription);

      const cartTitle = document.createElement("h2");
      cartTitle.innerText = "nom du produit";
      cartItemDescription.appendChild(cartTitle);

      const cartColor = document.createElement("p");
      cartColor.innerText = "vert";
      cartItemDescription.appendChild(cartColor);

      const cartPrice = document.createElement("p");
      cartPrice.innerText = "42,00 €";
      cartItemDescription.appendChild(cartPrice);

      const cartItemSettings = document.createElement("div");
      cartItemSettings.classList.add("cart__item__content__settings")
      cartItemContent.appendChild(cartItemSettings);

      const cartItemContentQuantity = document.createElement("div");
      cartItemContentQuantity.classList.add("cart_item__content__settings__quantity");
      cartItemSettings.appendChild(cartItemContentQuantity);

      const cartItemQuantity = document.createElement("p");
      cartItemQuantity.innerText = "Qté";
      cartItemContentQuantity.appendChild(cartItemQuantity);
      //<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    

      const cartItemContentDelete = document.createElement("div");
      cartItemContentDelete.classList.add("cart__item__content__settings__delete");
      cartItemContent.appendChild(cartItemContentDelete);

      const cartItemDelete = document.createElement("p");
      cartItemDelete.classList.add("deleteItem");
      cartItemDelete.innerText = "Supprimer";

    }

  })
  .catch((err) => console.log(`Erreur : ${err}`)); 
