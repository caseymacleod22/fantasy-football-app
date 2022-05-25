const BASE_URL = 'https://api.sleeper.app/v1/'
let playerData;


function getData() {
    $.ajax('https://api.sleeper.app/v1/league/784456593403224064/users')
    .then(function(data) {
        playerData = data
        console.log(playerData[0].display_name, playerData[1].display_name, playerData[2].display_name, playerData[3].display_name, playerData[4].display_name, playerData[5].display_name, playerData[6].display_name, playerData[7].display_name, playerData[8].display_name,playerData[9].display_name)
    })
}

function mapUserData() {

}

getData()
// 784456593403224064