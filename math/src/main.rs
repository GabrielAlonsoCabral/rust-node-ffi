use math::{add2numbers, fibonacci};

fn main() {
    let output_add_2_numbers: i32 = add2numbers(10, 20);
    let output_fibonacci: i32 = fibonacci(40);
    
    assert_eq!(output_add_2_numbers, 30);
    assert_eq!(output_fibonacci, 102334155);
}
