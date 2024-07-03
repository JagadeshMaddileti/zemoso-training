const array_1=['1','3','5','2','10']
array_1.push('9')
console.log(array_1.toString())
array_1.at(2)
array_1.pop()
console.log(array_1.join('*'))
array_1.shift()
array_1.unshift('32')
delete array_1[3]
const array_2=['John','20','england']
console.log(array_1.concat(array_2))
const array_3=[[7,2],[4,3],[5,6]]
console.log(array_3.flat())
console.log(array_1.slice(2))
console.log(array_1)
array_2.splice(1,1,'25')
console.log(array_2)

const double=array_1.map(x=>x*2);
console.log(double)

const filtered_number=array_1.filter(x=>x<10)
console.log(filtered_number)

const find_number=array_1.find(x=>x<10)
console.log(find_number)

console.log(array_1.sort())

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const index = numbers.findIndex(x => x > 2);
console.log(index);

const even_number = numbers.some(x => x % 2 === 0);
console.log(even_number);

const check_number = numbers.every(x => x % 2 === 0);
console.log(check_number);

console.log(numbers.includes(2))
console.log(numbers.reverse())
console.log(numbers.indexOf(2))

numbers.forEach(x=>console.log(x));