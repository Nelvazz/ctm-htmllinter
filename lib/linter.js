const { parseCode } = require('./parser');

function traverse(node, visitors) {
    // console.log(node)

    // nodeName = "htmlElement" (div, img, li, ul, p, h1, etc...)
    // attrs = [htmlAttributes] (class, alt, id, href, src, etc...)
    // childNodes = [htmlChildComponents]

    delete node.parentNode
    if (!node.nodeName || ['#text', '#comment', '#documentType'].includes(node?.nodeName)) return;
    if (visitors.enter) visitors.enter(node);
    for (const KEY in node) {
        const CHILD = node[KEY];
        if (Array.isArray(CHILD)) {
            CHILD.forEach((c) => traverse(c, visitors));
        }
    }
}

function lint(file, rules, config) {
    const PARSED = parseCode(file.content);
    const ENABLEDRULES = Object.keys(rules).filter((key) => config.rules[key] !== false);
    const ISSUES = [];

    traverse(PARSED, {
        enter(node) {
            ENABLEDRULES.forEach((ruleKey) => {
                const RULE = rules[ruleKey];
                const CHECK = RULE.check(node, file.content);
                if (CHECK.status) {
                    ISSUES.push({ message: `Line ${CHECK.lines}: `.gray + `${RULE.message}`, node });
                }
            });
        },
    });
    return ISSUES;
}

module.exports = { lint };