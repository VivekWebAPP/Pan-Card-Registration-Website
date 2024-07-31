import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from './ContextState';

const ContextProvider = (props) => {
    const [auth, setAuth] = useState('');
    const [pincode, setPincode] = useState('');
    const [pincodeLoading, setPincodeLoading] = useState(false);
    const [stateAndCity, setStateAndCity] = useState({
        state: '',
        city: '',
    });

    useEffect(() => {
        const fetchStateAndCity = async () => {
            try {
                setPincodeLoading(true);
                const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
                const data = await response.data;

                if (data[0].Status === 'Error') {
                    throw new Error('Get Address Error');
                }

                setStateAndCity({
                    state: data[0].PostOffice[0].State,
                    city: data[0].PostOffice[0].District,
                });

            } catch (error) {
                console.error(error.message);
            } finally {
                setPincodeLoading(false);
            }
        };

        if (pincode) {
            fetchStateAndCity();
        }
    }, [pincode]);
    
    return (
        <Context.Provider value={{ auth, setAuth, pincode, pincodeLoading, setPincode, stateAndCity }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
