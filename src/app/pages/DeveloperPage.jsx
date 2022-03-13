import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Badge from '../components/common/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import { useData } from '../hooks/useData'

const DeveloperPage = () => {
    const { developerId } = useParams()
    const { getDeveloperById } = useData()
    const developer = getDeveloperById(developerId)
    return (
        <div className="container">
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="d-flex flex-column align-items-center text-center position-relative">
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
                        <div className="mt-3">{developer.description}</div>
                    </div>

                    {developer.skills.map((sk, index) => {
                        return (
                            <ProgressBar
                                key={index}
                                label={sk.title}
                                progress={sk.value}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DeveloperPage
