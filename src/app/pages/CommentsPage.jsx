import React from 'react'
import { useParams } from 'react-router-dom'
import TextAreaField from '../components/common/form/TextAreaField'
import TextField from '../components/common/form/TextField'
import FormComponent from '../components/common/FormComponent'
import Badge from '../components/common/Badge'
import { useData } from '../hooks/useData'
import { commentSchema } from '../validation/yup.schema'
import { createComment } from '../utils/createComment'
import { useComments } from '../hooks/useComments'
import CommentsList from '../components/ui/CommentsList'

const CommentsPage = () => {
    const { developerId } = useParams()
    const { getDeveloperById } = useData()
    const { addComment, getCommentsByDeveloperId } = useComments()
    const developer = getDeveloperById(developerId)
    const comments = getCommentsByDeveloperId(developerId)

    const handleSubmit = (data) => {
        const content = createComment({ ...data, developerId })
        addComment(content)
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-5 text-center">Отзывы</h1>
            <div className="row">
                <div className="col d-flex justify-content-start align-items-center">
                    <img
                        src={developer.image}
                        className="img-thumbnail rounded-circle me-3"
                        alt={developer.name}
                    />
                    <h3>
                        {developer.name}{' '}
                        <Badge color="info" content={developer.role} />
                    </h3>
                </div>
            </div>

            <div className="row mt-3">
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="card-title text-primary">
                            Добавить отзыв
                        </h5>
                        <div className="row">
                            <div className="col-12 col-md-8 offset-md-2">
                                <FormComponent
                                    btnLabel="Добавить"
                                    validationSchema={commentSchema}
                                    onSubmit={handleSubmit}>
                                    <TextField name="name" label="Имя" />
                                    <TextAreaField label="Отзыв" name="text" />
                                </FormComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CommentsList comments={comments} />
        </div>
    )
}

export default CommentsPage
