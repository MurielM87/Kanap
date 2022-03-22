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


//verifier formulaire
let form = document.querySelector(".cart__order__form");
console.log(form);

//ecouter la modification du prenom
form.firstName.addEventListener('change', function (){
  validFirstName(this)
})
console.log(firstName);

//ecouter la modification du nom
form.lastName.addEventListener('change', function (){
  validLastName(this)
})

//ecouter la modification de l'adresse
form.address.addEventListener('change', function (){
  validAddress(this)
})

//ecouter la modification de la ville
form.city.addEventListener('change', function (){
  validCity(this)
})

//ecouter la modification de l'email
form.email.addEventListener('change', function (){
  validEmail(this)
});

//validation du prénom
function validFirstName(inputFirstName) {
  //création de la reg exp pour valider prénom
  const firstNameRegExp = new RegExp("^[a-zA-ZÀ-ÿ ,.'-]{2,}$", "g");

  const testFirstName = firstNameRegExp.test(inputFirstName.value);
  const firstNameErrorMsg = inputFirstName.nextElementSibling;

  if (testFirstName) {
    firstNameErrorMsg.textContent = " ";
    return true;
  } else {
    firstNameErrorMsg.textContent = "Minimum 2 caractères, lettres uniquement.";
    return false;
  }
}

//validation du nom
function validLastName(inputLastName) {
  //création de la reg exp pour valider nom
  const lastNameRegExp = new RegExp("^[a-zA-ZÀ-ÿ ,.'-]{2,}$", "g");

  const testLastName = lastNameRegExp.test(inputLastName.value);
  const lastNameErrorMsg = inputLastName.nextElementSibling;

  if (testLastName) {
    lastNameErrorMsg.textContent = " ";
    return true;
  } else {
    lastNameErrorMsg.textContent = "Minimum 2 caractères, lettres uniquement.";
    return false;
  }
}

//validation de l'adresse postale
function validAddress(inputAddress) {
  //création de la reg exp pour valider l'adresse
  const addressRegExp = new RegExp("^[a-zA-ZÀ-ÿ0-9 ,.'-]{2,}$", "g");

  const testAddress = addressRegExp.test(inputAddress.value);
  const addressErrorMsg = inputAddress.nextElementSibling;

  if (testAddress) {
    addressErrorMsg.textContent = " ";
    return true;
  } else {
    addressErrorMsg.textContent =
      "Minimum 2 caractères, chiffres ou lettres uniquement.";
    return false;
  }
}

//validation de la ville
function validCity(inputCity) {
  //création de la reg exp pour valider la ville
  const cityRegExp = new RegExp("^[a-zA-ZÀ-ÿ ,.'-]{2,}$", "g");

  const testCity = cityRegExp.test(inputCity.value);
  const cityErrorMsg = inputCity.nextElementSibling;

  if (testCity) {
    cityErrorMsg.textContent = " ";
    return true;
  } else {
    cityErrorMsg.textContent = "Minimum 2 caractères, lettres uniquement.";
    return false;
  }
}

//validation de l'email
function validEmail(inputEmail) {
  //création de la reg exp pour valider email
  const emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  const testEmail = emailRegExp.test(inputEmail.value);
  const emailErrorMsg = inputEmail.nextElementSibling;

  if (testEmail) {
    emailErrorMsg.textContent = " ";
    return true;
  } else {
    emailErrorMsg.textContent = "Merci de respecter le format email. ";
    return false;
  }
}
