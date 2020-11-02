const fs = require('fs');
const path = require('path');

function duplicate(filename) {
    let name = path.basename(filename, path.extname(filename))
    fs.createReadStream(filename).pipe(fs.createWriteStream(`${name}.copy.${path.extname(filename)}`))
    console.log(`File: ${filename} successfully duplicated!`)
}

function transform(filename, re, fn, in_stdout = true) {
    let file = fs.createReadStream(filename)
    let data = ''
    file.on('data', function(chunk) {
        data += chunk
    }).on('end', function() {

        if (re.test(data)) data = fn(data)
        if (in_stdout) {
            console.log(data)
        }
        else {
            fs.createWriteStream(filename).write(data)
            console.log(`File: ${filename} successfully transformed!`)
        }
    })
}

function csv2json(filename) {
    let header = []
    let temp = {}
    let result = {}

    
}

exports.duplicate = duplicate;
exports.transform = transform;