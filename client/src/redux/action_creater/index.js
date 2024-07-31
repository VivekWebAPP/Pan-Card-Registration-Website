import { createANewUser, verifyUsersPan, getAllUsers, getUsersDetails, getOtherUserDetails, updateUserInformation, removeAUser } from '../../API/authentication.js';
import { addANewAddress, GetAllAddress, updateAddress, deleteAAddress } from '../../API/addressHandling.js';

export const CreateANewUser = (pan, name, email, phone, address, pincode, state, city) => {
    return async (dispatch) => {
        try {
            const response = await createANewUser(pan, name, email, phone, address, pincode, state, city);
            dispatch({
                type: "USER_CREATION_SUCCESSFULL",
                payload: response.jwtToken,
            });
        } catch (error) {
            dispatch({
                type: "USER_CREATION_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const VerifyUsersPan = (pan) => {
    return async (dispatch) => {
        try {
            const response = await verifyUsersPan(pan);
            dispatch({
                type: "USER_VERIFICATION_SUCCESSFULL",
                payload: response.user,
            });
        } catch (error) {
            dispatch({
                type: "USER_VERIFICATION_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const GetAllUsers = (token) => {
    return async (dispatch) => {
        try {
            const response = await getAllUsers(token);
            dispatch({
                type: "USERS_SUCCESSFULL",
                payload: response.user,
            });
        } catch (error) {
            dispatch({
                type: "USERS_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const GetUsersDetails = (token) => {
    return async (dispatch) => {
        try {
            const response = await getUsersDetails(token);
            dispatch({
                type: "USERS_DETAILS_SUCCESSFULL",
                payload: response.user,
            });
        } catch (error) {
            dispatch({
                type: "USERS_DETAILS_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const GetOtherUserDetails = (id, token) => {
    return async (dispatch) => {
        try {
            const response = await getOtherUserDetails(id, token);
            dispatch({
                type: "OTHER_USERS_DETAILS_SUCCESSFULL",
                payload: response.user,
            });
        } catch (error) {
            dispatch({
                type: "OTHER_USERS_DETAILS_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const UpdateUserInformation = (pan, name, email, phone, address, pincode, state, city, token) => {
    return async (dispatch) => {
        try {
            const response = await updateUserInformation(pan, name, email, phone, address, pincode, state, city, token);
            dispatch({
                type: "USERS_DETAILS_UPDATION_SUCCESSFULL",
                payload: response.user,
            });
        } catch (error) {
            dispatch({
                type: "USERS_DETAILS_UPDATION_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const RemoveAUser = (id, token) => {
    return async (dispatch) => {
        try {
            const response = await removeAUser(id, token);
            dispatch({
                type: "USERS_DELETION_SUCCESSFULL",
                payload: response.message,
            });
        } catch (error) {
            dispatch({
                type: "USERS_DELETION_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const AddANewAddress = (address, pincode, state, city, token) => {
    return async (dispatch) => {
        try {
            const response = await addANewAddress(address, pincode, state, city, token);
            dispatch({
                type: "ADDRESS_ADDITION_SUCCESSFULL",
                payload: response.newAddress,
            });
        } catch (error) {
            dispatch({
                type: "ADDRESS_ADDITION_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const getAllAddress = (token) => {
    return async (dispatch) => {
        try {
            const response = await GetAllAddress(token);
            dispatch({
                type: "ADDRESS_SUCCESSFULL",
                payload: response.address,
            });
        } catch (error) {
            dispatch({
                type: "ADDRESS_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const UpdatedAddress = (address, pincode, state, city, id, token) => {
    return async (dispatch) => {
        try {
            const response = await updateAddress(address, pincode, state, city, id, token);
            dispatch({
                type: "ADDRESS_UPDATION_SUCCESSFULL",
                payload: response.updated,
            });
        } catch (error) {
            dispatch({
                type: "ADDRESS_UPDATION_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}

export const DeleteAAddress = (id, token) => {
    return async (dispatch) => {
        try {
            const response = await deleteAAddress(id, token);
            dispatch({
                type: "ADDRESS_DELETION_SUCCESSFULL",
                payload: response.deletedAddress,
            });
        } catch (error) {
            dispatch({
                type: "ADDRESS_DELETION_UNSUCCESSFULL",
                payload: error.message,
            });
        }
    }
}