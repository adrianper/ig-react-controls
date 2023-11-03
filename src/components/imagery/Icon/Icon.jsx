import React, { memo } from 'react'
import reactFastCompare from 'react-fast-compare'
import PropTypes from 'prop-types';

import './icon.scss'

const calcRotation = (direction) => ({
    up: 0,
    right: 90,
    down: 180,
    left: -90,
})[direction]

const Icon = (props) => {
    let {
        className,
        direction,
        filter,
        icon,
        onClick,
        size,
        style,
    } = props

    className += ' icon'
    className += icon !== '' ? ` icon--${icon}` : ''

    if (filter !== '') style['filter'] = `var(--filter--${filter})`

    const styleSpan = {
        width: `${size}rem`,
        height: `${size}rem`,
        backgroundImage: `url(https://s3.us-east-2.amazonaws.com/magiei2/public/img/icons/${icon}.svg)`,
        transform: `rotateZ(${calcRotation(direction)}deg)`,
        ...style
    }

    return (
        <span className={className} style={styleSpan} onClick={onClick} />
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
    icon: '',
    className: '',
    size: 1,
    direction: 'up',
    onClick: undefined,
    style: {},
};

export default memo(Icon, reactFastCompare)