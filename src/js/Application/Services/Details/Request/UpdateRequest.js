class UpdateRequest {
    constructor(data) {
        this._id = data.id;
        this._data = data.data;
    }

    get id() {
        return this._id;
    }

    get data() {
        return this._data;
    }
}

export default UpdateRequest;