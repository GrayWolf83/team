import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const CommentsList = ({ comments }) => {
    return (
        <div className="row mt-3">
            {comments.length ? (
                comments.map((item) => (
                    <CommentCard comment={item} key={item.id} />
                ))
            ) : (
                <p className="text-center">
                    У этого разработчика еще нет отзывов
                </p>
            )}
        </div>
    )
}

CommentsList.propTypes = {
    comments: PropTypes.array
}

export default CommentsList
