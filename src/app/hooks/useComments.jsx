import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { PropTypes } from 'prop-types'
import Loader from '../components/ui/Loader'

const CommentsContext = React.createContext()

export const useComments = () => {
    return useContext(CommentsContext)
}

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState()
    const [isLoading, setLoading] = useState(true)

    function getComments() {
        return comments
    }

    function addComment(content) {
        setLoading(true)
        setComments((prevState) => [...prevState, content])
        setLoading(false)
    }

    return (
        <CommentsContext.Provider
            value={{
                comments,
                getComments,
                addComment
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
