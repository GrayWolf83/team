import React from 'react'
import { PropTypes } from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'

const FormComponent = ({ children, btnLabel, onSubmit, validationSchema }) => {
    const [data, setData] = useState({})
    const [error, setError] = useState({})

    const validationData = async () => {
        if (!Object.values(data).every((item) => item === '')) {
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

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validationData()

        if (
            Object.keys(error).length ||
            Object.values(data).every((item) => item === '')
        ) {
            return
        }
        onSubmit(data)
        setData({})
    }

    return (
        <form autoComplete="false" onSubmit={handleSubmit}>
            {React.Children.map(children, (child) => {
                const config = {
                    ...child.props,
                    onChange: handleChange,
                    value: data[child.props.name] || '',
                    error: error[child.props.name] || ''
                }

                return React.cloneElement(child, config)
            })}
            <button
                type="submit"
                className="btn btn-primary"
                disabled={
                    Object.keys(error).length ||
                    Object.values(data).every((item) => item === '')
                }>
                {btnLabel}
            </button>
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
