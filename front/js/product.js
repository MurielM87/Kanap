/**
 * appel de l'API selon le produit selectionne
 */
let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); //recuperation de l'id du produit
console.log(productId);

//ajout produit selectionne + quantite dans le panier
const addToCartBtn = document.querySelector("#addToCart");

//appel API selon ID produit
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
    const productColors = document.getElementById("colors");
    for (const color of kanap.colors) {
      const itemColor = document.createElement("option");
      productColors.appendChild(itemColor);
      itemColor.value = color;
      itemColor.innerText = color;
    }
  })
  .catch((err) => console.log(`Erreur : ${err}`));



//selectionner le bouton envoyer vers le panier
addToCartBtn.addEventListener("click", () => {
  
  //let basket = getBasket();

  
  //variable pour nom quantite et couleur
  let product = {
    id : productId,
    color : document.getElementById("colors").value,
    quantity : Number(document.getElementById("quantity").value),
  };


  // élément de validation
  let valid = true;
  
  //verifier si couleur choisie
  if (product.color == "") {
    valid = false;
    alert("Veuillez sélectionner une couleur pour le canapé.");
  }

  //vérifier si une quantité choisie
  if (
    product.quantity > 100 ||
    product.quantity < 1
  ) {
    valid = false;
    alert("Veuillez sélectionner une quantité entre 1 et 100.");
  }

  if (valid) {
    addBasket(product);
  }
});

//enregistrer le panier en chaîne de caractere dans le localStorage par valeur
function saveBasket(myCart) {
  localStorage.setItem("myCart", JSON.stringify(myCart));
}

//récupérer les données du localStorage
function addProductBasket() {
  let saveProduct = localStorage.getItem("myCart");

  // vérifier le cas où il y a déjà des données enregistrées dans le localStorage
  if (saveProduct == null) {
    return [];
  } else {
    //transformer les données du LocalStorage en javascript
    return JSON.parse(saveProduct);
  }
}

//ajouter un produit nouveau ou exisitant dans le localStorage
function addBasket(newProduct) {
  let savedProducts = addProductBasket();

  //élément de validation
  let productFound = false;
  // s'il y a déjà des produits enregistrés dans le localStorage
  if (savedProducts.length > 0) {
    savedProducts.forEach((itemProductBasket) => {
      // si c'est le même produit (même id + couleur)
      if (
        itemProductBasket.id == newProduct.id &&
        itemProductBasket.color == newProduct.color
      ) {
        productFound = true;
        //convertir quantité en chaîne de caractère et renvoyer un nombre sur une base décimale
        let newProductQuantity = parseInt(newProduct.quantity, 10);
        let itemProductBasketQuantity = parseInt(
          itemProductBasket.quantity,
          10
        );
        //incrémenter la quantité
        itemProductBasket.quantity =
          newProductQuantity + itemProductBasketQuantity;
      }
    });
    // si ce n'est pas le même produit
    if (productFound === false) {
      savedProducts.push(newProduct);
    }
    popupConfirmation();
    //si le panier est dans le localStorage
  } else {
    savedProducts = [];
    savedProducts.push(newProduct);
    popupConfirmation();
  }
  //enregistrer les modifications dans le localStorage
  saveBasket(savedProducts);
}

//message de confirmation pour le choix du panier
function popupConfirmation() {
  if (
    window.confirm(`Votre produit "${
      document.getElementById("title").textContent
    }", 
  couleur: ${document.getElementById("colors").value}, 
  quantité: ${document.getElementById("quantity").value}, 
  a bien été ajouté au panier. 
  Appuyez "OK" pour consulter le panier ou "annuler" pour modifier.`)
  ) {
    window.location.href = "cart.html";
  } else {
    window.location;
  }
}
