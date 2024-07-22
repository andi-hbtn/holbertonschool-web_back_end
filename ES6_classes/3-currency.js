export default class Currency {
	constructor(_name, _code) {
		this._name = _name;
		this._code = _code;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	get code() {
		return this._code;
	}

	set code(newCode) {
		this._code = newCode;
	}


	displayFullCurrency() {
		return this._code + " " + "(" + this._name + ")";
	}
}