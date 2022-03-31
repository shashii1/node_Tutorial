const path = require('path');
// console.log(path.sep)
const filePath = path.join('\external_folder','subfolder','file1.txt');
// console.log(filePath);

const absolute = path.resolve(__dirname,filePath);
console.log(absolute);
module.exports.path = absolute;