const eventbox = require('./eventbox')
const streambox = require('./streambox')

const pirates = ['Lilly', 'Joan', 'Adlane', 'Zoro', 'Usopp']

eventbox.empty()
eventbox.withArgs(pirates)
streambox.duplicate("test.txt")

let re = new RegExp('[a-z]','g')


function uppercase(str) {
    let result = ''
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32)
        }
        else {
            result += String.fromCharCode(code)
        }
    }
    return result
}

streambox.transform(process.argv[2], re, uppercase, false)