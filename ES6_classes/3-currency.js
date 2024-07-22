export default class Currency {
constructor(_code, _name) {
	this._code = _code;
	this._name = _name;

}

get code() {
	return this._code;
}

set code(code) {
	if (typeof code !== 'string') {
		throw new Error('Code must be a string');
	}
	this._code = code;
}

get name() {
	return this._name;
}

set name(name) {
	if (typeof name !== 'string') {
		throw new Error('Name must be a string');
	}
	this._name = name;
}

displayFullCurrency() {
	return `${this._name} (${this._code})`;
}
}
