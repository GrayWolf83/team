import httpService from './http.service'

const commentEndpoint = 'comment/'

const commentService = {
    getComments: async () => {
        const { data } = await httpService.get(commentEndpoint)
        return data
    },
    createComment: async (payload) => {
        const { data } = await httpService.put(
            commentEndpoint + payload.id,
            payload
        )

        return data
    },
    removeComment: async (commentId) => {
        const { data } = await httpService.delete(commentEndpoint + commentId)
        return data
    }
}
export default commentService
