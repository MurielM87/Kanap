const cartItems = document.getElementById("cart__items");
const mytotalQuantity = document.getElementById("totalQuantity");
const mytotalPrice = document.getElementById("totalPrice");

const cartOrderForm = document.querySelector(".cart__order__form");

const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const inputAddress = document.getElementById("address");
const inputEmail = document.getElementById("email");
const inputCity = document.getElementById("city");


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


//validation du formulaire de commande
//ecouter la modification du prénom
cartOrderForm.firstName.addEventListener("change", function () {
  validField(this);
});

//ecouter la modification du nom
cartOrderForm.lastName.addEventListener("change", function () {
  validField(this);
});

//ecouter la modification de la ville
cartOrderForm.city.addEventListener("change", function () {
  validField(this);
});

//validation du prénom, du nom et de la ville
function validField(inputField) {
  //creation de la reg exp pour valider le prenom, le nom et la ville (que des lettres)
  const fieldRegExp = new RegExp("^[a-zA-ZÀ-ÿ ,.'-]{2,}$", "g");

  //validation prenom
  const testField = fieldRegExp.test(inputField.value);
  const fieldErrorMsg = inputField.nextElementSibling;

  if (testField) {
    fieldErrorMsg.textContent = "valide";
    inputField.style.color = "green";
    return true;
  } else {
    fieldErrorMsg.textContent = "format non-valide, minimum 2 caractères, lettres uniquement.";
    inputField.style.color = "red";
    return false;
  }

}

//ecouter la modification de l'adresse
cartOrderForm.address.addEventListener("change", function () {
  validAddress(this);
});

//validation de l'adresse
function validAddress(inputAddress) {
  //creation de la reg exp pour valider l'adresse (lettres et chiffres)
  const addressRegExp = new RegExp("^[a-zA-ZÀ-ÿ0-9 ,.'-]{2,}$", "g");

  const testAddress = addressRegExp.test(inputAddress.value);
  const addressErrorMsg = inputAddress.nextElementSibling;

  if (testAddress) {
    addressErrorMsg.textContent = "valide";
    inputAddress.style.color = "green";
    return true;
  } else {
    addressErrorMsg.textContent = "format non-valide, minimum 2 caractères, chiffres ou lettres uniquement.";
    inputAddress.style.color = "red";
    return false;
  }
}

//ecouter la modification de l'email
cartOrderForm.email.addEventListener("change", function () {
  validEmail(this);
});

//validation de l'email
function validEmail(inputEmail) {
  //creation de la reg exp pour valider email (lettres, chiffres, @)
  const emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  const testEmail = emailRegExp.test(inputEmail.value);
  const emailErrorMsg = inputEmail.nextElementSibling;

  if (testEmail) {
    emailErrorMsg.textContent = "email valide";
    inputEmail.style.color = "green";
    return true;
  } else {
    emailErrorMsg.textContent = "Merci de mettre un email valide.";
    inputEmail.style.color = "red";
    return false;
  }
}

//recuperer ces donnees lors du click sur la bouton "commander"
//ecouter la modification de la bouton "commander"
cartOrderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //recuperer les donnees quand tous les champs sont bien valides
  if (
    validField(inputFirstName, inputLastName, inputCity) &&
    validAddress(inputAddress) &&
    validEmail(inputEmail)
  ) {
    //si le panier est vide
    if (cartData.length == 0) {
      alert("Attention, votre panier est vide ! ");
    } else {
      sendOrderData();
      alert("Votre commande a bien été prise en compte.");
    }
  } else {
    alert("Merci de bien vérifier votre formulaire avant de commander");
  }
});


//preparer les donnees validees dans le formulaires pour l'envoyer dans le back-end
function prepareOrderData() {
  //format demande par le back-end
  const contactData = {
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
    address: inputAddress.value,
    email: inputEmail.value,
    city: inputCity.value,
  };
  console.log(contactData)

  //recuperer les donnees du panier
  /*1ere methode
   //preparer le tableau de product ID
   const idProducts = [];
   for (let i = 0; i < cartData.length; i++) {
     idProducts.push(cartData[i].id);
   }*/
  /*2eme methode
   for(let product of cartData){
     idProducts.push(product.id);
   }*/
  //3eme methode
  const idProducts = cartData.map(product => product.id);
  console.log("idProducts", idProducts);


  return {
    products: idProducts,
    contact: contactData,
  };
}

//envoyer les donnees du formulaire et les traiter
function sendOrderData() {
  const orderData = prepareOrderData();

  //effectuer une requête POST sur l'API et envoyer toutes les donnees (prorduct-ID + données contacts) dans le back-end
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //vider le localStorage
      localStorage.clear();
      //diriger sur la page confirmation en passant l'id dans l'URL
      window.location.replace(`confirmation.html?order=${data.orderId}`);
    })
    .catch((error) => {
      alert(
        "Le serveur ne répond pas. Merci de revenir ultérieurement."
      );
    });
}

