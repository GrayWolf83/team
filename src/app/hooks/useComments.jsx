import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { PropTypes } from 'prop-types'
import Loader from '../components/ui/Loader'
import commentService from '../services/comment.service'

const CommentsContext = React.createContext()

export const useComments = () => {
    return useContext(CommentsContext)
}

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getComments()
    }, [])

    async function getComments() {
        setLoading(true)
        try {
            const { content } = await commentService.getComments()
            if (content.length) {
                setComments(content)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function addComment(payload) {
        try {
            const { content } = await commentService.createComment(payload)
            setComments((prevState) => [...prevState, content])
        } catch (error) {
            console.log(error)
        }
    }

    function getCommentsByDeveloperId(id) {
        return comments.filter((comment) => comment.developerId === id)
    }

    async function removeComment(commentId) {
        try {
            await commentService.removeComment(commentId)
            setComments(comments.filter((comment) => comment.id !== commentId))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CommentsContext.Provider
            value={{
                comments,
                getComments,
                addComment,
                getCommentsByDeveloperId,
                removeComment
            }}>
            {isLoading ? <Loader /> : children}
        </CommentsContext.Provider>
    )
}

CommentsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
