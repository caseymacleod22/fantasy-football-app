//Capitalization function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// let test = 'this is a string'
// console.log(capitalizeFirstLetter(test))

// Accordion function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064',
            type: 'GET',
            success: function(result) {
                scoringData = result.scoring_settings
                $.map(scoringData, function(val, i) {
                    $('.accordion-list').append('<li>' + i +': ' + val)
                  });
            },
            error: function(err) {
                // console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/rosters',
            type: 'GET',
            success: function(result) {
                teamData = result.map(result => result.starters);
                teamData.map((starter, item) => {
                    $(`.starters-list${item}`).append('<li>'+starter+'</li>');
                    // console.log(starter)
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064',
            type: 'GET',
            success: function(result) {
                playerData = result.total_rosters
                $('.rosters').append(playerData)
            },
            error: function(err) {
                // console.log(err)
            }
    })
});

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
                // console.log(err)
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
                // console.log(err)
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
                    $(`#avatar${item}`).attr("src", avatar)
                });
            },
            error: function(err) {
                // console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/draft/784456593403224065',
            type: 'GET',
            success: function(result) {
                draftData = result.type
                console.log(draftData)
                $('.draft-type').append(draftData)
            },
            error: function(err) {
                console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/draft/784456593403224065',
            type: 'GET',
            success: function(result) {
                playerData = result.status
                console.log(playerData)
                $('.draft-status').append(playerData)
            },
            error: function(err) {
                console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/draft/784456593403224065',
            type: 'GET',
            success: function(result) {
                startData = result.start_time
                console.log(startData)
                $('.start-time').append(startData).JSON
            },
            error: function(err) {
                console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/transactions/1',
            type: 'GET',
            success: function(result) {
                playerAdded = result[2].adds
                for (let [key, value] of Object.entries(playerAdded)) {
                    console.log(playerAdded);
                    $('.added').append(key)
                }
                playerDropped = result[2].drops
                for (let [key, value] of Object.entries(playerDropped)) {
                    // console.log(key, value);
                    $('.dropped').append(key)
                }
            },
            error: function(err) {
                console.log(err)
            }
    })
});

$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/players/nfl/trending/add?lookback_hours=240&limit=15',
            type: 'GET',
            success: function(result) {
                playerAdded = result.map(result => result.player_id);
                playerAdded.forEach((player) => {
                    $(`.trending-players`).append('<li>'+player+'</li>')
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});