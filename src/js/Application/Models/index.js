export default class Member {

    constructor(data = {}) {

        this._firstName = data.firstName;
        this._lastName = data.lastName;
        this._fullName = data.fullName;
        this._address = data.address;
        this._postalCode = data.postal;
        this._city = data.city;
        this._country = data.countryCode;
        this._mobile = data.mobile;
        this._pointsBefore = data.pointsBefore;

    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this._fullName;
    }

    get address() {
        return this._address;
    }

    get postalCode() {
        return this._postalCode;
    }

    get city() {
        return this._city;
    }

    get country() {
        return trans(`country.${this._country}`);
    }

    get mobile() {
        return this._mobile;
    }

    get contactNumber() {
        return this._mobile;
    }

    get pointsBefore() {
        return this._pointsBefore;
    }

}