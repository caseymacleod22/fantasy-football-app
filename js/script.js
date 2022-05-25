// const BASE_URL = 'https://api.sleeper.app/v1/'
let playerData = []

async function fetchData() {

    const response = await fetch('https://api.sleeper.app/v1/league/784456593403224064/users');
    const data = await response.json();
    console.log(data)
    const map1 = data.map(
        x => x.display_name
    )
    console.log(map1)
}

fetchData()