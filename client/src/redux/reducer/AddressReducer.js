const AddressReducer = (state = '',action) => {
    switch (action.type) {
        case 'ADDRESS_ADDITION_SUCCESSFULL':
            return action.payload;
        case 'ADDRESS_ADDITION_UNSUCCESSFULL':
            return '';
        case 'ADDRESS_SUCCESSFULL':
            return action.payload;
        case 'ADDRESS_UNSUCCESSFULL':
            return '';
        case 'ADDRESS_UPDATION_SUCCESSFULL':
            return action.payload;
        case 'ADDRESS_UPDATION_UNSUCCESSFULL':
            return '';
        case 'ADDRESS_DELETION_SUCCESSFULL':
            return action.payload;
        case 'ADDRESS_DELETION_UNSUCCESSFULL':
            return '';
        default:
            return state;
    }
}

export default AddressReducer;