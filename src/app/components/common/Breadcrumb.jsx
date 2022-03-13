import React from 'react'
import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Breadcrumb = ({ crumbs }) => {
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {crumbs?.length &&
                        crumbs.map((item) => {
                            if (item.path) {
                                return (
                                    <li
                                        className="breadcrumb-item"
                                        key={item.title}>
                                        <NavLink to={item.path}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            }

                            return (
                                <li
                                    className="breadcrumb-item active"
                                    key={item.title}
                                    aria-current="page">
                                    {item.title}
                                </li>
                            )
                        })}
                </ol>
            </nav>
        </div>
    )
}

Breadcrumb.propTypes = {
    crumbs: PropTypes.array
}

export default Breadcrumb
