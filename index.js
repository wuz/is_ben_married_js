"use strict";

var fetch = require("node-fetch");

function isBenMarried() {
  return fetch("https://isbenmarriedyet.com/api.json")
    .then((res) => res.json())
    .then(({ married }) => (married ? "Yes" : "No"));
}

function main() {
  isBenMarried().then(console.log);
}

main();
