const RULES = {
    avoidEmptyAlt: {
        message: "Ensures all <img> tags have an 'alt' attribute.",
        check(node) {
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
    noNestedCss: {
        message: "Remove nested CSS style.",
        check(node) {
            if (node?.attrs?.find(attribute => attribute.name === 'style')) return {
                    status: true,
                    lines: node?.loc?.start?.line
                };
            return {
                status: false,
                lines: ''
            }
        },
    },
    noDuplicateId: {
        message: "Duplicate ID detected.",
        check(node) {
            return {
                status: false,
                lines: ''
            }
        },
    },
    missingDoctype: {
        message: "A doctype is required, missing <!DOCTYPE>.",
        check(node, source) {
            let bool = true;
            if (node.nodeName === "#documentType") bool = false;
            return {
                status: bool,
                lines: undefined
            }
        },
    },
    missingHeightAndWidth: {
        message: "An <img> needs a 'width' and 'height' attribute.",
        check(node, source) {
            if (node.nodeName === "img"
                && (!node?.attrs?.find(attribute => attribute.name === 'height') && !node?.attrs?.find(attribute => attribute.name === 'width'))
                || (!!node?.attrs?.find(attribute => attribute.name === 'height' && attribute.value.length === 0))
                || (!!node?.attrs?.find(attribute => attribute.name === 'width' && attribute.value.length === 0))) return {
                    status: true,
                    lines: node?.loc?.start?.line
                };
            return {
                status: false,
                lines: ''
            }
        },
    },
    consistentIndentation: {
        message: "Inconsistent indentation detected.",
        check(config, source) {
            let bool = false;
            let lines = 0;
            const LINES = source.split("\r\n");
            LINES.forEach((line, index) => {
                if (line.trim().length === 0) return;
                const SPACES = line.search(/\S|$/);
                if (SPACES % config !== 0) return lines = index + 1, bool = true;
            });
            return {
                status: bool,
                lines: lines
            }
        },
    },
    noTrailingWhitespace: {
        message: "Trailing whitespace detected.",
        check(node, source) {
            let bool = false;
            let lines = '';
            const LINES = source.split("\r\n");
            LINES.forEach((line, index) => {
                if (/[ ]+$/.test(line)) return lines = index + 1, bool = true;
            });
            return {
                status: bool,
                lines: lines
            }
        },
    },
    fileNamingConvention: {
        message: "File name '{filename}' does not follow the required naming convention.",
        check(filename) {
            return {
                status: !/^[a-z]+(?:[A-Z]{1}[a-z]+)*\.html$/.test(filename),
                lines: ''
            }
        },
    },
}

module.exports = RULES;