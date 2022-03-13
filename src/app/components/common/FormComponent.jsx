import React from 'react'
import { PropTypes } from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'

const FormComponent = ({ children, btnLabel, onSubmit, validationSchema }) => {
    const [data, setData] = useState({})
    const [error, setError] = useState({})

    const validationData = async () => {
        if (!Object.values(data).every((item) => item.trim() === '')) {
            await validationSchema
                .validate(data)
                .then(() => setError({}))
                .catch((err) =>
                    setError({ [err.message.name]: err.message.text })
                )
        }
    }

    useEffect(() => {
        validationData()
    }, [data])

    useEffect(() => {
        return () => setData({})
    }, [])

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validationData()
        console.log('submit')
        if (
            Object.keys(error).length ||
            Object.values(data).every((item) => item.trim() === '')
        ) {
            return
        }
        onSubmit(data)
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            {React.Children.map(children, (child) => {
                const config = {
                    ...child.props,
                    onChange: handleChange,
                    value: data[child.props.name] || '',
                    error: error[child.props.name] || ''
                }

                return React.cloneElement(child, config)
            })}
            <div className="w-100 d-flex justify-content-center">
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                        Object.keys(error).length ||
                        Object.values(data).every((item) => item === '')
                    }>
                    {btnLabel}
                </button>
            </div>
        </form>
    )
}

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    btnLabel: PropTypes.string,
    onSubmit: PropTypes.func,
    validationSchema: PropTypes.object
}

export default FormComponent
