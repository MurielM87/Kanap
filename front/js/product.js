const produit = document.getElementsByClassName('item__img');

const productImg = document.createElement('img');
document.getElementsByClassName('item__img').appendChild(productImg);
productImg.setAttribute('src', '${productList.img}');
productImg.setAttribute('alt', '${productList.altText}');

const productName = document.getElementById(title).appendChild(productName);

const productPrice = document.getElementById('price');

const productDescription = document.getElementById('description');

const productColor = document.getElementById('colors'); //a verifier par rapport à option value
//const productColor = document.querySelector(input[value "${productList_colors}");