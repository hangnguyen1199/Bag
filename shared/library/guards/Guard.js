import serverCookies from 'next-cookies';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import AppConfig from '../AppConfig';
import Cookies from 'js-cookie'
import PageList from '../PageList';

const Guard = async (ctx, type = '') => {
    try {
        const { token } = serverCookies(ctx)
        axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
        AppConfig.ACCESS_TOKEN = token
       
        switch (type) {
            case 'user':
                return await handleForUser(token, ctx)
            case 'guest':
                return await handleForGuest(token, ctx)
            default:
                return handleForDefault(token, ctx)
        }
    } catch (error) {
        if (error?.response?.status == 401) {
            return redirectToService(ctx, PageList.SIGNIN.SERVER)
        }

        return { props: {} }
    }
}

export const decodeJWT = (token) => {
    if (!token) {
        return null
    } else {
        let value = jwtDecode(token)
        return {
            isExpired: value.exp < new Date().getTime() / 1000,
        }
    }
}

export const redirectToService = (server, path = "/", query = {}) => {
    return {
        redirect: {
            permanent: false,
            destination: path,
        },
    };
}

const handleForUser = async (token, ctx) => {
    // Nếu không tồn tại token hoặc token hết hạn thì redirect về page đăng nhập
    if (!token) {
        Cookies.remove('token')
        AppConfig.ACCESS_TOKEN = ''
        return redirectToService(ctx, PageList.SIGNIN.SERVER)
    }
    let url = process.env.API_URL
    let res = await axios({
        method: 'GET',
        url: `${url}/auth/user`,
    })
    return { props: {} }
}
const handleForDefault = async (token, ctx) => {
    // Nếu không tồn tại token hoặc token hết hạn thì redirect về page đăng nhập
    if (!token) {
        Cookies.remove('token')
        AppConfig.ACCESS_TOKEN = ''
        return redirectToService(ctx, PageList.SIGNIN.SERVER)
    }
    return { props: {} }
}
const handleForGuest = (token, jwtDecodeValue, ctx) => {
    if (token) {
        return redirectToService(ctx, '/')
    }
    return { props: {} }
}

export default Guard