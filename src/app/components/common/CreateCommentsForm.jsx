import React from 'react'
import PropTypes from 'prop-types'
import TextAreaField from './form/TextAreaField'
import FormComponent from './FormComponent'
import { commentSchema } from '../../validation/yup.schema'
import { useComments } from '../../hooks/useComments'
import { useAuth } from '../../hooks/useAuth'
import { createComment } from '../../utils/createComment'
import { useHistory } from 'react-router-dom'

const CreateCommentsForm = ({ developerId }) => {
    const { addComment } = useComments()
    const { currentUser } = useAuth()
    const history = useHistory()

    const handleSubmit = (data) => {
        const content = createComment({ ...data, developerId })
        if (currentUser) {
            addComment(content)
        } else {
            history.push('/auth/login', { path: history.location.pathname })
        }
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h5 className="card-title text-primary">Добавить отзыв</h5>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <FormComponent
                            btnLabel="Добавить"
                            validationSchema={commentSchema}
                            onSubmit={handleSubmit}>
                            <TextAreaField label="Отзыв" name="text" />
                        </FormComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

CreateCommentsForm.propTypes = {
    developerId: PropTypes.string
}

export default CreateCommentsForm
