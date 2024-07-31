export const addANewAddress = async (address, pincode, state, city, token) => {
    try {
        const response = await fetch("https://pan-card-registration-website-backend.onrender.com/address/addNewAddress", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
            body: JSON.stringify({ address: address, pincode: pincode, state: state, city: city }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Addition Of New Address Error');
        }

        return data;
    } catch (error) {
        return error.message;
    }
}

export const GetAllAddress = async (token) => {
    try {
        const response = await fetch(`https://pan-card-registration-website-backend.onrender.com/address/GetAllAddress`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Get Address Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}

export const updateAddress = async (address, pincode, state, city, id,token) => {
    try {
        const response = await fetch(`https://pan-card-registration-website-backend.onrender.com/address/editTheAddress/${id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
            body: JSON.stringify({ address: address, pincode: pincode, state: state, city: city }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Updation of Address Error');
        }

        return data;
    } catch (error) {
        return error.message;
    }
}

export const deleteAAddress = async (id,token) => {
    try {
        const response = await fetch(`https://pan-card-registration-website-backend.onrender.com/address/deleteAAddress/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Auth-Token": token,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error('Deletion of  Address Error');
        }

        return data;

    } catch (error) {
        return error.message;
    }
}