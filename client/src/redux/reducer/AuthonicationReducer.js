const AuthonicationReducer = (state = '',action) => {
    switch (action.type) {
        case 'USER_CREATION_SUCCESSFULL':
            return action.payload;
        case 'USER_CREATION_UNSUCCESSFULL':
            return '';
        case 'USER_VERIFICATION_SUCCESSFULL':
            return action.payload;
        case 'USER_VERIFICATION_UNSUCCESSFULL':
            return '';
        case 'USERS_SUCCESSFULL':
            return action.payload;
        case 'USERS_UNSUCCESSFULL':
            return '';
        case 'USERS_DETAILS_SUCCESSFULL':
            return action.payload;
        case 'USERS_DETAILS_UNSUCCESSFULL':
            return '';
        case 'OTHER_USERS_DETAILS_SUCCESSFULL':
            return action.payload;
        case 'OTHER_USERS_DETAILS_UNSUCCESSFULL':
            return '';
        case 'USERS_DETAILS_UPDATION_SUCCESSFULL':
            return action.payload;
        case 'USERS_DETAILS_UPDATION_UNSUCCESSFULL':
            return '';
        case 'USERS_DELETION_SUCCESSFULL':
            return action.payload;
        case 'USERS_DELETION_UNSUCCESSFULL':
            return ''
        default:
            return state;
    }
}

export default AuthonicationReducer;