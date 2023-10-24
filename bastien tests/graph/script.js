// Récupère les données dans le tableau de données
const response = await fetch("http://localhost:5500/graph/data.json")
const jsonData = await response.json()



// Affiche/cache les graphiques
function toggleGraphs(){
    document.getElementById("graph1").classList.toggle("hidden")
    document.getElementById("graph2").classList.toggle("hidden")
}

let WWNumber = 0

document.getElementById("wwx").addEventListener("click", function (e) {
    if(WWNumber == 0){
        WWNumber = 1
        toggleGraphs()
    }else{
        WWNumber = 0
        toggleGraphs()
    }
});



// Trie par nombre de morts
const sortedWW1 = jsonData.WW1.sort(function(a,b){
    return b.deaths - a.deaths;
})
const sortedWW2 = jsonData.WW2.sort(function(a,b){
    return b.deaths - a.deaths;
})



// Deux codes pour générer les graphiques des guerres car la 2e guerre a des valeurs supplémentaire.
sortedWW1.forEach(element => {
    let WW1GraphTemplate = `
    <div>`
    + element.country + ` | ` + Math.round(element.deaths/100) + `morts | ` + Math.round(element.military/100) + `militaire | ` + Math.round(element.civil/100) + `civil
    </div>`;

      document.getElementById("graph1").innerHTML += WW1GraphTemplate;
});

sortedWW2.forEach(element => {
    let WW2GraphTemplate = `
    <div>`
    + element.country + ` | ` + Math.round(element.deaths/100) + `morts | ` + Math.round(element.military/100) + `militaire | ` + Math.round(element.civil/100) + `civil | ` + Math.round(element.jews/100) + `juif
    </div>`;

      document.getElementById("graph2").innerHTML += WW2GraphTemplate;
});