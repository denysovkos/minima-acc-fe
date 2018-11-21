import axios from 'axios';
import { currentIp } from '../../ip';

export const loginAction = (email, password, push) => {
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(`http://${currentIp}:3000/v1/user/login`,  {
                email,
                password
            });

            sessionStorage.setItem('token', response.data.token);

            dispatch({
                type: 'login',
                payload: response.data
            })

            push('/dashboard');
            return;
        } catch (err) {
            return dispatch({
                type: 'login_fail',
                payload: err.response
            })
        }   
    }
};

export const registerNewUserAction = (userData) => {
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(`http://${currentIp}:3000/v1/user/create`, userData);

            return dispatch({
                type: 'register',
                payload: response.data
            })
        } catch (err) {
            return dispatch({
                type: 'register_fail',
                payload: err.response
            })
        }
    }
}

export const signOutAction = (push) => {
    return (dispatch) => {
        sessionStorage.removeItem('token');

        dispatch({
            type: 'sign_out'
        });

        push('/');
        return;
    }
}