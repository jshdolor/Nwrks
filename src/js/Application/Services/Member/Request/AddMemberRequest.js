import ToFormData from '../../../../Infrastructure/FormData';

export default class AddMemberRequest extends ToFormData{
    
    constructor(data = {}) {
        super();
        this._firstName = data.firstName;
        this._lastName = data.lastName;
        this._birthdate = data.birthdate;
        this._dateHired = data.dateHired;
        this._contactNumber = data.contactNumber;
        this._status = data.status;
        this._address = data.address;
        this._favFood = data.favFood;
        this._interests = data.interests;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(value) {
        this._birthdate = value;
    }

    get dateHired() {
        return this._dateHired;
    }

    set dateHired(value) {
        this._dateHired = value;
    }

    get contactNumber() {
        return this._contactNumber;
    }

    set contactNumber(value) {
        this._contactNumber = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get favFood() {
        return this._favFood;
    }

    set favFood(value) {
        this._favFood = value;
    }

    get interests() {
        return this._interests;
    }

    set interests(value) {
        this._interests = value;
    }
}