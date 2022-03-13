import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Badge from '../components/common/Badge'
import { useData } from '../hooks/useData'
import CommentsList from '../components/ui/CommentsList'
import Breadcrumb from '../components/common/Breadcrumb'
import CreateCommentsForm from '../components/common/CreateCommentsForm'

const CommentsPage = () => {
    const { developerId } = useParams()
    const { getDeveloperById } = useData()
    const developer = getDeveloperById(developerId)

    if (!developerId) return <Redirect to={'/'} />
    return (
        <div className="mt-3">
            <Breadcrumb
                crumbs={[{ title: 'Главная', path: '/' }, { title: 'Отзывы' }]}
            />

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
                    <CreateCommentsForm developerId={developerId} />
                </div>

                <CommentsList developerId={developerId} />
            </div>
        </div>
    )
}

export default CommentsPage
