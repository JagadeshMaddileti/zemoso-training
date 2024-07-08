const array1=['1','3','5','2','10']
array1.push('9')
console.log(array1.toString())
array1.at(2)
array1.pop()
console.log(array1.join('*'))
array1.shift()
array1.unshift('32')
delete array1[3]
const array2=['John','20','england']
console.log(array1.concat(array2))
const array3=[[7,2],[4,3],[5,6]]
console.log(array3.flat())
console.log(array1.slice(2))
console.log(array1)
array2.splice(1,1,'25')
console.log(array2)

const double=array1.map(x=>x*2);
console.log(double)

const filteredNumber=array1.filter(x=>x<10)
console.log(filteredNumber)

const findNumber=array1.find(x=>x<10)
console.log(findNumber)

console.log(array1.sort())

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const index = numbers.findIndex(x => x > 2);
console.log(index);

const evenNumber = numbers.some(x => x % 2 === 0);
console.log(evenNumber);

const checkNumber = numbers.every(x => x % 2 === 0);
console.log(checkNumber);

console.log(numbers.includes(2))
console.log(numbers.reverse())
console.log(numbers.indexOf(2))

numbers.forEach(x=>console.log(x));