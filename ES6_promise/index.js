// const myPromise = new Promise((resolve, reject) => {
//     const success = { status: 200, message: "User is loged in" };
//     const fail = { status: 404, message: "User is not loged in" };
//     setTimeout(() => {
//         return resolve(success)
//     }, 2000);
// });

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve("second-promise")
//     }, 2000);
// });
// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve("third-promise")
//     }, 2000);
// });


// const myPromise = new Promise((resolve, reject) => {
//     resolve("resolve");

// });


// const myNumber = 1;
// const myName = "john";

// console.log(myNumber instanceof Promise)


// async function resolvePromise() {
//     try {
//         const first = Promise.resolve(await myPromise);
//         const second = await secondPromise;
//         const third = await thirdPromise;
//         return first;
//     } catch (error) {
//         return error;
//     }
// }

// resolvePromise()

// console.log("1")

// console.log("----", Promise.resolve("hello"))



const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("third-promise")
    }, 2000);
});



thirdPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("finally")
    })