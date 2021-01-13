import { ModuleData } from "../../Modules&Apis/Modules";
const initialstate = {
    user: null,
    token: null
}

const UserReducer = (state = initialstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case ModuleData.Save_User_Successfully:
            return {
                ...state,
                user: payload.user,
                token: payload.token
            }
        case ModuleData.User_Remove_Successfully:
            return {
                ...state,
                user: null,
                token: null
            }
        default:
            return state;
    }
}

export default UserReducer;