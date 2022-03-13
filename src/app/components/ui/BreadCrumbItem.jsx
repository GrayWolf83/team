import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const BreadcrumbItem = ({ path, title }) => {
    return (
        <li className="breadcrumb-item">
            <NavLink to={path}>{title}</NavLink>
        </li>
    )
}

BreadcrumbItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string
}

export default BreadcrumbItem
