import { object, string } from 'yup'

export const reviewSchema = object({
    text: string()
        .required({
            name: 'text',
            text: 'Поле обязательно к заполнению'
        })
        .min(4, {
            name: 'text',
            text: 'Минимальная длина 4 символа'
        }),
    name: string().required({
        name: 'name',
        text: 'Поле обязательно к заполнению'
    })
})
