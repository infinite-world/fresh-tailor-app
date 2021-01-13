import axios from "axios";
import { ModuleData, FetchingDataOnFunc, FetchingDataOffFunc, SendAPIResponse } from "../../Modules&Apis/Modules";

export const RegisterUser = async (data) => {
    if (data.phone.length < 11 || data.phone.length > 11) {
        let err = "invalid phone number";
        return SendAPIResponse(err);
    }
    FetchingDataOnFunc();
    await axios
        .post(`${ModuleData.API}/user/register`, data)
        .then((result) => {
            if (result.data) {
                FetchingDataOffFunc();
                const { error, token, user } = result.data;
                SendAPIResponse(error, token, user);
            }
        })
        .catch((err) => {
            SendAPIResponse(err);
        });
};
