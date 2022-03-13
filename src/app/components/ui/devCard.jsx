import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { useData } from '../../hooks/useData'
import Badge from './Badge'

const DevCard = ({ developer }) => {
    const { changeBookmark } = useData()
    const bookmarkClass = developer.bookmark ? '-fill' : ''

    return (
        <div className="card mb-3">
            <button
                className="btn btn-primary m-2 ms-auto"
                onClick={() => changeBookmark(developer.name)}>
                <i className={`bi bi-bookmark${bookmarkClass}`}></i>
            </button>
            <img
                src={developer.image}
                className="card-img-top mt-1"
                alt={developer.name}
                style={{ maxHeight: '150px' }}
            />
            <div className="card-body">
                <h5 className="card-title">
                    {developer.name}{' '}
                    <Badge color="info" content={developer.role} />
                </h5>
                <p className="mb-1">Возраст: {developer.age}</p>

                <div className="d-flex justify-content-between mt-3">
                    <NavLink
                        to={`/${developer.id}`}
                        className="btn btn-primary shadow">
                        Подробнее
                    </NavLink>
                    <NavLink
                        to={`/reviews/${developer.id}`}
                        className="btn btn-info text-white shadow">
                        Отзывы
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

DevCard.propTypes = {
    developer: PropTypes.object
}

export default DevCard
