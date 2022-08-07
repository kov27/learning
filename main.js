var gameData = {
    credits: 0,
    creditsPerDay: 1,
    creditsPerDayCost: 10
}

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
    //gameData = savegame
    document.getElementById("perDayUpgrade").innerHTML = "Get a better job (Currently Level " + gameData.creditsPerDay + ") Cost: " + gameData.creditsPerDayCost + " Gold"
}

function dayTick() {
    gameData.credits += gameData.creditsPerDay
    document.getElementById("credits").innerHTML = gameData.credits + " Credits"
}

function buyGoldPerClick() {
    if (gameData.credits >= gameData.creditsPerDayCost) {
        gameData.credits -= gameData.creditsPerDayCost
        gameData.creditsPerDay *= 1
        gameData.creditsPerDayCost *= 2
        document.getElementById("credits").innerHTML = gameData.credits + " Gold Mined"
        document.getElementById("perDayUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.creditsPerDay + ") Cost: " + gameData.creditsPerDayCost + " Gold"
    }
}

var mainGameLoop = window.setInterval(function () {
    dayTick()
}, 1000)

var saveGameLoop = window.setInterval(function () {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
    console.log("Saved")
}, 15000)