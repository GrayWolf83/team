import React from 'react'
import FormComponent from '../common/FormComponent'
import TextField from '../common/form/TextField'
import { loginSchema } from '../../validation/yup.schema'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()

    const handleSubmit = (payload) => {
        console.log(payload)

        if (history.location.state) {
            history.push(history.location.state.path)
        } else {
            history.push('/')
        }
    }

    return (
        <div className="container mt-5">
            <h3 className="text-center">Авторизация</h3>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <FormComponent
                        btnLabel="Войти"
                        onSubmit={handleSubmit}
                        validationSchema={loginSchema}>
                        <TextField name="email" label="email" type="email" />
                        <TextField
                            name="password"
                            label="пароль"
                            type="password"
                        />
                    </FormComponent>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <NavLink
                        to={'/auth/register'}
                        className="nav-link text-end">
                        Регистрация
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login
