const fs = require('fs');

const content = `/*
  Access-Control-Allow-Method: POST, GET, OPTIONS`;

console.log('Hotfix: _headers');
fs.writeFile('./dist/_headers', content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
