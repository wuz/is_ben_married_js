#!/usr/bin/env node
"use strict";

const fetch = require("node-fetch");

const isBenMarried = () =>
  fetch("https://isbenmarriedyet.com/api.json")
    .then((res) => res.json())
    .then(({ married }) => (married ? "Yes" : "No"));

const main = async () => {
  console.log(await isBenMarried());
};

main();
