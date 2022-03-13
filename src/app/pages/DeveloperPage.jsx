import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Badge from '../components/common/Badge'
import CreateCommentsForm from '../components/common/CreateCommentsForm'
import CommentsList from '../components/ui/CommentsList'
import ProgressBar from '../components/ui/ProgressBar'
import { useData } from '../hooks/useData'
import Breadcrumb from '../components/common/Breadcrumb'

const DeveloperPage = () => {
    const { developerId } = useParams()
    const { getDeveloperById } = useData()
    const developer = getDeveloperById(developerId)

    return (
        <div className="container mt-4">
            <Breadcrumb
                crumbs={[
                    { title: 'Главная', path: '/' },
                    { title: 'Страница разработчика' }
                ]}
            />
            <div className="row gutters-sm">
                <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center text-center position-relative">
                        <img
                            src={developer.image}
                            className="rounded-circle"
                            width="150"
                        />
                        <div className="mt-3">
                            <h4>{developer.name}</h4>
                            <Badge color="info" content={developer.role} />
                            <p className="mb-1">Возраст: {developer.age}</p>
                        </div>
                    </div>
                    <div className="mt-3">{developer.description}</div>
                </div>
                <div className="col-md-6">
                    {developer.skills.map((sk, index) => {
                        return (
                            <ProgressBar
                                key={index}
                                label={sk.title}
                                progress={sk.value}
                            />
                        )
                    })}
                    <div className="row mt-3">
                        <div className="col-6">
                            <a
                                className="nav-link fs-5"
                                href={developer.contacts.github}>
                                <i className="bi bi-github" /> GitHub
                            </a>
                        </div>
                        <div className="col-6">
                            <a
                                className="nav-link fs-5"
                                href={developer.contacts.telegram}>
                                <i className="bi bi-telegram" /> Telegram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <CreateCommentsForm developerId={developerId} />
            </div>
            <div className="row">
                <CommentsList developerId={developerId} />
            </div>
        </div>
    )
}

export default DeveloperPage
