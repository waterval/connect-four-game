# Connect Four

Connect Four is a game played by two players. They take turns in dropping a colored disc from the top into a grid until it hits the lowest available slot. A player has seven columns to choose from and can fill a total of six rows. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

The project exists so I can play Connect Four with my nephews and nieces who are a big fan of Pokemon. I hope this game will also bring as much joy in your life as it does to ours.

## Preview

<p align="center">
<img src="/public/connect-four-preview.png" alt="Preview of Connect Four">
</p>

## Features

-   Two player game
-   Pokémon theme
-   Victory message featuring a cool Pokémon giphy
-   Scoreboard
-   New game option
-   Animation featuring two fighting Pokémon

## Technology

-   HTML
-   CSS
-   Keyframes
-   Flexbox
-   JavaScript
-   jQuery

## Code Example

```
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
```

## Local usage

Download all files and open the index.html file in your browser.

## Credits

The idea for this project came from David Friedman from Spiced Academy.

## Contribute

Contribution is much appreciated. Please let me know about any bugs and ideas for improvements.

## License

No license due to copyright owned by Nintendo, Creatures and Game Freak.
