import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'
import { useComments } from '../../hooks/useComments'

const CommentsList = ({ developerId }) => {
    const { getCommentsByDeveloperId } = useComments()
    const comments = getCommentsByDeveloperId(developerId)

    const sortComments = () => {
        return comments.sort((a, b) => (a.date < b.date ? 1 : -1))
    }

    return (
        <div className="row mt-3">
            {comments.length ? (
                sortComments().map((item) => (
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
