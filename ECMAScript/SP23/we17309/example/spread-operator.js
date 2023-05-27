const person = {
    name: "Dat",
    age: 20,
    child: {
        name: "Tai",
    },
};

// // spread-operator -> copy
// const person2 = {
//     ...person,
//     address: "Thai Binh",
// };

// // Object assign
// const person2 = Object.assign({ address: "Thai Binh" }, person);

// const person2 = JSON.parse(JSON.stringify(person));
const person2 = structuredClone(person);
person2.child.name = "Kien";

console.log("person 1", person);
console.log("person 2", person2);

// const products = [1, 2, 3, 4];
// products.push(5);
// console.log("products", products);
// const newProducts = [-1, ...products, 5];
// console.log("newProducts", newProducts); // [1,2,3,4,5];
