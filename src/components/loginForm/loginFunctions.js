import axios from "axios";
import { ModuleData, FetchingDataOnFunc, FetchingDataOffFunc, SendAPIResponse, verifyCoderemove } from "../../Modules&Apis/Modules";

export const LoginUser = async (data) => {
    FetchingDataOnFunc();
    await axios
        .post(`${ModuleData.API}/user/login`, data)
        .then((result) => {
            if (result.data) {
                FetchingDataOffFunc();
                const { error, token, user } = result.data;
                if (error) SendAPIResponse(error);
                if (token) {
                    SendAPIResponse(null, token, user, null);
                    verifyCoderemove();
                }
            }
        })
        .catch((err) => {
            FetchingDataOffFunc();
            SendAPIResponse(err);
        });
};