// operações em Arrays
const array = [1, 3, 4, 5, 8, 9];

// função MAP
const newArray = array.map(
    function (item) {
        return item;
    }
)
console.log(newArray);

// função reduce
const soma = array.reduce(
    function (total, next) {
        return total + next;
    }
)
console.log(soma);

// função filter
const filter = array.filter(
    function (item) {
        return item % 2 === 0;
    }
)
console.log(filter);

// função find
const find = array.find(
    function (item) {
        return item === 4;
    }
)
console.log(find);