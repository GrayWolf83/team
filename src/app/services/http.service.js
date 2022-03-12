import axios from 'axios'
import configFile from '../../config.json'

console.log(configFile.apiEndpoint)

const httpService = {
    get: axios.get(configFile.apiEndpoint),
    post: axios.post(configFile.apiEndpoint),
    put: axios.put(configFile.apiEndpoint),
    delete: axios.delete(configFile.apiEndpoint)
}
export default httpService
