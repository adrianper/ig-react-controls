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
        width = 0
        style["borderLeftWidth"] = thickness
    } else {
        height = 0
        width = width || '100%'
        style["borderTopWidth"] = thickness
    }

    className += ` divisor divisor--color--${color}`

    return <div {...{ className, style: { ...style, width, height, maxWidth, margin } }} />
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
    color: 'first',
    height: undefined,
    margin: undefined,
    maxWidth: undefined,
    thickness: '1px',
    vertical: false,
    width: undefined,
};


export default memo(Divisor)