import httpService from './http.service'
import localStorageService from './localStorage.service'

const userEndpoint = 'user/'

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint)

        return data
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndpoint + localStorageService.getUserId()
        )
        return data
    },
    create: async (payload) => {
        console.log('create: ', userEndpoint + payload.id, payload)
        const { data } = await httpService.put(
            userEndpoint + payload.id,
            payload
        )
        return data
    }
}
export default userService
