import axios from 'axios';
import { currentIp, backendPort } from '../../ip';

export const getCompany = (user) => {
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(`http://${currentIp}:${backendPort}/v1/user/company`,  {
                user: {
                    _id: user._id
                },
                userId: user._id,
            }, {
                headers: {
                    'x-access-token': user.token,
                }
            });

            dispatch({
                type: 'get_company_success',
                payload: response.data || []
            });
            return;
        } catch (err) {
            return dispatch({
                type: 'get_company_fail',
                payload: err.response
            });
        }   
    }
};

export const addCompany = (user, company, push) => {
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(`http://${currentIp}:${backendPort}/v1/user/company/add`,  {
                user: {
                    _id: user._id
                },
                userId: user._id,
                ...company
            }, {
                headers: {
                    'x-access-token': user.token,
                }
            });

            dispatch({
                type: 'add_company_success',
                payload: response.data || []
            });

            push('/dashboard');
        } catch (err) {
            return dispatch({
                type: 'add_company_fail',
                payload: err.response
            });
        }
    }
}