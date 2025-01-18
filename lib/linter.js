const { parseCode } = require('./parser');

function lint(file, rules, config) {
    const PARSED = parseCode(file.content);
    console.log(PARSED)
    return [];
}

module.exports = { lint };