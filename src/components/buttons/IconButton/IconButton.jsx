import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../imagery/Icon/Icon.jsx'

import './icon_button.scss'

const IconButton = (props) => {
    /*---------------------------------------PROPS-----------------------------------------*/
    const {
        className, icon, size, direction, onClick, style,
    } = props

    /*---------------------------------------FUNCTIONS-----------------------------------------*/

    /*---------------------------------------RENDER-----------------------------------------*/

    return (
        <div style={style} className={`icon_button icon_button--${icon} ${className}`} onClick={onClick}>
            <Icon
                filter='active'
                icon={icon}
                size={size}
                direction={direction} />
        </div>
    )
}

IconButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
}

IconButton.defaultProps = {
    className: '',
    icon: undefined,
    size: 1.3,
    direction: 'up',
    onClick: undefined,
    style: {},
}

export default memo(IconButton)