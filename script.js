(function() {
    startGame();
    var currentPlayer = "player-1";
    var slot = $(".slot");
    var scoreCharizard = 0;
    var scoreBlastoise = 0;

    function startGame() {
        $(".column").on("click", function(e) {
            var slotsinColumn = $(e.currentTarget).find(".slot");
            for (var i = 5; i >= 0; i--) {
                if (
                    !slotsinColumn.eq(i).hasClass("player-1") &&
                    !slotsinColumn.eq(i).hasClass("player-2")
                ) {
                    slotsinColumn.eq(i).addClass(currentPlayer);
                    break;
                }
            }
            if (i == -1) {
                return;
            }
            if (victoryHorizonalVertical(slotsinColumn)) {
                showVictory();
            } else if (victoryHorizonalVertical($(".row" + i))) {
                showVictory();
            } else if (victoryDiagonal(diagonal)) {
                showVictory();
            }
            switchPlayers();
        });
    }

    function victoryHorizonalVertical(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
            } else {
                count = 0;
            }
            if (count == 4) {
                return true;
            }
        }
    }

    var diagonal = [
        [0, 7, 14, 21],
        [6, 13, 20, 27],
        [12, 19, 26, 33],
        [18, 25, 32, 39],
        [1, 8, 15, 22],
        [7, 14, 21, 28],
        [13, 20, 27, 34],
        [19, 26, 33, 40],
        [2, 9, 16, 23],
        [8, 15, 22, 29],
        [14, 21, 28, 35],
        [20, 27, 34, 41],
        [5, 10, 15, 20],
        [11, 16, 21, 26],
        [17, 22, 27, 32],
        [23, 28, 33, 38],
        [4, 9, 14, 19],
        [10, 15, 20, 25],
        [16, 21, 26, 31],
        [22, 27, 32, 37],
        [3, 8, 13, 18],
        [9, 14, 19, 24],
        [15, 20, 25, 30],
        [21, 26, 31, 36]
    ];

    function victoryDiagonal(diagonal) {
        for (var i = 0; i < diagonal.length; i++) {
            var count = 0;
            for (var j = 0; j < diagonal[i].length; j++) {
                if (slot.eq(diagonal[i][j]).hasClass(currentPlayer)) {
                    count++;
                    if (count == 4) {
                        return diagonal[i];
                    } else {
                        count == 0;
                    }
                }
            }
        }
    }

    function showVictory() {
        $("#victory").show();
        $(".column").off("click");
        if (currentPlayer == "player-1") {
            $("#victory-text").text("Charizard wins!");
            scoreCharizard++;
            $("#score-charizard").text(scoreCharizard);
        } else {
            $("#victory-text").text("Blastoise wins!");
            scoreBlastoise++;
            $("#score-blastoise").text(scoreBlastoise);
        }
        $("#victory-score").text(
            "Current score: " + scoreCharizard + " - " + scoreBlastoise + "!"
        );
    }

    function switchPlayers() {
        if (currentPlayer == "player-1") {
            currentPlayer = "player-2";
            $(".red-image img").addClass("attack");
            $(".blue-image img").removeClass("attack");
        } else {
            currentPlayer = "player-1";
            $(".blue-image img").addClass("attack");
            $(".red-image img").removeClass("attack");
        }
    }

    $(".button").on("click", function() {
        $("#victory").hide();
        playAgain();
    });

    function playAgain() {
        $(".slot").removeClass("player-1");
        $(".slot").removeClass("player-2");
        startGame();
    }
})();
