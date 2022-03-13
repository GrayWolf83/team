import { nanoid } from 'nanoid'

export const createDeveloperData = ({ name, age, role, image, contacts }) => {
    return {
        id: nanoid(),
        name,
        age,
        role,
        contacts,
        skills: [
            { title: 'HTML', value: random(50, 80) },
            { title: 'CSS', value: random(70, 90) },
            { title: 'JavaScript', value: random(50, 90) }
        ],
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae possimus nostrum odio enim minus distinctio, rerum quas, maxime perferendis sint doloribus delectus excepturi officiis.',
        bookmark: false,
        image
    }
}

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
