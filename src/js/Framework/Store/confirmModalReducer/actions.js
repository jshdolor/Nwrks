function showConfirmModal(id) {
    return {
        type: 'changeState',
        payload: {
            show:true,
            id:id
        }
    };
}

function hideConfirmModal(id) {
    return {
        type: 'changeState',
        payload: {
            show:false,
            id:id
        }
    };
}

export default {
    showConfirmModal,
    hideConfirmModal
}
