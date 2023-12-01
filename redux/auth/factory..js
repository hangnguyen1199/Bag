import axios from "axios";

const url = process.env.API_URL;
const Factories = {
    getUserProfile: () => {
        return axios({
            method: 'GET',
            url: `${url}/auth/user`,
        });
    }
};

export default Factories;
