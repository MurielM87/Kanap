/*
//gestion du panier
function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket)); //transforme un tableau ou un objet en chaine de caracteres
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null) {
        return [];
    }else{
        return JSON.parse(basket); //JSON.parse retransforme chaine de caracteres en objet ou tableau
    }
}

//fonction ajout au panier
function addBasket (product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id); //find pour chercher un element dans un tableau par rapport à une condition
    if (foundProduct != undefined){
        foundProduct.quantity++;
    }else{
        product.quantity = 1;
        basket.push(product);
    }
    basket.push(product);
    saveBasket(basket); //pour enregistrer
}
//retirer un produit du panier
function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != p.quantity);
    saveBasket(basket);
}

//pour changer la quantité
function changeQuantity (product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id); 
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            remmoveFromBasket(foundProduct); //pour supprimer quand quantité à 0
        }else{
            saveBasket(basket);
        }
    }
    saveBasket(basket);
}

//pour calculer la quantite totale
function getNumberProduct(){
    let basket = getBasket();
    let number = 0 ; 
    for (let product of basket){
        number += product.quantity;
    }
    return number;
}

//pour calculer le prix total
function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for (let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}*/

//mode orienté objet (en reprenant tout ce qui est au-dessus)
class Basket{
    constructor() {
        let basket = localStorage.getItem("basket");
        if (basket == null) {
            this.basket = [];
        }else{
            this.basket = JSON.parse(basket); 
        }
    }

    save() {
        localStorage.setItem("basket", JSON.stringify(this.basket));
    }

    add(product){
        let foundProduct = this.basket.find(p => p.id == product.id); 
        if (foundProduct != undefined){
            foundProduct.quantity++;
        }else{
            product.quantity = 1;
            this.basket.push(product);
        }
        this.basket.push(product);
        this.save();
    }
    remove(product){
        basket = this.basket.filter(p => p.id != p.quantity);
        this.save();
    }
    
    changeQuantity (product, quantity){
        let foundProduct = this.basket.find(p => p.id == product.id); 
        if (foundProduct != undefined) {
            foundProduct.quantity += quantity;
            if(foundProduct.quantity <= 0){
                this.remmove(foundProduct); 
            }else{
                this.save();
            }
        }
        this.save();
    }
    
    getNumberProduct(){
        let number = 0 ; 
        for (let product of this.basket){
            number += product.quantity;
        }
        return number;
    }
    
    getTotalPrice(){
        let total = 0;
        for (let product of this.basket){
            total += product.quantity * product.price;
        }
        return total;
    }
}