// let playerData = []


$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/users',
            type: 'GET',
            success: function(result) {
                playerData = result.map(result => result.display_name);
                console.log(playerData);
                $("#container").append(JSON.stringify(playerData));
                // playerData = result
                // console.log(playerData)
            },
            error: function(err) {
                console.log(err)
            }
    })
})

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/users',
            type: 'GET',
            success: function(result) {
                playerData = result.map(result => result.metadata.team_name);
                console.log(playerData);
                $(".team-name").append(JSON.stringify(playerData));
                // playerData = result
                // console.log(playerData)
            },
            error: function(err) {
                console.log(err)
            }
    })
})
    