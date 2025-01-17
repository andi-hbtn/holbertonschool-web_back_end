export default class HolbertonCourse {

    constructor(name,length,students) {
        if(typeof name === 'string' ){
            this._name = name;
        }

        if(typeof length === Number){
            this._length = length;
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
