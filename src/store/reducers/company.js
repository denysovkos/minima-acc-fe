const INITIAL_STATE = { 
    user: {},
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'get_company_success':
            return action.payload[0]
        case 'get_company_fail':
            return {
                message: action.payload.data.message
            }
        default:
            return state;
    }
}