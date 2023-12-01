import axios from 'axios';
const url = process.env.API_URL;
const factories = {
    requestSignUp: data => {
        return axios({
            method: 'POST',
            url: `${url}/signup`,
            data: data,
        });
    },
};

export default factories;
