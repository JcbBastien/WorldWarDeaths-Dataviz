//JustePrix morbide
document.querySelector("form").addEventListener("submit", (event) => {
    //Evite de rafraichir la page au submit
    event.preventDefault();

    //Valeurs changeable
    let rep = 85000000;
    let transitionSec = 3;

    //Valeurs d'entrée
    let inputNumber = event.target.childNodes[3].valueAsNumber;
    let numberDif = rep - inputNumber;
    transitionSec = transitionSec*10;

    //Retire le submit & la case puis ajoute un label
    document.getElementById("numberJusteMort").remove();
    document.getElementById("cacaSubmit").remove();

    document.getElementById("trucDrole").innerHTML = inputNumber.toString();

    //Boucle fesant augmenter le chiffre
    for(let i=1 ; i<=100 ; i++){
        setTimeout(function(){
            let inputAndDifPercent = inputNumber + numberDif * (i/100);

            document.getElementById("trucDrole").innerHTML = Math.round(inputAndDifPercent).toString();
        },i*transitionSec);
    };
    setTimeout(function(){
        document.getElementById("trucDrole").innerHTML = rep;
    },100*transitionSec)
})