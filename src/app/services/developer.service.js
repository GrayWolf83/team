import httpService from './http.service'

const developerEndpoint = 'developer/'

const developerService = {
    getDevelopers: async () => {
        const { data } = await httpService.get(developerEndpoint)
        return data
    },
    createDeveloper: async (payload) => {
        const { data } = await httpService.put(
            developerEndpoint + payload.id,
            payload
        )

        return data
    }
}
export default developerService
