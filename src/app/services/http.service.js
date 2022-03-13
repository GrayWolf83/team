import axios from 'axios'
import { toast } from 'react-toastify'
// import authService from './auth.service'
import localStorageService from './localStorage.service'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
})

http.interceptors.request.use(
    async function (config) {
        config.url =
            (config.url.slice(-1) === '/'
                ? config.url.slice(0, -1)
                : config.url) + '.json'

        const expiresDate =
            Number(localStorageService.getTokenExpiresDate()) || 0
        const refreshToken = localStorageService.getRefreshToken()
        if (refreshToken && expiresDate < Date.now()) {
            // const data = await authService.refresh()
            // localStorageService.setTokens({
            //     refreshToken: data.refresh_token,
            //     idToken: data.id_token,
            //     expiresIn: data.expires_id,
            //     localId: data.user_id
            // })
        }
        const accessToken = localStorageService.getAccessToken()
        if (accessToken) {
            config.params = { ...config.params, auth: accessToken }
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    (res) => {
        res.data = { content: { ...res.data } }
        return res
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500

        if (!expectedErrors) {
            console.log(error)
            toast.error('Something was wrong. Try it later')
        }
        return Promise.reject(error)
    }
)
const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
}
export default httpService
