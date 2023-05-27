// object = { key : value }

const person = {
    name: "Dat",
    age: 18,
    address: {
        city: "HCM",
    },
};
const {
    name,
    age,
    address: { city },
} = person;
// const name = person.name;
// const age = person.age;
// const address = person.address;

const showInfo = ({ name, age }) => {};
showInfo(person);

function useState(initialState) {
    let state = initialState;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return [getState, setState];
}

const [count, setCount] = useState(0);
console.log("count", count());
setCount(20);
console.log("count", count());
