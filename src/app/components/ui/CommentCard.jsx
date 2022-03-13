import React from 'react'
import PropTypes from 'prop-types'
import { getDateToString } from '../../utils/getDateToString'
import { useComments } from '../../hooks/useComments'

const CommentCard = ({ comment }) => {
    const { removeComment } = useComments()

    return (
        <div className="card mb-2">
            <div className="card-body">
                <p className="card-text w-100 d-flex jusstify-content-around">
                    {comment.name}{' '}
                    <span className="text-primary fst-italic ms-3">
                        {getDateToString(comment.date)}
                    </span>
                    <i
                        className="bi bi-x-circle ms-auto text-danger fs-5"
                        onClick={() => removeComment(comment.id)}
                    />
                </p>
                <div>
                    <p>{comment.text}</p>
                </div>
            </div>
        </div>
    )
}

CommentCard.propTypes = {
    comment: PropTypes.object
}

export default CommentCard
