export default function concatArrays(array1, array2, string) {
    const values = [[...array1] + " " + [...array2] + " " + string.split("")]
    return values;
}