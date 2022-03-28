let homeScore = 0;
let awayScore = 0;
let totalScore = 0;
let horseScore = 0;

let teamTemplate = {
    team: `<h1>Dark Horse</h1>
    <span class="scoreChars" id="darkScore">0</span>
    <span>
        <img src="https://www.airdberlis.com/images/default-source/default-album/shutterstock_150365132_dark-horse.jpg?sfvrsn=9cd75dd5_0" style="max-width: 400px; max-height: 400px;" alt="">
    </span>
    <button id="horseButton" onclick="horseScored()" class="btn-primary btn my-3">Dark Horse Scored!</button>
    <button id="grand-slam-horse" onclick="grandSlamHorse()" class="btn btn-outline-primary">BASES LOADED! GRAND SLAM!</button>
  </div>`
}

function homeScored(click) {
    homeScore++
    // let score = document.getElementById('homeScore')
    hScore.innerText = homeScore;  
    calculateSum();
}
function horseScored(click) {
    horseScore++
    darkScore.innerText = horseScore;
    calculateSum();
}


function awayScored(click) {
    awayScore++
    let score = document.getElementById('awayScore')
    aScore.innerText = awayScore; 
    calculateSum() 
}

function resetScores(click){
    hScore.innerText = 0;
    homeScore = 0
    aScore.innerText = 0;
    awayScore = 0;
    darkScore.innerText = 0;
    horseScore = 0;
    calculateSum();
}

function grandSlamHome(click) {
    homeScore += 4;
    hScore.innerText = homeScore;
    calculateSum();
}

function grandSlamAway(click) {
    awayScore += 4;
    aScore.innerText = awayScore;
    calculateSum()
}

function grandSlamHorse(){
    horseScore += 4;
    darkScore.innerText = horseScore;
    calculateSum();
}
function calculateSum() {
    totalScore = homeScore + awayScore + horseScore;
    document.getElementById('sum').innerText = totalScore;
}

function generateNewTeam(click){
    alert('A mysterious power has appeared on the field...')
    document.getElementById('bonusRow').innerHTML = teamTemplate.team;
}
