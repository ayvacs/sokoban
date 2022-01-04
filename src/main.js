var newLine = " ";

// Variables
var windowEmoji = [
    "⬛️",
    "⬜"
];

// Configuration
var config = {
    windowLength: 16,
    windowHeight: 9,

    // Canvas height should be two larger than the
    // respective window axis
    canvasLength: 18,
    canvasHeight: 11
};

// Functions
function print(input) {
    if (typeof(input) == "object") {
        var str = "\n";
        input.forEach(function(content) {
            str += "    " + content + "\n";
        });

        console.log(str + "\n");
    } else {
        var i = input.split("\n");
        i.pop();
        i.pop();
        print(i);
    };
};

function generateWindow() {
    var currentWindow = [[]];

    // Generate rows
    for (var x = 1; x < config.canvasHeight; x++) {
        currentWindow[x] = [];
        for (var y = 0; y < config.canvasLength; y++) {
            currentWindow[x][y] = 1;
        }
    };

    return currentWindow
};

function printWindow() {
    var currentWindow = generateWindow();

    var totalCell = "";
    currentWindow.forEach(function (row, i) {
        var currentRow = "";
        row.forEach(function (cell, i) {
            var emojiCode;
            if (cell == false) {
                emojiCode = 0;
            } else if (cell == true) {
                emojiCode = 1;
            } else {
                emojiCode = cell;
            };

            var emoji;
            if (windowEmoji[emojiCode]) {
                emoji = windowEmoji[emojiCode];
            } else {
                emoji = emojiCode;
            }
            currentRow += emoji;
        });
        totalCell += currentRow + "\n";
    });
    print(totalCell);
};

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