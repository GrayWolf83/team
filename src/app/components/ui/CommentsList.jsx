import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'
import { useComments } from '../../hooks/useComments'

const CommentsList = ({ developerId }) => {
    const { getCommentsByDeveloperId } = useComments()
    const comments = getCommentsByDeveloperId(developerId)

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
    developerId: PropTypes.string
}

export default CommentsList
