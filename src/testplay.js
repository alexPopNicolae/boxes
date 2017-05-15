console.log('Play around with promises');
console.log('**************************');
console.log('');


let promiseToCleanTheRoom = new Promise(function(resolve, reject){
    //clean the room

    let isClean = true;

    if(isClean) {
        resolve('clean');
    } else {
        reject('not clean');
    }

});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('The room is ' + fromResolve);
}).catch(function(fromReject){
    console.log('The room is ' + fromReject);
});

let cleanRoom = function() {
    return new Promise(function(resolve,reject){
        resolve(' cleaned the room ');
    });
}

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject){
        resolve(message + ' remove garbage ');
    });
}

let winIcecream = function(message) {
    return new Promise(function(resolve, reject){
        resolve(message + ' won icecream ')
    });
}
//asta sunt promisuri care depind una de alta
cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return winIcecream(result);
}).then(function(result){
    console.log('finised ' + result);
});

//cum astepti ca toate din ele sa fie facute
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log('all promises have finished');
});


//play around with sets

let array = [1,3,4,5,6,7,8,9,10,11];
let iterator = array[Symbol.iterator]();

do {
    var it = iterator.next();
    console.log(it.value);
}
while (!it.done);
