const fs = require('fs');

function tusharReadFile() {
    console.log("inside tusharfile");
    return new Promise(function(resolve) {
        console.log("inside promise")
        fs.readFile("a.txt", "utf-8", function(err, data) {
            console.log("before resolve");
            resolve(data);
        });
    });
}

// Callback function to call
function onDone(data) {
    console.log(data);
}

tusharReadFile().then(onDone);

