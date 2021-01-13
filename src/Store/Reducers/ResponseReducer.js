import { ModuleData } from "../../Modules&Apis/Modules";
const initialstate = {
    message: {}
}

const ResponseReducer = (state = initialstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case ModuleData.API_Response_Get_Successfully:
            return {
                ...state,
                message: payload
            }
        case ModuleData.API_Response_Remove_Successfully:
            return {
                ...state,
                message: {}
            }
        default:
            return state;
    }
}

export default ResponseReducer;