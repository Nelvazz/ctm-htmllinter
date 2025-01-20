// const PATH = require("path");
// const FS = require("fs");
// const CONFIG = FS.existsSync(PATH.resolve("./htmllinter.config.json")) ? require(PATH.resolve("./htmllinter.config.json")) : require("../htmllinter.config.json");
const RULES = {
    avoidEmptyAlt: {
        message: "Ensures all <img> tags have an 'alt' attribute.",
        check(node) {
            console.log(node)
            if (node.nodeName === "img"
                && !node?.attrs?.find(attribute => attribute.name === 'alt')
                || !!node?.attrs?.find(attribute => attribute.name === 'alt' && attribute.value.length === 0)) return {
                    status: true,
                    lines: node?.loc?.start?.line
                };
            return {
                status: false,
                lines: ''
            }
        },
    },
}

module.exports = RULES;