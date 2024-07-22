export default class SkyHighBuilding {
  constructor(sqft, floors) {
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSquare) {
    return this._sqft = newSquare;
  }

  get floors() {
    return this._floors;
  }

  set floors(newSquare) {
    return this.floors = newSquare;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
