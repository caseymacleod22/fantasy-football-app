// League info accordion function
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
                $.map( scoringData, function( val, i ) {
                    $('.accordion-list').append(val + i)
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
                console.log(err)
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
                    $(`#avatar${item}`).attr("src", avatar)
                });
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
                playerData = result.slot_to_roster_id[1]
                console.log(playerData)
                $('.draft-slots').append(playerData)
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