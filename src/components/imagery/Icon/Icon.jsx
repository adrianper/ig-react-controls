import React, { memo } from 'react'
import reactFastCompare from 'react-fast-compare'
import PropTypes from 'prop-types';

import './icon.scss'

const calcRotation = (direction) => ({
    up: 'rotate--0',
    right: 'rotate--90',
    down: 'rotate--180',
    left: 'rotate--270',
})[direction]

const Icon = (props) => {
    const {
        className,
        direction,
        filter,
        icon,
        onClick,
        size,
        style,
    } = props

    if (filter) style['filter'] = `var(--filter--${filter})`

    const elementStyle = {
        width: `${size}rem`,
        height: `${size}rem`,
        backgroundImage: `url(https://s3.us-east-2.amazonaws.com/magiei2/public/img/icons/${icon}.svg)`,
        ...style
    }

    return (
        <span
            className={`icon ${className} icon--${icon} ${calcRotation(direction)}`}
            style={elementStyle}
            onClick={onClick}
        />
    )
}

Icon.propTypes = {
    className: PropTypes.string,
    direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    filter: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.object,
};

Icon.defaultProps = {
    className: '',
    icon: undefined,
    size: 1,
    direction: 'up',
    onClick: undefined,
    style: {},
};

export default memo(Icon, reactFastCompare)