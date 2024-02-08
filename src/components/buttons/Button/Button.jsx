import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import './button.scss'

const tp = (propName, prop) => {
    if (prop !== '' && prop !== undefined) return ` button--${propName}--${prop}`
    else return ''
}

/**
 * @type React.FC<ButtonPropTypes>
 */

const ButtonComponent = forwardRef(function Button(props, ref) {
    const {
        children, className, onClick, style, variant, ...rest
    } = props

    return (
        <button
            ref={ref}
            className={`button ${tp('variant', variant)} ${className}`}
            style={style}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
})

const ButtonPropTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['filled', 'filled--danger', 'outlined', 'outlined--danger']),
}

ButtonComponent.propTypes = ButtonPropTypes

ButtonComponent.defaultProps = {
    className: '',
    onClick: undefined,
    style: {},
    variant: 'filled',
}

export default memo(ButtonComponent, reactFastCompare)