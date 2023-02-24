const ffi = require("ffi-napi");

const lib = ffi.Library("../math/target/release/libmath",{
    'add2numbers':["int",["int","int"]],
    'fibonacci': ['int', ['int']]
})

function fibonacci (n) {
    if(n <= 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
  
module.exports.fibonacci ={
    js:fibonacci,
    rust: lib.fibonacci,
}