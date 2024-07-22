/*************************************Promise consume with .then and .catch************************************/

// const promiseResult = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({ message: "promise have been resolved", status_code: 200 });
// 		//reject({ message: "promise have been reject", status_code: 500 })
// 	}, 5000);
// });


// const promise_two_Result = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({ message: "promise have been resolved", status_code: 200 });
// 		//reject({ message: "promise have been reject", status_code: 500 })
// 	}, 5000);
// });


// promiseResult
// 	.then((result) => {
// 		console.log("result----", result);
// 		if (result.status_code === 404) {
// 			throw new Error("we could not proces this information")
// 		}

// 		promise_two_Result.then((result) => {
// 			return result;
// 		})
// 			.catch((error) => {
// 				return error;
// 			})
// 	})
// 	.catch((error) => {
// 		console.log("error----", error);
// 	});



/*************************************Promise consume with .then and .catch************************************/





/*************************************Promise Reject and Resolve***********************************************/

// function showResult() {
// 	return Promise.resolve(2);
// }

// console.log("showResult----", showResult());

// function uploadPhoto() {
// 	return Promise.reject(`cannot be processed`);
// 	//return Promise.resolve(` promise is resolved`);
// }

// uploadPhoto().then((result) => {
// 	console.log("result-----", result);
// }).catch((error) => {
// 	console.log("error-----", error);
// })
/*************************************Promise Reject and Resolve***********************************************/


/*************************************Promise consume with async await and try catch**************************/

// const promiseResult = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({ message: "promise have been resolved", status_code: 200 });
// 		//reject({ message: "promise have been reject", status_code: 500 })
// 	}, 5000);
// });

// const promise_one_Result = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({ message: "promise One have been resolved", status_code: 200 });
// 		//reject({ message: "promise have been reject", status_code: 500 })
// 	}, 2000);
// });

// const promise_two_Result = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({ message: "promise Two have been resolved", status_code: 200 });
// 		//reject({ message: "promise have been reject", status_code: 500 })
// 	}, 3000);
// });

// async function resolveThis() {
// 	try {
// 		const result = await promiseResult;
// 		const promise_one = await promise_one_Result;
// 		const promise_two = await promise_two_Result;
// 		console.log("result----", promise_one);

// 		//return Promise.resolve("mesage");
// 		//return result;
// 	} catch (error) {
// 		return error;
// 	}
// }

// resolveThis();

/*************************************Promise consume with async await and try catch**************************/

//a keni dashur te hyni ne boten e webit
///tani e keni mundesine , nepermjet fullstack web development summer school organizuar nga Holberton Albania


/*************************************Promise race***********************************************/

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The first promise with 5000 has resolved');
// 		resolve(100);
// 	}, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('The second promise with 1000 has resolved');
// 		resolve(200);
// 	}, 1000);
// });
// Promise.race([p1, p2])
// 	.then(value => console.log(`Resolved: ${value}`))
// 	.catch(reason => console.log(`Rejected: ${reason}`));


/*************************************Promise race***********************************************/



/*************************************Promise all***********************************************/

// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(3);
// 	}, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(2);
// 	}, 5000);
// });

// Promise.all([promise2, promise1]).then((res) => {
// 	console.log(res);
// });

/*************************************Promise all***********************************************/