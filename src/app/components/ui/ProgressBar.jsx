import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ label, progress, color = 'success', type = 'line' }) => {
    return type === 'line' ? ( // px-2 - отступ справа и слева
        <div className="px-2">
            <h6>{label}</h6>
            <div className="progress">
                <div
                    className={`progress-bar progress-bar-animated progress-bar-striped bg-${color}`}
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {progress}%
                </div>
            </div>
        </div>
    ) : (
        <div className=""></div>
    )
}

ProgressBar.propTypes = {
    label: PropTypes.string,
    progress: PropTypes.number,
    // sucess info danger waning
    color: PropTypes.string,
    type: PropTypes.string
}

export default ProgressBar
