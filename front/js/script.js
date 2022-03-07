//appeler l'API par fetch pour créer des requêtes HTTP et des reponses
const productList = fetch("http://localhost:3000/api/products");

//creer la promise
productList
  .then(function (res) {
    return res.json();
  })
  .then(function (products) {
    console.log(products); //verification des données
    
    for (const productList of products) { //let i = 0; i < products.length; i+=1
      console.log(productList);

      //1ere methode possible pour intégrer le HTML de manière dynamique
      const productLien = document.createElement("a"); //creation element "a" lien
      document.getElementById("items").appendChild(productLien); //relier element à son parent
      productLien.href = "product.html"; //ajout href + lien
      //productLien.querySelector("data-id", "${products._id}"); //rajouter ID du produit
      
      //console.log(productLien)
      const productArticle = document.createElement("article");
      productLien.appendChild(productArticle);
           
      
      const productImg = document.createElement("img");
      productArticle.appendChild(productImg);
      productImg.src = "${productList.imageUrl}"; //back vs front
      productImg.alt = "${products.altTxt}";
      
      const productName = document.createElement("h3");
      productArticle.appendChild(productName);
      productName.classList.add("productName");
      productName.innerText = "titre";

      const productDescription = document.createElement("p");
      productArticle.appendChild(productDescription);
      productDescription.classList.add("productDescription");
      productDescription.innerText = "description";
      console.log(productList.altTxt)
    }
    /*
    //2eme methode possible pour intégrer le HTML de manière dynamique
      for (const productList of products) {
      //console.log (productList);   
      document.getElementById("items").innerHTML += `<a href="./product.html?id=42"> 
            <article>
              <img src="${productList.imageUrl}", alt="${productList.altTxt}">
              <h3 class="productName">${productList.name}</h3>
              <p class="productDescription">${productList.description}</p>
            </article>
          </a>`;
          //console.log(productList.imageUrl)
      }*/
  })
  .catch((err) => console.log(`Erreur : ${err}`));



