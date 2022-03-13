import { nanoid } from 'nanoid'

export const createComment = (data) => {
    return {
        ...data,
        id: nanoid(),
        date: Date.now()
    }
}
