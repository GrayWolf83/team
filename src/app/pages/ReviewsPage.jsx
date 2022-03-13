import React from 'react'
import { useParams } from 'react-router-dom'
import TextAreaField from '../components/common/form/TextAreaField'
import TextField from '../components/common/form/TextField'
import FormComponent from '../components/common/FormComponent'
import Badge from '../components/ui/Badge'
import { useData } from '../hooks/useData'
import { reviewSchema } from '../validation/yup.schema'
import { getDateToString } from '../utils/getDateToString'
import { createComment } from '../utils/createComment'

const ReviewsPage = () => {
    const { developerId } = useParams()
    const { getDeveloperById, addReview } = useData()
    const developer = getDeveloperById(developerId)

    const handleSubmit = (data) => {
        const content = createComment({ ...data, developerId })
        console.log('content', content)
        addReview(content)
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
                                    validationSchema={reviewSchema}
                                    onSubmit={handleSubmit}>
                                    <TextField name="name" label="Имя" />
                                    <TextAreaField label="Отзыв" name="text" />
                                </FormComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                {developer.reviews.length ? (
                    developer.reviews.map((item) => (
                        <div className="card mb-2" key={item.text}>
                            <div className="card-body">
                                <p className="card-text w-100 d-flex jusstify-content-around">
                                    {item.name}{' '}
                                    <span className="text-primary fst-italic ms-auto">
                                        {getDateToString(item.date)}
                                    </span>
                                </p>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">
                        У этого разработчика еще нет отзывов
                    </p>
                )}
            </div>
        </div>
    )
}

export default ReviewsPage
