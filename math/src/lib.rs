#[no_mangle]
pub extern fn add2numbers(n1: i32, n2: i32) -> i32 {
    return n1 + n2;
}

#[no_mangle]
pub extern fn fibonacci(x: i32) -> i32 {
  if x <= 2 {
    return 1;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}