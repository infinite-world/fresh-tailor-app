import axios from "axios";
import { ModuleData, FetchingDataOnFunc, FetchingDataOffFunc, SendAPIResponse } from "../../Modules&Apis/Modules";

export const LoginUser = async (data) => {
    FetchingDataOnFunc();
    await axios
        .post(`${ModuleData.API}/user/login`, data)
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