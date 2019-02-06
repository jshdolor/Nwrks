let ConfirmModal = (state={show:false, id:null}, action) => {
    if(action.type === 'changeState')
        return action.payload;
    return state;
}

export default ConfirmModal;