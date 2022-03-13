import { object, string } from 'yup'

export const commentSchema = object({
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

export const registerSchema = object({
    password: string()
        .required({
            name: 'password',
            text: 'Поле обязательно к заполнению'
        })
        .min(8, {
            name: 'password',
            text: 'Минимальная длина 8 символов'
        }),
    email: string()
        .email({ name: 'email', text: 'Email введен некорректно' })
        .required({ name: 'email', text: 'Поле обязательно к заполнению' }),
    name: string().required({
        name: 'name',
        text: 'Поле обязательно к заполнению'
    })
})

export const loginSchema = object({
    password: string()
        .required({
            name: 'password',
            text: 'Поле обязательно к заполнению'
        })
        .min(8, {
            name: 'password',
            text: 'Минимальная длина 8 символов'
        }),
    email: string()
        .email({ name: 'email', text: 'Email введен некорректно' })
        .required({ name: 'email', text: 'Поле обязательно к заполнению' })
})
