import { nanoid } from 'nanoid'

export const createDeveloperData = ({ name, age, role, image }) => {
    return {
        id: nanoid(),
        name,
        age,
        role,
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae possimus nostrum odio enim minus distinctio, rerum quas, maxime perferendis sint doloribus delectus excepturi officiis.',
        bookmark: false,
        image
    }
}
