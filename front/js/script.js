//appeler l'API par fetch pour créer des requêtes HTTP et des reponses
fetch("http://localhost:3000/api/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (products) {
    console.log(products);
    const items = document.getElementById("items");
    
    for (const product of products) {
      console.log(product);

        //1ere methode possible pour intégrer le HTML de manière dynamique
        const productLien = document.createElement("a"); //creation element "a" lien
        productLien.href = `product.html?id=${product._id}`; //ajout href + lien

        //console.log(productLien)
        const productArticle = document.createElement("article"); //creation balise article
        productLien.appendChild(productArticle); //relier l'element article a son parent

        const productImg = document.createElement("img"); //creation balise image
        productArticle.appendChild(productImg); //relier l'element img a son parent
        productImg.src = product.imageUrl; //ajout lien image
        productImg.alt = product.altTxt; //ajout texte alternatif a l'image

        const productName = document.createElement("h3"); //creation balise titre h3
        productArticle.appendChild(productName); //relier l'element h3 a son parent
        productName.classList.add("productName"); //ajout class à h3
        productName.innerText = product.name; //ajout texte titre

        const productDescription = document.createElement("p"); //creation balise paragraphe
        productArticle.appendChild(productDescription); //relier l'element p a son parent
        productDescription.classList.add("productDescription"); //ajout class à p
        productDescription.innerText = product.description; //ajout texte description
        
        items.appendChild(productLien); //relier tous les elements à son parent
    }
    
    /*2eme methode possible pour intégrer directement le HTML de manière dynamique
      for (const product of products) {
      //console.log (product);   
      document.getElementById("items").innerHTML += `<a href="./product.html?id=${product._id}"> 
            <article>
              <img src="${product.imageUrl}", alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a>`;
      }*/
  })
  .catch((err) => {console.log(`Erreur : ${err}`)}); 
