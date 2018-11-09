var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var email = document.getElementById("email");
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



prenom.addEventListener('blur',function() {
    console.log('Perte focus');
    console.log("Value : " + this.value )

    if (!isNaN(this.value) || (this.value == "")) {

        this.style.backgroundColor = "red";
        
    } else {

        this.style.backgroundColor = "green";
    }

});

nom.addEventListener('blur',function() {
    console.log('Perte focus');
    console.log("Value : " + this.value )
    if (!isNaN(parseInt(this.value)) || (this.value == "")) {
        this.style.backgroundColor = "red";
        
    } else {
        this.style.backgroundColor = "green";
    }

});

age.addEventListener('blur',function() {
    console.log('Perte focus');
    console.log("Value : " + this.value )
    if (isNaN(this.value) || (this.value == "")) {
        
        this.style.backgroundColor = "red";
        
    } else {

        this.style.backgroundColor = "green";

    }

});

email.addEventListener('blur',function() {

    console.log('Chek Mail');

    if (regex.test(this.value) == false || (this.value == "")) {
        
        this.style.backgroundColor = "red";
  
    } else {
        
        this.style.backgroundColor = "green";
        
    }
})



/***************************************************************/



//leBouton = document.getElementById('leBouton');
// console.log(leBouton);
// var titre = document.getElementById('Titre');
// console.log(titre);

// leBouton.addEventListener('click', function() {
//     var a = prompt('Veuillez entrer un nombre');

//     if ((isNaN(a))) {

//         a = "A n'est pas un nombre espèce de Boloss";
    
//     }

//     titre.innerHTML = a;

// });

// function insertionNombre () {
//     var a = prompt('Veuillez entrer un nombre');
//     var titre = document.getElementById('Titre');
//     titre.innerHTML = a;
// }

/***************************************************************/


