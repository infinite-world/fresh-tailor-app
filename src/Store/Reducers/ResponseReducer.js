import { ModuleData } from "../../Modules&Apis/Modules";
const initialstate = {
    message: {},
    verifyCodeSave: false
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
        case ModuleData.Verify_code_save:
            return {
                ...state,
                verifyCodeSave: true
            }
        case ModuleData.Verify_code_remove:
            return {
                ...state,
                verifyCodeSave: false
            }
        default:
            return state;
    }
}

export default ResponseReducer;