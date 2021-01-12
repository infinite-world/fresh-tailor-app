import ModuleData from "../../Modules&Apis/Modules";
const initialstate = {
    isLoading: false
}

const LoadingReducer = (state = initialstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case ModuleData.FetchingOn:
            return {
                ...state,
                isLoading: true
            }
        case ModuleData.FetchingOff:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default LoadingReducer;