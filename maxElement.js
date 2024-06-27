function maxElement(ar){
    max=ar[0]
    for(let i of ar){
        if(max<i){
            max=i
        }
    }
    return max;
}
const ar=[56,26,37,86,39]
console.log(maxElement(ar));
