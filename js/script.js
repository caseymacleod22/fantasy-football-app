//Capitalization function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Comment Button submission
$(".comment-button").click(function(event) {
    event.preventDefault()
    console.log("comment submitted!")
})

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


//Scoring Settings function
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


//Fetches team starters
$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/rosters',
            type: 'GET',
            success: function(result) {
                teamData = result.map(result => result.starters);
                teamData.forEach((starter, item) => {
                    $(`.starters-list${item}`).append('<li>'+starter+'</li>');
                    // console.log(starter)
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});

// Fetches total teams in league
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

// Displays owner names
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

// Displays team names
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

// Displays team avatar
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

// Displays information about draft
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

// Displays draft status
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

// Displays draft start time
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


// Displays recently added players
$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/transactions/1',
            type: 'GET',
            success: function(result) {
                playerAdded = result.map(result => result.adds).slice(0, 15);
                let filteredPlayer = playerAdded.filter(player => player !== null)
                Object.values(filteredPlayer).forEach(value => {
                    console.log(value, filteredPlayer[value]);
                    $(`.added`).append('<li>'+JSON.stringify(value, filteredPlayer[value])+ '</li>')
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});

// Displays recently dropped players
$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/league/784456593403224064/transactions/1',
            type: 'GET',
            success: function(result) {
                playerDropped = result.map(result => result.drops).slice(0, 15);let filteredPlayer = playerDropped.filter(player => player !== null)
                Object.values(filteredPlayer).forEach(value => {
                    console.log(value, filteredPlayer[value]);
                    $(`.dropped`).append('<li>'+JSON.stringify(value, filteredPlayer[value])+ '</li>')
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});

// Displays players trending up
$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/players/nfl/trending/add?lookback_hours=240&limit=15',
            type: 'GET',
            success: function(result) {
                trendingUp = result.map(result => result.player_id);
                trendingUp.forEach((player) => {
                    $(`.trending-up`).append('<li>'+player+'</li>')
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});

// Displays players trending down
$(document).ready(function() {
    $.ajax({
            url: 'https://api.sleeper.app/v1/players/nfl/trending/drop?lookback_hours=240&limit=15',
            type: 'GET',
            success: function(result) {
                trendingDown = result.map(result => result.player_id);
                trendingDown.forEach((player) => {
                    $(`.trending-down`).append('<li>'+player+'</li>')
                });
            },
            error: function(err) {
                console.log(err)
            }
    })
});