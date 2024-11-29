//Q1.FLATTING
let arrays=[[1,2,3],[4,5],[6]]
let newarray=arrays.flat()
console.log(newarray)

//Q2. YOUR OWN LOOP
function loop(value,test,update,body){
    while(test(value)){
        body(value)
        value=update(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log)

//Q3 Everything
function every(array,test){
    for(let element of array){
        if(!test(element)){
            return false
        }
    }
    return true
}
function every(array, test) {
    return !array.some(element=>!test(element));
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10)); 
console.log(every([], n => n < 10));