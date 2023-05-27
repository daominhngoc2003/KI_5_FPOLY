// loop
const products = [
    "Product A", // item
    "Product B", // item
    "Product C", // item
];
for (let i = 0; i < products.length; i++) {
    // biết điểm dừng, dựa theo length
    // dựa vào index để hiển thị
    console.log("for ", products[i]);
}
// for in
for (let item in products) {
    console.log("for in ", products[item]);
}
// for of
for (let item of products) {
    console.log("for of ", item);
}
// forEach
products.forEach((item, index) => console.log(`${item} ${index}`));

// map -> Tạo ra 1 mảng mới và có thể thay đổi giá trị
const newMapProducts = products.map((item, index) => {
    return `${item} ${index + 1}`;
});

// const app = document.querySelector("#app");
// app.innerHTML = products.map((item) => `<div>${item}</div>`).join("");

// filter -> Tạo ra 1 mảng, lọc ra các phần tử thỏa mãn điều kiện
const newFilterProducts = products.filter((item) => {
    return item != "Product C";
});
// reduce

const numbers = [
    { id: 1, name: "Product A", price: 200 }, // accumulator
    { id: 2, name: "Product B", price: 300 },
    { id: 3, name: "Product C", price: 400 },
];
const total = numbers.reduce((accumulator, nextValue) => accumulator + nextValue.price, 0);

// Find -> Tìm phần tử trong mảng -> trả về 1 phần tử thỏa mãn điều kiện
const products2 = [
    { id: 1, name: "Product A", price: 200 }, // item
    { id: 2, name: "Product B", price: 300 }, // item
    { id: 3, name: "Product C", price: 400 }, // item
];

const foundProduct = products2.find((item) => item.id == 2);
console.log(foundProduct);
