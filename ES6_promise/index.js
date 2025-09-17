// const myPromise = new Promise((resolve, reject) => {
//     resolve({ status: 200, message: "I am resolved---5" });
// });


// console.log("----1");
// myPromise
//     .then((result) => {
//         console.log(result);
//     })

// console.log("----", myPromise);
// console.log("----3");


// function resolvePromise() {
//     return new Promise((resolve, reject) => {
//         resolve({ status: 200, message: "I am resolved---5" });
//     });
// }
// console.log("----", resolvePromise() instanceof Promise);





//const myPromise = Promise.resolve("I am resolved");
//const myPromise = new Promise((resolve, reject) => { resolve("resolve") });


// function myFunctionPromise() {
//     return "I am a promise";
// }

// const resolvePromise = Promise.resolve(myFunctionPromise());
// console.log("resolvePromise---", resolvePromise);


// const innerPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("done!");
//     }, 1000);
// });

// const outerPromise = Promise.resolve(innerPromise);
// console.log("outerPromise---", outerPromise);

// innerPromise.then((result) => {
//     console.log("result---", result);
// })

/*************************Konverton nje vlere ne Promise************************************** */

// function myFunctionPromise() {
//     return "I am a promise";
// }

// Promise.resolve(myFunctionPromise())
// .then((result => {
//   console.log("result----", result);
//   return result;
// }))
// .catch((error) => {
//   console.log("error----", error);
//   return error;
// })
/*************************Konverton nje vlere ne Promise***************************************/




/*************************allSettled in  Promise***************************************/
// const myPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am first promise")
//     }, 2000);
// });


// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I am second promise")
//     }, 3000);
// });

// Promise.allSettled([myPromise1, myPromise2])
//     .then((results) => {
//         console.log("results----", results);
//     })
//     .catch((error) => {
//         console.log("error----", error);
//     })
/*************************allSettled in  Promise***************************************/


/*************************race in  Promise********************************************/
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am first promise")
    }, 5000);
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am second promise")
    }, 3000);
});

Promise.race([myPromise1, myPromise2])
    .then((results) => {
        console.log("results----", results);
    })
    .catch((error) => {
        console.log("error----", error);
    })
/*************************race in  Promise********************************************/


/*************************all in  Promise********************************************/
// const myPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am first promise")
//     }, 5000);
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am second promise")
//     }, 3000);
// });

// function handleAllPromises() {
//     const myPromise = [myPromise1, myPromise2];
//     Promise.all(myPromise)
//         .then((results) => {
//             console.log("results----", results);
//             return
//         })
//         .catch((error) => {
//             console.log("error----", error);
//             return
//         })
// }

// handleAllPromises();
/*************************all in  Promise********************************************/



// function getFullResponseFromAPI(success) {
//     if (success) {
//         return Promise.resolve({ status: 200, body: 'Success' })
//     } else {
//        return Promise.reject(new Error('The fake API is not working currently'))
//     }
// }

// console.log(getFullResponseFromAPI(true));

