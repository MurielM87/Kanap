//pour valider formulaire html

document.querySelector('form input[type="submit"]').addEventListener("click", (e) => {
    e.preventDefault(); //annule envoi du formulaire
    //pour verifier champ
    let valid = document.querySelector('#formulaire input[name="prenom"]').reportValidity(); //envoyer rapport si invalide
    if(valid){

    }
    //2e methode
    let valid = document.querySelector('#formulaire input[name="prenom"]').checkValidity(); //verifie champ, retourne true/false, mais n'affiche pas message d'erreur - message personnalisé
    if(valid){

    }
    //3e methode : customed message  -- setCustomValidity obligatoirement sur un champ
    document.querySelector('#formulaire input[name="prenom"]').setCustomValidity("merci");
    let valid = document.querySelector('#formulaire input[name="prenom"]').reportValidity();

    //messages personnalises
    e.preventDefault();
    let input = document.querySelector('#formulaire input[name="prenom"]');
    let valid = input.checkValidity(); 
    if(!valid){
        message(input);
    }

});

function message(input){
    if(input.validity.tooShort){
        input.setCustomValidity(`au moins ${input.minLenght} caracteres`);
    }
    if(input.validity.valueMissing){
        input.setCustomValidity("obligatoire");
    }
    input.reportValidity();
}

//pour verifier le formulaire en entier
document.querySelector('form input[type="submit"]').addEventListener("click", (e) => {
    e.preventDefault(); //annule envoi du formulaire
    let fields = document.querySelectorAll('#formaulaire input, #formulaire select, #formulaire textarea'); //pour l'ensemble des champs
    let valid = true ; 
    for (let field of (fields)){ 
        valid &= check(field); //valid = valid && check(field);
        if(!valid){
            break;
        }
    }
    if (valid) {

    }
});

function check(input){
    input.setCustomValidity("");
    if(input.validity.tooShort){
        input.setCustomValidity(`au moins ${input.minLenght} caracteres`);
    }
    if(input.validity.valueMissing){
        input.setCustomValidity("obligatoire");
    }
    return = input.reportValidity(); //pour passer au champ suivant
}