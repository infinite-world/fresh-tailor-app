import ModulesData from "../../Modules&Apis/Modules";
import axios from "axios";
import Store from "../../Store/Store/store";

export const RegisterUser = async (data) => {
  Store.dispatch({
    type: ModulesData.FetchingOn,
  });
  await axios
    .post(`${ModulesData.API}/user/register`, data)
    .then((result) => {
      Store.dispatch({
        type: ModulesData.FetchingOff,
      });

      if (result.data) {
        const { error, token, user } = result.data;
        // if user create
        if (token) {
          Store.dispatch({
            type: ModulesData.API_Response_Get_Successfully,
            payload: { type: "success", msg: "Account Create Successfully" },
          });
          Store.dispatch({
            type: ModulesData.Save_User_Successfully,
            payload: { user, token },
          });
        }

        // if error
        if (error) {
          Store.dispatch({
            type: ModulesData.API_Response_Get_Successfully,
            payload: { type: "error", msg: error },
          });
        }
      }
    })
    .catch((err) => {
      Store.dispatch({
        type: ModulesData.API_Response_Get_Successfully,
        payload: { type: "error", msg: "Something went wrong, try again" },
      });
    });
};
