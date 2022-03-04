//appeler l'API par fetch pour créer des requêtes HTTP et des reponses
const productList = fetch("http://localhost:3000/api/products");

productList
  .then(function (res) {
    return res.json();
  })
  .then(function (product) {
    console.log(product); //verification des données
    
    for (const productList of product) {
      console.log(productList);

      //1ere methode possible pour intégrer le HTML de manière dynamique
      const productLien = document.createElement("a");
      document.getElementById("items").appendChild(productLien);
      productLien.setAttribute("href", "product.html"); 
      productLien.setAttribute("data-id", "${productList._id}"); //rajouter ID du produit
      //console.log(productLien)
      const productArticle = document.createElement("article");
      productLien.appendChild(productArticle);
        
      const productImg = document.createElement("img");
      productArticle.appendChild(productImg);
      productImg.setAttribute("src", "ProductList.${imageUrl}"); //back vs front
      productImg.setAttribute("alt", "${productList.altTxt}");

      const productName = document.createElement("h3");
      productArticle.appendChild(productName);
      productName.setAttribute("class", "productName");

      const productDescription = document.createElement("p");
      productArticle.appendChild(productDescription);
      productDescription.setAttribute("class", "productDescription");
      console.log(productList.altTxt)
    }
    for (const productList of product) {
      //console.log (productList);   
      //2eme methode possible pour intégrer le HTML de manière dynamique
      document.getElementById("items").innerHTML += `<a href="./product.html?id=42"> 
            <article>
              <img src="${productList.imageUrl}", alt="${productList.altTxt}">
              <h3 class="productName">${productList.name}</h3>
              <p class="productDescription">${productList.description}</p>
            </article>
          </a>`;
          //console.log(productList.imageUrl)
    }
  })
  .catch((err) => console.log(`Erreur : ${err}`));



