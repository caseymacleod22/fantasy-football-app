// const BASE_URL = 'https://api.sleeper.app/v1/'
let playerData = []


function getData() {
    $.ajax('https://api.sleeper.app/v1/league/784456593403224064/users')
    .then(function(data) {
        playerData = data  
        console.log(playerData[0].display_name)
    })
}

function mapUserData() {
    
}

getData()
// 784456593403224064


async function fetchData() {

    const response = await fetch('https://api.sleeper.app/v1/league/784456593403224064/users');
    const data = await response.json();
    // console.log(data)
    const map1 = playerData.map(
        x => x.display_name
    )
    console.log(map1)

    // data.forEach(obj => {
    //     Object.entries(obj).forEach(([key, value]) => {
    //         console.log(`${key} ${value}`);
    //     });
    //     console.log('-------------------');
    // });
}


fetchData()