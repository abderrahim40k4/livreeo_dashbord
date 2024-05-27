import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://livreeo.ma/api/admin",
    timeout: 60000,
    headers: {
        Accept: "application/json"
    }
});

export default axios;