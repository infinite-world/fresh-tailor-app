import { store } from "../Store/Store/store";

const ModuleData = {
    API: "https://tailor-web-app-apis.herokuapp.com/api",
    FetchingOn: "Fetching_data_On",
    FetchingOff: "Fetching_data_Off",
    API_Response_Get_Successfully: "Getting_Response",
    API_Response_Remove_Successfully: "Removing_Response",
    Save_User_Successfully: "Getting_User_Successfully",
    User_Remove_Successfully: "Remove_User_Successfully",
    Verify_code_save: "code_save",
    Verify_code_remove: "code_remove"
}

const FetchingDataOnFunc = () => {
    store.dispatch({
        type: ModuleData.FetchingOn,
    });
}

const FetchingDataOffFunc = () => {
    store.dispatch({
        type: ModuleData.FetchingOff,
    });
}

const SendAPIResponse = (error = null, token = null, user = null, msg = null) => {
    if (msg) {
        store.dispatch({
            type: ModuleData.API_Response_Get_Successfully,
            payload: { type: "success", msg: msg },
        });
    }

    if (token) {
        store.dispatch({
            type: ModuleData.API_Response_Get_Successfully,
            payload: { type: "success", msg: "Successfully Done..." },
        });
        store.dispatch({
            type: ModuleData.Save_User_Successfully,
            payload: { user, token },
        });
    }

    if (error) {
        store.dispatch({
            type: ModuleData.API_Response_Get_Successfully,
            payload: { type: "error", msg: error },
        });
    }

    setTimeout(() => {
        store.dispatch({ type: ModuleData.API_Response_Remove_Successfully });
    }, 5000);
}

const verifyCodeSave = () => {
    store.dispatch({
        type: ModuleData.Verify_code_save,
    });
}

const verifyCoderemove = () => {
    store.dispatch({
        type: ModuleData.Verify_code_remove,
    });
}

export { ModuleData, FetchingDataOnFunc, FetchingDataOffFunc, SendAPIResponse, verifyCodeSave, verifyCoderemove };