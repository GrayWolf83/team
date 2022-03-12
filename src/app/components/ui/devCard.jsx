import React from 'react'
import PropTypes from 'prop-types'

const DevCard = ({ developer }) => {
    const bookmarkClass = developer.bookmark ? '-fill' : ''
    return (
        <div className="card col-3">
            <img
                src={`https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`}
                className="card-img-top mt-1"
                alt="avatar"
                style={{ maxHeight: '150px' }}
            />
            <div className="card-body">
                <h5 className="card-title">{developer.name}</h5>
                <p className="mb-1">Возраст: {developer.age}</p>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae possimus nostrum odio enim minus distinctio,
                    rerum quas, maxime perferendis sint doloribus delectus
                    excepturi officiis. Nobis repudiandae nostrum voluptates
                    veritatis vel?
                </p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-primary">
                        Подробнее
                    </a>
                    <button className="btn btn-success">
                        <i className={`bi bi-bookmark${bookmarkClass}`}></i>
                        {/* <i className="bi bi-bookmark-fill"></i> */}
                    </button>
                </div>
            </div>
        </div>
    )
}

DevCard.propTypes = {
    developer: PropTypes.object
}

export default DevCard
