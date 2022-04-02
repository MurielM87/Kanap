const cartItems = document.getElementById("cart__items");
const mytotalQuantity = document.getElementById("totalQuantity");
const mytotalPrice = document.getElementById("totalPrice");

//récupérer les données enregistrées des produits dans le localStorage
let cartData = getLocalStorage();
console.log(cartData);

displayCart(cartData);
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

function displayCart(basket) {
  cartItems.innerHTML = "";
  let totalQuantity = 0;
  let totalPrice = 0;
  for (let p of basket) {
    //appel API selon ID produit
    fetch(`http://localhost:3000/api/products/${p.id}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (product) {
        let color = p.color;
        let quantity = p.quantity;

        //integrer le HTML de manière dynamique
        const cartProduct = document.createElement("article");
        cartProduct.classList.add("cart__item");
        cartProduct.setAttribute("data-id", p.id);
        cartProduct.setAttribute("data-color", color);

        const cartItemImg = document.createElement("div");
        cartItemImg.classList.add("cart__item__img");
        cartProduct.appendChild(cartItemImg);

        const cartImg = document.createElement("img"); //creation balise image
        cartImg.src = product.imageUrl;
        cartImg.alt = product.altTxt;
        cartItemImg.appendChild(cartImg);

        const cartItemContent = document.createElement("div");
        cartItemContent.classList.add("cart__item__content");
        cartProduct.appendChild(cartItemContent);

        const cartItemDescription = document.createElement("div");
        cartItemDescription.classList.add("cart__item__content__description");
        cartItemContent.appendChild(cartItemDescription);

        const cartTitle = document.createElement("h2");
        cartTitle.innerText = product.name;
        cartItemDescription.appendChild(cartTitle);

        //creation de la balise color
        const cartColor = document.createElement("p");
        cartColor.innerText = p.color;
        cartItemDescription.appendChild(cartColor);

        //creation de la balise prix
        const cartPrice = document.createElement("p");
        cartPrice.innerText = `prix : ${product.price}€`;
        cartItemDescription.appendChild(cartPrice);

        const cartItemSettings = document.createElement("div");
        cartItemSettings.classList.add("cart__item__content__settings");
        cartItemContent.appendChild(cartItemSettings);

        const cartItemContentQuantity = document.createElement("div");
        cartItemContentQuantity.classList.add(
          "cart_item__content__settings__quantity"
        );
        cartItemSettings.appendChild(cartItemContentQuantity);

        const cartItemQuantity = document.createElement("p");
        cartItemContentQuantity.appendChild(cartItemQuantity);
        cartItemContentQuantity.innerText = "Qté";

        const cartQuantityProduct = document.createElement("input");
        cartItemContentQuantity.appendChild(cartQuantityProduct);
        cartQuantityProduct.setAttribute("type", "number");
        cartQuantityProduct.classList.add("itemQuantity");
        cartQuantityProduct.setAttribute("name", "itemQuantity");
        cartQuantityProduct.setAttribute("min", 1);
        cartQuantityProduct.setAttribute("max", 100);
        cartQuantityProduct.setAttribute("value", quantity);
        cartQuantityProduct.addEventListener("change", (e) => {
          let id = p.id;
          let color = p.color;
          //utilisation de l'objet event pour recuperer la quantite
          let newQuantity = Number(e.target.value);
          let cartData = getLocalStorage();
          for (let kanap of cartData) {
            if (kanap.id == id && kanap.color == color) {
              kanap.quantity = newQuantity;
              break;
            }
          }
          //enregistrer dans le localStorage
          localStorage.setItem("myCart", JSON.stringify(cartData));
          displayCart(cartData);
        });

        const cartItemContentDelete = document.createElement("div");
        cartItemContentDelete.classList.add(
          "cart__item__content__settings__delete"
        );
        cartItemContent.appendChild(cartItemContentDelete);

        const cartItemDelete = document.createElement("p");
        cartItemContentDelete.appendChild(cartItemDelete);
        cartItemDelete.classList.add("deleteItem");
        cartItemDelete.innerText = "Supprimer";
        cartItemDelete.addEventListener("click", () => {
          //supprimer le produit du panier
          const deleteCartData = cartData.filter(
            (element) => element.id !== p.id || element.color !== p.color
          );
          //enregistrer dans le localStorage
          localStorage.setItem("myCart", JSON.stringify(deleteCartData));
          //regenerer l'affichage du panier
          location.reload();
        });
        //quantite totale
        totalQuantity += p.quantity;
        mytotalQuantity.innerText = totalQuantity;
        //prix total
        totalPrice += p.quantity * product.price;
        mytotalPrice.innerText = totalPrice;

        cartItems.appendChild(cartProduct);
      })
      .catch((err) => console.log(`Erreur : ${err}`));
  }
}



//validation du formulaire

//recuperation du formulaire et du bouton commander
let form = document.querySelector(".cart__order__form");
let submitButton = document.querySelector("#order");
console.log(form);
console.log(submitButton);

//ecouter la modification du prenom
form.firstName.addEventListener('change', () => {
  validFirstName(this);
});

//ecouter la modification du nom
form.lastName.addEventListener('change', () => {
  validLastName(this);
});

//ecouter la modification de l'adresse
form.address.addEventListener('change', () => {
  validAddress(this);
});

//ecouter la modification de la ville
form.city.addEventListener('change', () => {
  validCity(this);
});

//ecouter la modification de l'email
form.email.addEventListener('change', () => {
  validEmail(this);
});


//validation du prénom
const validFirstName = function(inputFirstName) {
  //création de la reg exp pour valider prénom
  let firstNameRegExp = new RegExp("^[a-zA-ZÀ-ÿ ,.'-]{2,}$", "g");

  //recuperation du message d'erreur
  let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");

  //validation du prenom
  if (firstNameRegExp.test(inputFirstName.value)) {
    firstNameErrorMsg.textContent = "valide";
    return true;
  } else {
    firstNameErrorMsg.textContent = "Minimum 2 caractères, lettres uniquement.";
    return false;
  }
}

//validation du nom
const validLastName = function (inputLastName) {
  //création de la reg exp pour valider nom
  let lastNameRegExp = new RegExp("^[a-zA-ZÀ-ÿ ,.'-]{2,}$", "g");

  //recuperation du message d'erreur
  let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");

  //validation du nom
  if (lastNameRegExp.test(inputLastName.value)) {
    lastNameErrorMsg.textContent = "valide";
    return true;
  } else {
    lastNameErrorMsg.textContent = "Minimum 2 caractères, lettres uniquement.";
    return false;
  }
}

//validation de l'adresse postale
const validAddress = function (inputAddress) {
  //création de la reg exp pour valider l'adresse
  let addressRegExp = new RegExp("^[a-zA-ZÀ-ÿ0-9 ,.'-]{2,}$", "g");

  //recuperation du message d'erreur
  let addressErrorMsg = document.getElementById("addressErrorMsg");

  //validation de l'adresse
  if (addressRegExp.test(inputAddress.value)) {
    addressErrorMsg.textContent = "valide";
    return true;    
  } else {
    addressErrorMsg.textContent =
      "Minimum 2 caractères, chiffres ou lettres uniquement.";
      return false;
  }
}

//validation de la ville
const validCity = function (inputCity) {
  //création de la reg exp pour valider la ville
  let cityRegExp = new RegExp("^[a-zA-ZÀ-ÿ ,.'-]{2,}$", "g");

  //recuperation du message d'erreur
  let cityErrorMsg = document.getElementById("cityErrorMsg");

  //validation de la ville
  if (cityRegExp.test(inputCity.value)) {
    cityErrorMsg.textContent = "valide";
    return true;
  } else {
    cityErrorMsg.textContent = "Minimum 2 caractères, lettres uniquement.";
    return false;
  }
}

//validation de l'email
const validEmail = function (inputEmail) {
  //création de la reg exp pour valider email
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
  );

  //recuperation du message d'erreur
  let emailErrorMsg = document.getElementById("emailErrorMsg");

  //validation email
  if (emailRegExp.test(inputEmail.value)) {
    emailErrorMsg.textContent = "Email valide";
    return true;
  } else {
    emailErrorMsg.textContent = "Merci de respecter le format email.";
    return false;
  }
}


//envoi du formulaire dans le back-end

//ecouter la soumission du formulaire
form.addEventListener('submit', (e) => {
  
  if (validFirstName(form.firstName) && validLastName(form.lastName) && validAddress(form.adress) && validCity(form.city) && validEmail(form.email) && mytotalQuantity && mytotalPrice){
    form.submit()
  }
});

//envoyer les données du formulaire et les traiter
function sendOrderData() {
  const orderData = prepareOrderData();
  const jsonOrderData = JSON.stringify(orderData);

  //effectuer une requête POST sur l'API
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonOrderData,
  };

  //Appel de l'API
  fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then(function (data) {
      //vider le localStorage
      localStorage.clear();
      //diriger sur la page confirmation en passant l'id dans l'URL
      window.location.replace(`confirmation.html?order=${data.orderId}`);
    })
    .catch((error) => {
      //message d'erreur si l'envoi a l'API n'est pas complete
      alert("Le serveur ne répond pas. Rééssayez ultérieurement.");
      console.log("L'envoi du formulaire a rencontré un problème" + error);
    }); 

  //envoyer toutes les données concernées (product-ID + donnees contacts) au back-end
  fetch("http://localhost:3000/api/products/order", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //vider le localStorage
      localStorage.clear();
      //diriger sur la page confirmation en passant l'id dans l'URL
      window.location.replace(`confirmation.html?order=${data.orderId}`);
    })
    .catch(function (error) {
      alert("Le serveur ne répond pas. Réessayer une autre fois.");
    });
}

