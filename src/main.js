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
        var i = input.split("\n");
        i.pop();
        print(i);
    };
};

function printWindow() {
    var window = [
        [
            true,false
        ], [
            false
        ], [
            true,false,false,false,true
        ]
    ]

    var totalCell = "";
    window.forEach(function (row, i) {
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

        if (i == row.length + 1) {
            totalCell += currentRow;
        } else {
            totalCell += currentRow + "\n";
        };
    });
    print(totalCell);
};

// Variables
var windowEmoji = [
    "⬛️",
    "⬜"
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