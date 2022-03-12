import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ color, content }) => {
    return <span className={'badge bg-' + color}>{content}</span>
}
Badge.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
}
export default Badge
