// Print instructions
var instructions = `
    *************************
            Hi!
    Welcome to Sokoban!
    *************************

    Your objective is to push the box
    into the hole.

    Type [w], [a], [s] and [d] to move
\n`;
console.log(instructions);

// Variables
var windowEmoji = [
    "⬜️",
    "⬛️"
];

// Functions
function printWindow() {
    var window = [
        [
            true,false
        ], [
            false
        ]
    ]

    var totalCell = "";
    window.forEach(function (row, _) {
        var currentRow = "";
        row.forEach(function (cell, i) {
            var emojiCode;
            if (cell == false) {
                emojiCode = 0;
            } else if (cell == true) {
                emojiCode = 1;
            };

            var emoji = windowEmoji[emojiCode];
            currentRow += emoji;
        });

        totalCell += currentRow + "\n";
    });

    console.log(totalCell);
}

printWindow();