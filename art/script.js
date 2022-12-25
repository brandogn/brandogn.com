// Node Utils
const path = require("path");
const fs = require("fs");
// in/out
const input = path.join(__dirname);
const output = path.join(__dirname, "art_out.txt");

// Begin Script: read art files and write to art_out.txt

const artFiles = fs.readdirSync(input);
let artInnerHTML = "";

artFiles.forEach((file) => {
  artInnerHTML += `<img src="/art/${file}" />\n`;
});

fs.writeFileSync(output, artInnerHTML);
