import '../styles/globals.css'
import '../public/css/bootstrap.min.css';
import store from '../redux/store'
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import AppConfig from '../shared/config/AppConfig';
import Cookies from 'js-cookie';
import Router from "next/router";
import CommonPopup from '../shared/components/common/popups/common-popup';
import { FIRST_POPUP, SECOND_POPUP } from '../shared/utils/EventRegister';

const Noop = ({ children }) => children;

axios.interceptors.request.use(
    function (config) {
        config.headers['x-fromWeb'] = true;
        if (typeof window !== 'undefined') {
            config.headers.Authorization = `Bearer ${AppConfig.ACCESS_TOKEN}`;
        }
        // Do something before request is sent
        return config;
    },
    function (error) {
        if (typeof window !== 'undefined') {
            // console.log("interceptors: ", error);
        }
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Nếu status code == 401
        if (response?.status == 401) {
        }
        return response;
    },
    function (error) {
        if (typeof window !== 'undefined') {
        } else if (error?.response?.status == 401) {
            return Promise.reject(error);
        }
        // Nếu gọi auth/me trả về lỗi 401 thì xóa token
        if (
            error?.response?.status == 401 ||
            error?.status == 401
            // && error.response.config.url.includes('auth/user')
        ) {
            Cookies.remove('token');
            AppConfig.ACCESS_TOKEN = '';
        }

        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error?.response ?? error);
    }
);
function MyApp (props) {
    const { Component, pageProps } = props;
    const Layout = Component.Layout || Noop;
    // useEffect(() => {
    //     const token_header = Cookies.get('token') ?? '';
    //     AppConfig.ACCESS_TOKEN = token_header;
    //     if(!token_header){
    //         Router.push("/sign-in")
    //     }
    // },[])
    
    return <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        <CommonPopup _key={FIRST_POPUP} />
        <CommonPopup _key={SECOND_POPUP} />
    </Provider>
}

export default MyApp

