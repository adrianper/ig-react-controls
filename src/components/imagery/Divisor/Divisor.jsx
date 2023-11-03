import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './divisor.scss'

const Divisor = (props) => {
    let {
        className,
        color,
        height,
        margin,
        maxWidth,
        thickness,
        vertical,
        width,
    } = props

    let style = {}

    if (vertical) {
        height = height || '100%'
        width = thickness
        style.margin = `0 ${margin}`
    } else {
        height = thickness
        width = width || '100%'
        style.margin = `${margin} 0`
    }

    className += ` divisor`

    if (color) {
        style.backgroundColor = `var(--color--${color})`
    }

    return <div {...{ className, style: { ...style, minWidth: width, minHeight: height, maxWidth } }} />
}

Divisor.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    maxWidth: PropTypes.string,
    thickness: PropTypes.string,
    vertical: PropTypes.bool,
    width: PropTypes.string,
};

Divisor.defaultProps = {
    className: '',
    color: undefined,
    height: undefined,
    margin: undefined,
    maxWidth: undefined,
    thickness: '1px',
    vertical: false,
    width: undefined,
};

export default memo(Divisor)