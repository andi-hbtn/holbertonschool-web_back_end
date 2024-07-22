export default class Pricing {
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(amount) {
		if (typeof amount !== 'number') {
			throw new Error('Code must be a number');
		}
		this._amount = amount;
	}

	get currency() {
		return this._currency;
	}

	set currency(newCurrency) {
		if (typeof this._currency !== 'string') {
			throw new Error('Name must be a string');
		}
		this._currency = newCurrency;
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.name} (${this._currency._code})`;
	}

	static convertPrice(amount, currency) {
		return amount * currency;
	}
}
