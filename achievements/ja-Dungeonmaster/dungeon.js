document.getElementById("button")
.addEventListener("click", rollingForStats);
const stats = document.getElementById("stats")
const nummers = []


function rollingForStats(){
    for (let i = 1; i < 4; i++) randomizer(i); //vier random nummers aanmaken
    
    for( let i = 0; i < 4; i++) nummers.push(randomizer()); //pushed naar array

    let laagst = Math.min.apply(Math,nummers); //laagste nummer pakken

    nummers.pop(laagst); //haalt laagste nummer uit lijst

    let henk = nummers[0] + nummers[1] + nummers[2]; //alle nummers die overblijven worden opgeteld

    stats.innerHTML = henk //zet stats in html
}

//geeft random nummer mee 
function randomizer(){
    return Math.floor((Math.random() * 6)) + 1;
}