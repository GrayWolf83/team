import React from 'react'
import FormComponent from '../common/FormComponent'
import TextField from '../common/form/TextField'
import { registerSchema } from '../../validation/yup.schema'
import { NavLink } from 'react-router-dom'

const Register = () => {
    const handleSubmit = (payload) => {
        console.log(payload)
    }

    return (
        <div className="container mt-5">
            <h3 className="text-center">Регистрация</h3>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <FormComponent
                        btnLabel="Войти"
                        onSubmit={handleSubmit}
                        validationSchema={registerSchema}>
                        <TextField name="name" label="имя" />
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
                    <NavLink to={'/auth/login'} className="nav-link text-end">
                        Вход
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Register
