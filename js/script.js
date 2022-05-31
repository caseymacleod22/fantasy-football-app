// let playerData = []


$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/users',
            type: 'GET',
            success: function(result) {
                playerData = result[0].display_name
                $("#player1").append(JSON.stringify(playerData));
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
                playerData = result[0].metadata.team_name
                $(".team-name1").append(JSON.stringify(playerData));
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
                playerData = result[1].display_name
                $("#player2").append(JSON.stringify(playerData));
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
                playerData = result[1].metadata.team_name
                $(".team-name2").append(JSON.stringify(playerData));
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
                playerData = result[2].display_name
                $("#player3").append(JSON.stringify(playerData));
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
                playerData = result[2].metadata.team_name
                $(".team-name3").append(JSON.stringify(playerData));
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
                playerData = result[3].display_name
                $("#player4").append(JSON.stringify(playerData));
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
                playerData = result[3].metadata.team_name
                $(".team-name4").append(JSON.stringify(playerData));
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
                playerData = result[4].display_name
                $("#player5").append(JSON.stringify(playerData));
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
                playerData = result[4].metadata.team_name
                $(".team-name5").append(JSON.stringify(playerData));
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
                playerData = result[5].display_name
                $("#player6").append(JSON.stringify(playerData));
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
                playerData = result[5].metadata.team_name
                $(".team-name6").append(JSON.stringify(playerData));
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
                playerData = result[6].display_name
                $("#player7").append(JSON.stringify(playerData));
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
                playerData = result[6].metadata.team_name
                $(".team-name7").append(JSON.stringify(playerData));
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
                playerData = result[7].display_name
                $("#player8").append(JSON.stringify(playerData));
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
                playerData = result[7].metadata.team_name
                $(".team-name8").append(JSON.stringify(playerData));
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
                playerData = result[8].display_name
                $("#player9").append(JSON.stringify(playerData));
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
                playerData = result[8].metadata.team_name
                $(".team-name9").append(JSON.stringify(playerData));
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
                playerData = result[9].display_name
                $("#player10").append(JSON.stringify(playerData));
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
                playerData = result[9].metadata.team_name
                $(".team-name10").append(JSON.stringify(playerData));
                // playerData = result
                // console.log(playerData)
            },
            error: function(err) {
                console.log(err)
            }
    })
})
    