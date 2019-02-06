class DeleteMemberRequest {
    constructor(data) {
        this._id = data.id;
    }

    get id() {
        return this._id;
    }
}

export default DeleteMemberRequest;