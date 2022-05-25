const BASE_URL = 'https://api.sleeper.app/v1/'
let playerData;


function getData() {
    $.ajax('https://api.sleeper.app/v1/league/784456593403224064/rosters')
    .then(function(data) {
        playerData = data
        console.log(playerData)
    })
}

getData()
// 784456593403224064