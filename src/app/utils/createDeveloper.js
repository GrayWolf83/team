import { nanoid } from 'nanoid'

export const createDeveloper = (name, age, role) => {
    return {
        id: nanoid(),
        name,
        age,
        role,
        reviews: [],
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae possimus nostrum odio enim minus distinctio, rerum quas, maxime perferendis sint doloribus delectus excepturi officiis.',
        bookmark: false,
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`
    }
}
