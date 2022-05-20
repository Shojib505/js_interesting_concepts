//that is a global varibale in js global scope
const favNum = 27;

function add(first, second) {
    // console.log(mood);                              // hoisting

    //that is a local varibale in JS local scope
    const result = first + second;

    if (result > 9) {
        //MOST IMPORTENT rule-1= {hoisting}
        /*if you define your vairbale with 'var' datatype it will become
        "local scope" coz it is unpredictable */

        //MOST IMPORTENT rule-2= {global leaking}
        /*if you don't put any data type on varibale then it will becoem
        "global scope" which is dangarous for code
        (hrad to handle which one work is for block scope& which one is for local scope )*/

        /*
        example- for loop = "for(var i=0; i<10;i++)" 
        this 'i' will be accessable from outside the for loop or block   {one the another hand}
        example- for loop = "for(let i=0; i<10;i++)" 
        this 'i' will just  accessable inside the loop noware else
        */


        //that is also a local varibale and in JS it's a block SCOPE
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);
