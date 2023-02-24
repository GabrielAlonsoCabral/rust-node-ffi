const ffi = require("ffi-napi");

const lib = ffi.Library("../math/target/release/libmath",{
    'add2numbers':["int",["int","int"]]
})

let result = lib.add2numbers(100,50)
console.log(result)