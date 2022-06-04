$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/users',
            type: 'GET',
            success: function(result) {
                playerData = result.map(result => result.display_name);
                playerData.forEach((player, item) => {
                    $(`#player${item}`).append(player);
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/users',
            type: 'GET',
            success: function(result) {
                playerData = result.map(result => result.metadata.team_name);
                playerData.forEach((teamName, item) => {
                    $(`#team-name${item}`).append(teamName);
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/users',
            type: 'GET',
            success: function(result) {
                playerData = result.map(result => result.metadata.avatar);
                playerData.forEach((avatar, item) => {
                    $(`#avatar${item}`).append(avatar);
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});