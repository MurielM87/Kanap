//recuperation de l'id produit
let urlProduct = new URL("http://localhost:3000/api/products/${productId}");
let params = new URLSearchParams(window.location.search);
let productId = params.get("id");
console.log("id");



//integration du HTML
//const productCart = document.getElementsByClassName('item__img');

const productImg = document.createElement("img");
document.getElementsByClassName("item__img").appendChild(productImg);
//productImg.setAttribute('src', '${productList.img}');
//productImg.setAttribute('alt', '${productList.altText}');

//const productName = document.getElementById('title').textContent('coucou');


const productPrice = document.getElementById('price');

const productDescription = document.getElementById('description');

const productColor = document.getElementById('colors'); //a verifier par rapport à option value
//const productColor = document.querySelector(input[value "${productList_colors}");

//
//2eme methode
document.getElementsByClassName("item__img").innerHTML += `<img src="../images/logo.png" alt="Photographie d'un canapé">`;
document.getElementById("item__content__titlePrice").innerHTML += `<h1 id="title"><!-- Nom du produit --></h1>
                <p>Prix : <span id="price"><!-- 42 --></span>€</p>`;
document.getElementsByClassName("item__content__description__title").innerHTML += ` <p class="">Description :</p>
                <p id="description"><!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>`;
document.getElementsByClassName("item__content__settings__color") += `<label for="color-select">Choisir une couleur :</label>
<select name="color-select" id="colors">
    <option value="">--SVP, choisissez une couleur --</option>
<!--                       <option value="vert">vert</option>
    <option value="blanc">blanc</option> -->
</select>`

