import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types';
import reactFastCompare from 'react-fast-compare'

import './button.scss'

const tp = (propName, prop) => {
    if (prop !== '' && prop !== undefined) return ` button--${propName}--${prop}`
    else return ''
}

const ButtonComponent = forwardRef(function Button(props, ref) {
    let {
        className = '',
        children,
        onClick,
        style,
        variant,
        ...rest
    } = props

    className += tp('variant', variant)
    className += ' button'

    return <button ref={ref} className={className} style={style} onClick={onClick}  {...rest}>{children}</button>

})

ButtonComponent.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['filled', 'filled--danger', 'outlined', 'outlined--danger']),
};

ButtonComponent.defaultProps = {
    children: undefined,
    className: undefined,
    onClick: undefined,
    style: {},
    variant: 'filled',
};

export default memo(ButtonComponent, reactFastCompare)