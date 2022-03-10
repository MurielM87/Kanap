let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); //recuperation de l'id du produit
console.log(productId);

fetch(`http://localhost:3000/api/products/${productId}`)
.then(function (res) {
    return res.json();
  })
  .then(function (kanap) {
      console.log(kanap);
      const productCard = document.getElementsByClassName('item__img');
      
      for (const product of kanap) {
        console.log(product);

        const productImg = document.createElement("img");
        productCard.appendChild(productImg);
        productImg.src = product.img;
        productImg.alt = product.altTxt;        
        
        const productName = document.getElementsById("title");
        productName.textInner = product.name;

        ////
        const productPrice = document.getElementById("price");
        productPrice.textInner = product.price;

        const productDescription = document.getElementById("description");
        productDescription.textInner = product.description;

        const productColor = document.querySelector("option value");
        productColor.value = product.colors;
      }
  })
  //.catch((err) => console.log(`Erreur : ${err}`));
