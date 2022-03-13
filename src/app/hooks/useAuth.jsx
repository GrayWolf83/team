import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import localStorageService, {
    setTokens
} from '../services/localStorage.service'
import userService from '../services/user.service'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const httpAuth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
})
const httpLogin = axios.create()

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const keyFireBasePrivate = process.env.REACT_APP_FIREBASE_KEY

    const [isLoading, setLoading] = useState(true)
    const [currentUser, setUser] = useState()
    const [error, setError] = useState(null)

    const history = useHistory()

    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getUserData()
        } else {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null)
        }
    }, [error])

    async function getUserData() {
        try {
            const { content } = await userService.getCurrentUser()
            setUser(content)
        } catch (error) {
            errorCatcher(error)
        } finally {
            setLoading(false)
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
    }

    async function createUser(data) {
        try {
            const { content } = await userService.create(data)
            setUser(content)
        } catch (error) {
            errorCatcher(error)
        }
    }

    async function signIn({ email, password }) {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${keyFireBasePrivate}`

        try {
            const { data } = await httpLogin.post(url, {
                email,
                password,
                returnSecureToken: true
            })
            // заносим токены в localStorage
            setTokens(data)
            await getUserData()
        } catch (error) {
            errorCatcher(error)
            const { code, message } = error.response.data.error

            if (code === 400) {
                if (message === 'EMAIL_NOT_FOUND') {
                    const errorObject = {
                        email: 'Email не найден'
                    }
                    throw errorObject
                }
                if (message === 'INVALID_PASSWORD') {
                    const errorObject = {
                        password: 'Неправильный пароль'
                    }
                    throw errorObject
                }
            }
        }
    }

    async function signUp({ email, password, ...rest }) {
        const keyFireBasePrivate = process.env.REACT_APP_FIREBASE_KEY
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${keyFireBasePrivate}`

        try {
            console.log({ email, password, ...rest })

            const { data } = await httpAuth.post(url, {
                email,
                password,
                returnSecureToken: true
            })

            // заносим токены в localStorage
            setTokens(data)
            //   console.log("dataAuth", data);
            await createUser({
                id: data.localId,
                email,
                image: `https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`,
                ...rest
            })
        } catch (error) {
            errorCatcher(error)
            const { code, message } = error.response.data.error

            if (code === 400) {
                if (message === 'EMAIL_EXISTS') {
                    const errorObject = {
                        email: 'Пользователь с таким Email уже существует'
                    }
                    throw errorObject
                }
            }
        }
    }

    function logOut() {
        localStorageService.removeAuthData()
        setUser(null)
        history.push('/')
    }

    return (
        <AuthContext.Provider
            value={{ signUp, currentUser, signIn, logOut, isLoading }}>
            {!isLoading ? children : ''}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default AuthProvider
