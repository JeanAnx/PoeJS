    /* MES VARIABLES */

var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var email = document.getElementById("email");
var leBouton = document.getElementById("leBouton");
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    /* MES FONCTIONS */

function checkInputText(input) {
    console.log("Value : " + input.value )
    if (!isNaN(input.value) || (input.value == "")) {
        input.style.backgroundColor = "red";
        return false;       
        } else {
            input.style.backgroundColor = "green";
            return true;
        }
};

function checkInputNumber(input) {
    var theValue = input.value
    console.log("Value : " + theValue )
    if (isNaN(theValue) || (theValue == "") || (input.value < 18 ) || (input.value > 100) ) {       
        input.style.backgroundColor = "red";
        return false;
        } else {
            input.style.backgroundColor = "green";
            return true;
        }
};

function checkEmail(input) {
    var theValue = input.value;
    if (regex.test(theValue) == false || (theValue == "")) {
        input.style.backgroundColor = "red"; 
        return false;
        } else {                
            input.style.backgroundColor = "green";
            return true;            
        }
};

function checkForm() {
    if ( checkInputText(prenom) == false || checkInputText(nom) == false || checkInputNumber(age) == false || checkEmail(email) == false ) {
        console.log(checkInputText(prenom));
        return false;
    } else {
        return true;
    }
}

function getSafe(string) {
    var reject = /<script>/g;
    string.replace( reject , "&gt");
    return string;
}

var text = "Lorem <script>";
console.log(getSafe(text));

    /* MES ÉVÈNEMENTS */


prenom.addEventListener('blur', function() {
    checkInputText(this);
});

nom.addEventListener('blur',function() {
    checkInputText(this);
});


age.addEventListener('blur',function() {
    checkInputNumber(this);
});

email.addEventListener('blur',function() {
    checkEmail(this);
});




