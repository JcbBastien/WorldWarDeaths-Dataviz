document.getElementById('SeeMore').style.display = 'none';

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
    document.getElementById("JustePrixSubmit").remove();
    document.getElementById("formTXT").replaceChildren("Here is the real number of deaths in the first world wars");
    document.getElementById("SeeMore").style.display='flex'

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




//CARTE
let zoom=false


    let paths = d3.selectAll("path"); 
    paths.on("click", function(e) {
        if (zoom)return
        zoom=true
        e.stopPropagation();
        // Affiche "Bonjour" dans la console
        console.log(this.getBoundingClientRect());
        box=this.getBoundingClientRect();
        d3.select("svg").transition().attr("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`)
});

d3.select("svg")
    .on("click",function(){
        if(!zoom)return
        zoom=false
        d3.select("svg").transition().attr("viewBox","0 0 949 764")
    });

