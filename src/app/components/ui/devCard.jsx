import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { useData } from '../../hooks/useData'
import Badge from './Badge'
import localStorageService from '../../services/localStorage.service'
import { useEffect } from 'react'

const DevCard = ({ developer }) => {
    const { changeBookmark } = useData()
    const [bookmark, setBookmark] = useState(false)

    useEffect(() => {
        setBookmark(Boolean(localStorageService.getBookmark(developer.id)))
    }, [changeBookmark])

    const bookmarkClass = bookmark ? '-fill' : ''

    return (
        <div className="card mb-3">
            <button
                className="btn btn-primary m-2 ms-auto"
                onClick={() => changeBookmark(developer.id)}>
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
