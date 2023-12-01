import axios from "axios";

const url = process.env.API_URL;
const Factories = {
    getSignIn: async (data) => {
        console.log(url);
        return axios({
            method: 'POST',
            url: `${url}/login`,
            data
        });
    },
    getLogout: async () => {
        return axios({
            method: 'POST',
            url: `${url}/logout`,
        });
    },
};

export default Factories;
