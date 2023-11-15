// Récupère les données dans le tableau de données
const response = await fetch("data.json")
const jsonData = await response.json()



// Ajout de scroll horizontal à la souris pour le graphique
document.getElementById("graph1").addEventListener('wheel', function(event) {
  var modifier = 1;
  
  if (event.deltaMode == event.DOM_DELTA_PIXEL) {
    modifier = 1;
  } 
  else if (event.deltaMode == event.DOM_DELTA_LINE) {
    modifier = parseInt(getComputedStyle(this).lineHeight);
  } 
  else if (event.deltaMode == event.DOM_DELTA_PAGE) {
    modifier = this.clientHeight;
  }
  
  if(isNaN(modifier)) {
    modifier = 10;
  }
  
  if (event.deltaY != 0) {
    this.scrollLeft += modifier * event.deltaY;
    event.preventDefault();
  }
});

// Trie par nombre de morts
const sortedWW2 = jsonData.WW2.sort(function(a,b){
  return b.deaths - a.deaths;
})


// SVG military / civilian pour alléger les codes de génération de graphiques
let civilianVar = `<g id="graphCivilian">
<path stroke-width="1.25" class="graphCivilianColor" d="m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z"/>
</g>`

let militaryVar = `<g id="graphMilitary" transform="scale(0.2265) translate(131.5, 35)">
<g id="SVGRepo_bgCarrier" stroke-width="0"/>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
<g id="SVGRepo_iconCarrier">
  <g id="svg_1">
    <g id="svg_2">
      <path class="graphMilitaryColor" d="m167.87,72.17c-7.74,3.37 -16.43,5.16 -25.44,5.16c-9.08,0 -17.82,-1.82 -25.6,-5.23c-2.61,4.63 -7.43,7.52 -12.73,7.66c1.7,19.94 18.41,35.6 38.79,35.6c20.38,0 37.09,-15.65 38.8,-35.58c-6.55,0 -11.21,-3.05 -13.82,-7.61z"/>
    </g>
  </g>
  <g id="svg_4">
    <g id="svg_5">
      <path class="graphMilitaryColor" d="m132.46,354.11c-14.29,5.94 -30.29,-3.36 -32.32,-18.6c-0.73,-5.49 -5.84,-43.79 -6.45,-48.34l-2.18,-1.49c0,0 -0.17,-2.53 -0.17,202.44c0,13.19 10.69,23.88 23.88,23.88s23.87,-10.69 23.87,-23.88l0,-136.77l-6.63,2.76z"/>
    </g>
  </g>
  <g id="svg_7">
    <g id="svg_8">
      <path class="graphMilitaryColor" d="m238.76,172.01c-0.13,-25 -20.58,-45.34 -45.58,-45.34c-8.47,0 -74.68,0 -83.3,0c4.12,9.88 32.09,77.14 36.5,87.77c2.13,5.1 2.13,10.73 0.03,15.84c-0.12,0.28 -0.25,0.55 -0.38,0.82c12.45,11.55 15.75,30.12 7.95,45.29c5.87,14.04 9.58,22.92 15.43,36.9c4.97,11.96 -0.72,25.75 -12.68,30.73l-10.55,4.38l0,139.72c0,13.19 10.69,23.88 23.88,23.88c13.18,0 23.88,-10.69 23.88,-23.88c0,-10.75 0,-272.62 0,-315.89c0,-1.39 1.12,-2.51 2.5,-2.52c1.38,0 2.51,1.12 2.52,2.5c0.29,57.85 0.24,30.96 0.18,120.85c-0.01,10.98 8.89,19.9 19.88,19.91c0.01,0 0.01,0 0.02,0c10.98,0 19.89,-8.9 19.89,-19.89c0.07,-90.02 0.12,-63.08 -0.17,-121.07z"/>
    </g>
  </g>
  <g id="svg_10">
    <g id="svg_11">
      <path class="graphMilitaryColor" d="m135.32,219.04l-66.9,-160.88l7.04,-2.93c4.44,-1.85 6.54,-6.95 4.7,-11.39c-1.85,-4.45 -6.95,-6.55 -11.39,-4.7l-7.04,2.93l-5.03,-12.08c-1.84,-4.45 -6.94,-6.55 -11.39,-4.7c-4.44,1.84 -6.54,6.94 -4.7,11.39l33.35,80.18c-2.41,-2.6 -6.27,-3.57 -9.73,-2.13c-4.45,1.85 -6.55,6.95 -4.7,11.39c3.35,8.07 23.67,56.93 26.41,63.53l49.95,34.02c0.22,-1.52 0.06,-3.11 -0.57,-4.63z"/>
    </g>
  </g>
  <g id="svg_13">
    <g id="svg_14">
      <path class="graphMilitaryColor" d="m158.34,317.88l-12.77,-30.55c-10.3,9.3 -25.21,12.46 -38.78,7.4l5.22,39.19c1.01,7.53 8.88,12.02 15.85,9.12l24.27,-10.09c5.87,-2.44 8.66,-9.19 6.21,-15.07z"/>
    </g>
  </g>
  <g id="svg_16">
    <g id="svg_17">
      <path class="graphMilitaryColor" d="m131.27,242.56l-58.35,-39.74l2.72,-4.79l-19.34,-46.5c-15.36,27.01 -14.59,25.66 -27.05,47.57c-5.12,9.01 -2.47,20.44 6.1,26.28l73.51,50.07c9.09,6.2 21.47,3.84 27.65,-5.24c6.19,-9.08 3.84,-21.46 -5.24,-27.65z"/>
    </g>
  </g>
  <g id="svg_19">
    <g id="svg_20">
      <path class="graphMilitaryColor" d="m190.37,64.13c-1.64,-8.84 -5.66,-30.65 -5.66,-31.46c0,-18.04 -18.93,-32.67 -42.28,-32.67c-22.28,0 -40.52,13.32 -42.15,30.22l-0.13,0l-5.9,33.95c-0.33,1.89 1.13,3.63 3.05,3.63l6.39,0c1.15,0 2.21,-0.64 2.74,-1.66l5.67,-10.72c7.68,6.12 18.43,9.92 30.33,9.92c11.81,0 22.48,-3.74 30.15,-9.77l5.66,10.59c0.54,1.01 1.59,1.64 2.73,1.64l6.36,0c1.93,0 3.4,-1.76 3.04,-3.67z"/>
    </g>
  </g>
  <g id="svg_28"/>
</g>
</g>`

function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


// Deux codes pour générer les graphiques des guerres car la 2e guerre a des valeurs supplémentaire.
// <rect x="10" y="10" width="230" height="380" fill="#cacaca"/>
sortedWW2.forEach((element, i) => {
    let eachCivilDeath = formatNumberWithSpaces(element.civil);
    let eachMilitaryDeath = formatNumberWithSpaces(element.military);


    let WW2GraphTemplate = `
    <div class="graphContainer">
        <svg id="graph1` + (i+1) + `Content" width="250" height="400" xmlns="http://www.w3.org/2000/svg">
            <defs>` + civilianVar + militaryVar +`</defs>
        </svg>

        <img src="img/drapeauWW2/`+element.abr+`.png">


        <h2>` + element.country + `</h2>
        <p>` + eachCivilDeath + ` civil / ` + eachMilitaryDeath + ` militaire</p></div>`;
        

      document.getElementById("graph1").innerHTML += WW2GraphTemplate;

      let WW2MaxDeath = sortedWW2[0].deaths

      // Pourcentage sur 140 car 140 personnes peut être affiché a la fois.
      let currentPercentage = Math.round((element.deaths*140)/WW2MaxDeath)

      // Pourcentage de personnes décédées calculé en fonction du pays ayant le plus de morts.
      // Si le pourcentage de personnes décédées est inférieur à 2, il regarde s'il y a des morts civil et militaire.
      if(currentPercentage <= 2){
        if(element.military == 0 || element.civil == 0){
          // S'il y a que un type de mort, il met le pourcentage à 1 pour afficher qu'un type de personne.
          currentPercentage = 1
          // S'il y a des morts civil ET militaire, il met le pourcentage à 2 pour afficher 2 personnes dans le graphique.
        }else{
          currentPercentage = 2
        }
      }

      let currentCivilPercentage = Math.round((element.civil*currentPercentage)/element.deaths)
      let currentMilitaryPercentage = currentPercentage - currentCivilPercentage
      if(currentCivilPercentage == 0){
        if(element.civil != 0){
          currentCivilPercentage = 1
          currentMilitaryPercentage--
        }
      }
      if(currentMilitaryPercentage == 0){
        if(element.military != 0){
          currentMilitaryPercentage = 1
          currentCivilPercentage--
        }
      }

      let Xpos = 0
      let Ypos = 0

      let militaryI = 0
      let graphPersonnage = "#graphMilitary"

      for(let graphI = 1;graphI <= currentPercentage; graphI++){
        if(militaryI < currentMilitaryPercentage){
          militaryI++
        }else{
          graphPersonnage = "#graphCivilian"
        }
        document.getElementById("graph1" + (i+1) + "Content").innerHTML += `<use xlink:href="` + graphPersonnage + `" x="710" y="1160" width="50px" height="100px" transform="scale(0.3) translate(` + -55*Xpos + `,` + -125*Ypos + `)"/>`

        Xpos++
        if(Xpos == 14){
          Xpos = 0
          Ypos++
        }
      }
      i++;
});



let eachDeathInfo = formatNumberWithSpaces(Math.round(sortedWW2[0].deaths/140));

document.getElementById("TXTgraph").innerHTML = `Explorez l'impact humain dévastateur de la Première Guerre mondiale à travers notre graphique. Chaque personnage représenté équivaut à `+ eachDeathInfo+`  de vies perdues pendant ce conflit historique. Chaque personnage de ce graphique reflète une vie perdue, soulignant ainsi l'ampleur personnelle et humaine de ce conflit historique dévastateur. 
 <br> <img class="militarySVG" src="img/military.svg" alt=""> = Nombre de militaires morts <img class="civilianSVG" src="img/civilian.svg" alt=""> = Nombre de civils morts </br>
`


