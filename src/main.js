var newLine = " ";

// Functions
function print(input) {
    if (typeof(input) == "object") {
        var str = "\n";
        input.forEach(function(content) {
            str += "    " + content + "\n";
        });

        console.log(str + "\n");
    } else {
        console.log("\n " + input + "\n ");
    };
};

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
        totalCell += currentRow;
    });
    print(totalCell);
};

// Variables
var windowEmoji = [
    "⬜️",
    "⬛️"
];

print([
    "*************************",
    "           Hi!",
    "   Welcome to Sokoban!",
    "*************************",
    "",
    "Your objective is to push the box",
    "into the hole.",
    "",
    "Type [w], [a], [s] and [d] to move",
    "",
    "Type [help] to display this message"
]);


printWindow();