function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

//when you call clock 1 it's create it's own function 
let clock1 = stopWatch();
/*if you call a funtion0 which one is alson return another funtion1
then if that funtion1 has a varibale which is declared in function0 then
 it will resarverd that varibal inside him
 and it will create it's own closer/encapsulaion/prvater reffarance*/
console.log(clock1());
console.log(clock1());