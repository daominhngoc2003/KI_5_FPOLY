// ECMA chuẩn ES 6
// Làm việc với biến
/**
 * 1. Khai báo biến sử dụng var, let và const
 * 2. Đặt tên biến: Danh từ
 * */
var a = 10;
a = 20;
console.log(a);

let b = 10;
b = 20;
console.log(b);

const c = 10;
console.log(c);

// mặc định: Không dùng var, mà sử dụng const
// Khi xác định biến
// có sự thay đổi giá trị thì sử let

// Khai baos mang
const names = ["Kien", "Dat", "Lam"];
// truy cap vao element
const nameEl = document.querySelector("#nameEl");

let result = "";
for (let i = 0; i < names.length; i++) {
    result += "<div>" + names[i] + "</div>";
}
nameEl.innerHTML = result;

// number, string, boolean, underfine
// array, object -> Tham chieu

const myArr = [1, 2, 3, 4];
myArr.push(5);

/**
 *
 */

// function declaration | function name
console.log("function name", sum(10, 20));
function sum(a, b) {
    return a + b;
}
// function expression
const sum2 = function (a, b) {
    return a + b;
};
sum2(10, 20);
// arrow function
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(10, 20));

function showProduct(products) {
    if (!Array.isArray(products)) return false;
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += "<div>" + products[i] + "</div>";
    }
    return result;
}
function total(a, b) {
    if (typeof a != "number" || typeof b !== "number") return false;
    return a + b;
}
