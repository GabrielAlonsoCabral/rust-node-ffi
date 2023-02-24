const RUNS = 100;
const FIB_SEQ = 30;
const lib = require('./lib');

function run (lang) {
  let i = RUNS;

  for (; i !== 0; i--) {
    lib.fibonacci[lang](FIB_SEQ);
  }
}

console.time("#js-fibonacci-time")
run("js")
console.timeEnd("#js-fibonacci-time")


console.time("#rust-fibonacci-time")
run("rust")
console.timeEnd("#rust-fibonacci-time")