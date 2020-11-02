const events = require('events');
let eventEmitter = new events.EventEmitter();

function empty() {
    let myEventHandler = function () {
        console.log("Choopper")
    }

    eventEmitter.on('hi', myEventHandler)
    eventEmitter.emit('hi')
}

function withArgs(array) {
    array.forEach(element => {
        console.log(`Here come's a new pirate ->> ${element}`)
    });
}

exports.empty = empty;
exports.withArgs = withArgs;