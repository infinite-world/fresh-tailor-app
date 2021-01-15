import axios from "axios";
import { ModuleData, FetchingDataOnFunc, FetchingDataOffFunc, SendAPIResponse, verifyCodeSave } from "../../Modules&Apis/Modules";

export const RegisterUser = async (data) => {
    const { password, confirmPassword } = data;
    let errorMessage = null;

    // if (phone.length < 11 || phone.length > 11) {
    //     errorMessage = "invalid phone number";
    //     return SendAPIResponse(errorMessage);
    // }

    if (password !== confirmPassword) {
        errorMessage = "Password Not match"
        return SendAPIResponse(errorMessage)
    }

    FetchingDataOnFunc();
    await axios
        .post(`${ModuleData.API}/user/register`, data)
        .then((result) => {
            FetchingDataOffFunc();
            const { error, msg } = result.data
            if (error) return SendAPIResponse(error);
            if (msg) {
                SendAPIResponse(null, null, null, msg);
                verifyCodeSave();
            }
        })
        .catch((err) => {
            FetchingDataOffFunc();
            SendAPIResponse(err);
        });
};