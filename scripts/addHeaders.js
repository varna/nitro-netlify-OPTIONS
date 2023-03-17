const fs = require('fs');

// Access-Control-Allow-Method: POST, GET, OPTIONS
const content = `/*
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: *
  Access-Control-Allow-Headers: *
  Access-Control-Max-Age: 0`;

console.log('Hotfix: _headers');
fs.writeFile('./dist/_headers', content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
