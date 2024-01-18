export default function appendToEachArrayValue(array, appendString) {
    const myValues = [];
    for (let idx in array) {
        myValues.push(appendString + array[idx])
    }
    return myValues;
}