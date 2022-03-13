import React, { useEffect, useState } from 'react'
import FormComponent from '../common/FormComponent'
import TextField from '../common/form/TextField'
import { registerSchema } from '../../validation/yup.schema'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory()

    const { signUp } = useAuth()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (errors !== null) {
            toast.error(errors.message)
            setErrors(null)
        }
    }, [errors])

    const handleSubmit = async (payload) => {
        try {
            await signUp({ ...payload, bookmark: false })
            history.push(
                history.location.state ? history.location.state.path : '/'
            )
        } catch (error) {
            setErrors(error)
        }
    }

    return (
        <div className="container mt-5">
            <h3 className="text-center">Регистрация</h3>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <FormComponent
                        btnLabel="Зарегистрироваться"
                        onSubmit={handleSubmit}
                        validationSchema={registerSchema}>
                        <TextField name="name" label="Имя" />
                        <TextField name="email" label="Email" type="email" />
                        <TextField
                            name="password"
                            label="Пароль"
                            type="password"
                        />
                    </FormComponent>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <NavLink to={'/auth/login'} className="nav-link text-end">
                        Вход
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Register
