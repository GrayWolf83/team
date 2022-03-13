import React from 'react'
import { useParams } from 'react-router-dom'
import Login from '../components/ui/Login'
import Register from '../components/ui/Register'

const AuthPage = () => {
    const { method } = useParams()

    return method === 'login' ? <Login /> : <Register />
}

export default AuthPage
