export const createANewUser = async (pan, name, email, phone, address, pincode, state, city) => {
    try {
        const response = await fetch("https://pan-card-registration-website-backend.onrender.com/auth/createNewUser", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pan: pan, name: name, email: email, phone: phone, address: address, pincode: pincode, state: state, city: city }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Creation A New User Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}

export const verifyUsersPan = async (pan) => {
    try {
        const response = await fetch("https://pan-card-registration-website-backend.onrender.com/auth/verifyTheUser", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pan: pan }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Verification of User Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}

export const getAllUsers = async (token) => {
    try {
        const response = await fetch("https://pan-card-registration-website-backend.onrender.com/auth/users", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Get Users Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}

export const getUsersDetails = async (token) => {
    try {
        const response = await fetch("https://pan-card-registration-website-backend.onrender.com/auth/usersDetails", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Get Users Details Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}

export const getOtherUserDetails = async (id, token) => {
    try {
        const response = await fetch(`https://pan-card-registration-website-backend.onrender.com/auth/users/${id}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Get Users Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}

export const updateUserInformation = async (pan, name, email, phone, address, pincode, state, city,token) => {
    try {
        const response = await fetch("https://pan-card-registration-website-backend.onrender.com/auth/createNewUser", {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token":token,
            },
            body: JSON.stringify({ pan: pan, name: name, email: email, phone: phone, address: address, pincode: pincode, state: state, city: city }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Updation of User Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}

export const removeAUser = async (id,token) =>{
    try {
        const response = await fetch(`https://pan-card-registration-website-backend.onrender.com/auth/users/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Get Users Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}