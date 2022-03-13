import { nanoid } from 'nanoid'

export const createUser = (name, email) => {
    return {
        id: nanoid(),
        name,
        email,
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`
    }
}
