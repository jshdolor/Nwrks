import AddMemberRequest from './AddMemberRequest';

export default class EditMemberRequest extends AddMemberRequest{
    constructor(data, id) {
        super(data);
        this._id = id;
    }

    get id() {
        return this._id;
    }
}