import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from './ContextState';
import { action } from '../redux/index.js';
import { useDispatch, useSelector } from 'react-redux';

const ContextProvider = (props) => {
    const [auth, setAuth] = useState('');
    const [pincode, setPincode] = useState('');
    const [pincodeLoading, setPincodeLoading] = useState(false);
    const [stateAndCity, setStateAndCity] = useState({
        state: '',
        city: '',
    });
    const [panCardNumber, setpanCardNumber] = useState('');
    const [panCardLoading, setpanCardLoading] = useState(false);
    const [userDetails, setuserDetails] = useState({
        name:'',
        email:'',
    })
    const userDetail = useSelector((state) => state.authonication);
    const dispatch = useDispatch();

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

    useEffect(() => {
        const fetchStateAndCity = async () => {
            try {
                setpanCardLoading(true);
                dispatch(action.VerifyUsersPan(panCardNumber));
                const data = userDetail;
                if (data.error) {
                    throw new Error('Get Details Error');
                }
                setuserDetails(data);

                return data;

            } catch (error) {
                console.error(error.message);
            } finally {
                setPincodeLoading(false);
            }
        };

        if (panCardNumber) {
            fetchStateAndCity();
        }
        // eslint-disable-next-line
    }, [panCardNumber]);

    return (
        <Context.Provider value={{ auth, setAuth, pincode, pincodeLoading, setPincode, stateAndCity, setpanCardNumber, panCardLoading,userDetails }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
