import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './divider.scss'

const Divider = (props) => {

    const {
        color,
        height,
        margin,
        maxWidth,
        thickness,
        vertical,
        width
    } = props

    const style = { maxWidth }

    if (vertical) {
        style.minHeight = height || '100%'
        style.width = '0px'
        style.margin = `0px ${margin}`
        style.borderLeftWidth = thickness
        style.borderLeftColor = `var(--color--${color})`
    } else {
        style.width = width || '100%'
        style.height = '0px'
        style.margin = `${margin} 0px`
        style.borderTopWidth = thickness
        style.borderTopColor = `var(--color--${color})`
    }

    return <div className='divider' style={style} />
}

Divider.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    maxWidth: PropTypes.string,
    thickness: PropTypes.string,
    vertical: PropTypes.bool,
    width: PropTypes.string
}

Divider.defaultProps = {
    color: undefined,
    height: undefined,
    margin: undefined,
    maxWidth: undefined,
    thickness: '1px',
    vertical: false,
    width: undefined
}

export default memo(Divider)
