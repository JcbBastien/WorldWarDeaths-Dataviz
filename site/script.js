// Récupère les données dans le tableau de données
  const response = await fetch("http://localhost:5500/data.json")
  const jsonData = await response.json();

document.getElementById('SeeMore').style.display = 'none';

//JustePrix morbide
document.querySelector("form").addEventListener("submit", (event) => {
    //Evite de rafraichir la page au submit
    event.preventDefault();

    //Valeurs changeable
    let rep = 18591701;
    let transitionSec = 2;

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

const closeModalButtons = document.getElementById('closeModal')
const modal = document.getElementById('modal')

function openModal(){
  modal.classList.add('active')
  const x = event.clientX + 10 + 'px';
  const y = event.clientY - 50 + 'px';
  modal.style.left = x;
  modal.style.top = y;
}
function closeModal(){
  modal.classList.remove('active')
}

closeModalButtons.addEventListener('click', closeModal)

let svg = document.querySelector('svg');

svg.querySelectorAll('path').forEach(path => {

  let abr = path.id;
  let countryData = jsonData.WW1.find(d => d.abr === abr);

  if(countryData){
    path.addEventListener('click', () => {
        openModal()
        document.querySelector('#title').textContent = countryData.country;
        document.querySelector('#modal-body').textContent ="NUMBER OF DEATHS : " + countryData.deaths
   });
  }else{
    path.classList.remove("selectablePath")
    path.classList.add("unselectablePath")
  }
  
 });

