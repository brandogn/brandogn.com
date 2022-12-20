const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "art");
const out = path.join(__dirname, "art_out.txt");

const artFiles = fs.readdirSync(directoryPath);
let artInnerHTML = "";

artFiles.forEach((file) => {
  artInnerHTML += `<img src="/art/${file}" />\n`;
});

console.log(artInnerHTML);

fs.writeFileSync(out, artInnerHTML);
