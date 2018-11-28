import axios from 'axios';
import { currentIp } from '../../ip';

export const getCompany = (user) => {
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(`http://${currentIp}:3000/v1/user/company`,  {
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
                payload: response.data
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