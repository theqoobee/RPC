'use strict';

/* eslint-env browser */


console.log("aRE YOU READY KIDS???");

// const { webFrame } = require('electron');

const snek = document.getElementById('snek');
const counter = document.getElementById('boops');

console.log("EYE EYE CAPTAIN");
window.boops = 0;
function boop() {
  window.boops += 1;
  console.log(window.boops);
  counter.innerHTML = `${window.boops} BOOPS`;
}

snek.onmousedown = () => {
  snek.style['font-size'] = '550%';
};

snek.onmouseup = () => {
  snek.style['font-size'] = '500%';
};
