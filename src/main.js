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
        input.replace("⬜"," ");
        var i = input.split("\n");
        i.pop();
        i.pop();
        print(i);
    };
};

function generateWindow() {
    var window = [];
    // Generate rows
    for (var x = 0; x <= config.canvasHeight; x++) {
        window[x] = [];
    };

    // Generate border
    // Generate border TOP
    for (var x = 0; x < config.canvasLength; x++) {
        window[0][x] = windowEmoji[1];
    };

    // Generate border BOTTOM
    for (var x = 0; x < config.canvasLength; x++) {
        window[config.canvasHeight - 1][x] = windowEmoji[1];
    };

    // Generate border LEFT
    for (var x = 0; x < config.canvasHeight; x++) {
        window[x][1] = windowEmoji[1];
    }

    // Generate border RIGHT
    for (var x = 0; x < config.canvasHeight; x++) {
        //window[x][0] = windowEmoji[1];
    }

    return window
};

function printWindow() {
    var window = generateWindow();

    var totalCell = "";
    window.forEach(function (row, i) {
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

        if (i == row.length + 1) {
            totalCell += currentRow;
        } else {
            totalCell += currentRow + "\n";
        };
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