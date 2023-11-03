import React, { memo } from 'react'
import PropTypes from 'prop-types';
import reactFastCompare from 'react-fast-compare'

import './button.scss'

const tp = (propName, prop) => {
    if (prop !== '' && prop !== undefined) return ` button--${propName}--${prop}`
    else return ''
}

const Button = props => {
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

    return <button className={className} style={style} onClick={onClick}  {...rest}>{children}</button>

}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['filled', 'filled--danger', 'outlined', 'outlined--danger']),
};

Button.defaultProps = {
    children: '',
    className: '',
    onClick: undefined,
    style: undefined,
    variant: 'filled',
};

export default memo(Button, reactFastCompare)