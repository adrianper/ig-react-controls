import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { ImSpinner9 } from 'react-icons/im'

import './spinner.scss'

const Spinner = (props) => {
    const {
        appSpinner,
        isLoading,
    } = props

    if (!isLoading) return null
    let className = 'loading_container'
    if (appSpinner) className += ' app_spinner'

    return (
        <div className={className}>
            {/* <div className='circle' /> */}
            {/* <ImSpinner9 className='loading-icon' /> */}
            <span className="circle_container" role="progressbar" style={{ width: '40px', height: '40px', display: 'block' }}>
                <svg viewBox="22 22 44 44">
                    <circle className="circle" cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle>
                </svg>
            </span>
        </div>
    )
}

Spinner.propTypes = {
    appSpinner: PropTypes.bool,
    isLoading: PropTypes.bool,
}

Spinner.defaultProps = {
    appSpinner: false,
    isLoading: false,
}

export default memo(Spinner)