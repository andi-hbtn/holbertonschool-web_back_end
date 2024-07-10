/*eslint-disable*/
// export default function uploadPhoto(filename) {
// 	return Promise.reject(new Error(`${filename} cannot be processed`));
// }



function uploadPhoto(filename) {
	return Promise.reject(new Error(`${filename} cannot be processed`));
}

uploadPhoto("hello").then((result) => {

	console.log("result-----", result);

}).catch((error) => {

})


