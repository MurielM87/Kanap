/*
//récupérer les données enregistrées des produits dans le localStorage
let cartData = getLocalStorage();
console.log(cartData);

//si le localStorage est vide
function getLocalStorage() {
  let productCart = localStorage.getItem("myCart");
  console.log(productCart);
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
  .then(function (productCart) {
    console.log(productCart);
    const cartItems = document.getElementById("cart__items"); 

    for (let product in cartData) {
      
      //integrer le HTML de manière dynamique
      const cartDetails = document.createElement("article");
      cartDetails.classList.add("cart__item");
      cartItems.appendChild(cartDetails);
      cartItems.setAttribute("data-id", "{product._id}");
      cartItems.setAttribute("data-color", "{product.colors}");

      const cartItemImg = document.createElement("div");
      cartItemImg.classList.add("cart__item__img");
      cartDetails.appendChild(cartItemImg);
      
      const cartImg = document.createElement("img"); //creation balise image
      cartImg.src = product.imageUrl;
      cartImg.alt = product.altTxt;
      cartItemImg.appendChild(cartImg);

      const cartItemContent = document.createElement("div");
      cartItemContent.classList.add("cart__item__content");
      cartDetails.appendChild(cartItemContent);

      const cartItemDescription = document.createElement("div");
      cartItemDescription.classList.add("cart__item__content__description");
      cartItemContent.appendChild(cartItemDescription);

      const cartTitle = document.createElement("h2");
      cartTitle.innerText = product.name;
      cartItemDescription.appendChild(cartTitle);

      const cartColor = document.createElement("p");
      cartColor.innerText = product.colors;
      cartItemDescription.appendChild(cartColor);

      const cartPrice = document.createElement("p");
      cartPrice.innerText = product.price;
      cartItemDescription.appendChild(cartPrice);

      const cartItemSettings = document.createElement("div");
      cartItemSettings.classList.add("cart__item__content__settings")
      cartItemContent.appendChild(cartItemSettings);

      const cartItemContentQuantity = document.createElement("div");
      cartItemContentQuantity.classList.add("cart_item__content__settings__quantity");
      cartItemSettings.appendChild(cartItemContentQuantity);

      const cartItemQuantity = document.createElement("p");
      cartItemQuantity.innerText = productQuantity;
      cartItemContentQuantity.appendChild(cartItemQuantity);
      //<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    

      const cartItemContentDelete = document.createElement("div");
      cartItemContentDelete.classList.add("cart__item__content__settings__delete");
      cartItemContent.appendChild(cartItemContentDelete);

      const cartItemDelete = document.createElement("p");
      cartItemDelete.classList.add("deleteItem");
      cartItemDelete.innerText = "Supprimer";
    

      
// <div class="cart__price">
  //            <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
    //        </div>
      
    }
  
  })
  //.catch((err) => console.log(`Erreur : ${err}`)); 
*/

//verifier formulaire
let form = document.querySelector(".cart__order__form");


/*
<p id="firstNameErrorMsg"><!-- ci est un message d'erreur --></p>
<p id="lastNameErrorMsg"></p>
<p id="addressErrorMsg"></p>
<p id="cityErrorMsg"></p>
<p id="emailErrorMsg"></p>
*/
