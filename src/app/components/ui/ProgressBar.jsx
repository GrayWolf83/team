import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ label, progress, type = 'line' }) => {
    const getColor = (label) => {
        switch (label) {
            case 'HTML':
                return 'success'

            case 'CSS':
                return 'info'

            default:
                return 'warning'
        }
    }

    return type === 'line' ? ( // px-2 - отступ справа и слева
        <div className="px-2 mb-2">
            <h6>{label}</h6>
            <div className="progress">
                <div
                    className={`progress-bar progress-bar-animated progress-bar-striped bg-${getColor(
                        label
                    )}`}
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
    type: PropTypes.string
}

export default ProgressBar
