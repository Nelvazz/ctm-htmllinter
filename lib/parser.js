const PARSE = require('parse5');

function parseCode(code) {
    return PARSE.parse(code);
}

module.exports = { parseCode };