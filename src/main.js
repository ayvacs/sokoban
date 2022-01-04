// Variables
var instructions = [
    "███████  ██████  ██   ██  ██████  ██████   █████  ███    ██ ",
    "██      ██    ██ ██  ██  ██    ██ ██   ██ ██   ██ ████   ██ ",
    "███████ ██    ██ █████   ██    ██ ██████  ███████ ██ ██  ██ ",
    "     ██ ██    ██ ██  ██  ██    ██ ██   ██ ██   ██ ██  ██ ██ ",
    "███████  ██████  ██   ██  ██████  ██████  ██   ██ ██   ████ .js",
    "",
    "=> GitHub: https://github.com/frogweezer/sokoban",
    "",
    "",
    "           Hi!",
    "   Welcome to Sokoban!",
    "",
    "Your objective is to push the box",
    "into the hole.",
    "",
    "Type [w], [a], [s] and [d] to move",
    "",
    "Type [help] to display this message"
];

var windowEmoji = [
    "⬛️",
    "⬜",
    "😳"
];

var levelCount = 1;

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
    var plrCurrentPos = {
        x: 1,
        y: 1
    }
    var currentWindow = [[]];

    // Generate rows
    for (var y = 1; y < config.canvasHeight + 1; y++) {
        currentWindow[y] = [];
        for (var x = 1; x <= config.canvasLength - 1; x++) {
            if (y == 1 || x == 1 || x == config.canvasLength - 1 || y == config.canvasHeight - 1) {
                currentWindow[y][x] = 1;
            } else {
                currentWindow[y][x] = 0;
            };
        };
    };

    currentWindow[plrCurrentPos.x + 1][plrCurrentPos.y + 1] = 2;

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
            } else if (cell == "P") {
                emojiCode = 2;
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
    print("=> Level " + levelCount + " / ∞" + "\n" + totalCell);
};

print(instructions);
printWindow();