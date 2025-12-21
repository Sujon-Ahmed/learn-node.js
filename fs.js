// Load the file system module
let fs = require("fs");

// Read the contents of a file asynchronously
fs.readFile("myfile.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

console.log("Reading file... (this runs first!");
