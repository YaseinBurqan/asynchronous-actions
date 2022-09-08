import superagent from "superagent";
const api = "https://jsonplaceholder.typicode.com/users";
export const getRemoteData = () => (dispatch) => {
  return superagent.get(api).then((data) => {
    dispatch(getAction(data.body));
  });
};

const getAction = (payload) => {
  return {
    type: "GET",
    payload: payload,
  };
};
