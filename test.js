var path = require('path');

var command = getCurrentScriptPath();

console.log(`Usage: ${command} <foo> <bar>`);

function getCurrentScriptPath () {
    // Relative path from current working directory to the location of this script
    var pathToScript = path.relative(process.cwd(), __dirname);

    // Check if current working dir is the same as the script
    if (process.cwd() === __dirname) {
        // E.g. "./foobar.js"
        return '.' + path.sep + pathToScript;
    } else {
        // E.g. "foo/bar/baz.js"
        return pathToScript;
    }
}