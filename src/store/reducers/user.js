const INITIAL_STATE = { 
    user: {},
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'login':
            return {
                ...state,
                user: Object.assign({}, action.payload.user, { token: action.payload.token }),
                message: null,
            }
        case 'login_fail':
        return {
            ...state,
            message: action.payload.data.message
        }
        case 'register':
            return {
                ...state,
                regFlow: action.payload
            }
        case 'register_fail':
            return {
                ...state,
                regFlow: action.payload.data
            }

        case 'sign_out':
            return INITIAL_STATE;  
        default: 
		    return state;
    }
}