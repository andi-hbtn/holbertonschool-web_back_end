export default class HolbertonCourse {

    constructor(name,length,students) {
        if(typeof name === 'string' ){
            this._name = name;
        } else{
            throw new Error("Name must be a string")
        }

        if(typeof length === 'number'){
            this._length = length;
        }else{
            throw new Error("Length must be a number")
        }

        
        if(Array.isArray(students)){
            this._students = students;
        }
    }

    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }

    set name(name) {
        return this._name = name;
    }

    set length(length) {
        return this._length = length;
    }

    set students(students) {
        return this._students = students;
    }
}
