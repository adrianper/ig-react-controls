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
            <ImSpinner9 className='loading-icon' />
        </div>
    )
}

Spinner.PropTypes = {
    appSpinner: PropTypes.bool,
    isLoading: PropTypes.bool,
}

Spinner.defaultProps = {
    appSpinner: false,
    isLoading: false,
}

export default memo(Spinner)