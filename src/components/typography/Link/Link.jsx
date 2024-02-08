import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import './link.scss'

const tp = (propName, prop) => {
    if (prop !== '' && prop !== undefined) return ` text--${propName}--${prop}`
    else return ''
}

const Link = (props) => {
    const {
        className,
        align,
        size,
        weight,
        disabled,
        ellipsis,
        ellipsisLines,
        underline,
        style,
        target,
        href,
        onClick,
    } = props

    const handleClick = useCallback((e) => {
        if (onClick) {
            e.preventDefault()
            onClick(e)
        }
    }, [onClick])

    let elementClassName = `${className} link text--${weight}`
    elementClassName += tp('size', size) + tp('align', align)

    if (disabled) elementClassName += ' text--disabled'
    if (underline) elementClassName += ' text--underline'
    if (ellipsis) {
        elementClassName += ' text--ellipsis'
        style.WebkitLineClamp = ellipsisLines
    }

    return (
        <a className={elementClassName} style={style} href={href} target={target} onClick={handleClick}>
            {props.children}
        </a>
    )
}

Link.propTypes = {
    className: PropTypes.string,
    align: PropTypes.oneOf([undefined, 'left', 'center', 'right', 'justify']),
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    weight: PropTypes.oneOf(['thin', 'extra-light', 'light', 'regular', 'medium', 'semi-bold', 'bold', 'extra-bold', 'heavy']),
    disabled: PropTypes.bool,
    ellipsis: PropTypes.bool,
    ellipsisLines: PropTypes.number,
    underline: PropTypes.bool,
    style: PropTypes.object,
    target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top']),
    href: PropTypes.string,
    onClick: PropTypes.func,
}

Link.defaultProps = {
    className: '',
    align: undefined,
    size: undefined,
    weight: 'regular',
    regular: false,
    medium: false,
    bold: false,
    disabled: false,
    ellipsis: false,
    ellipsisLines: 1,
    underline: false,
    style: {},
    target: undefined,
    href: undefined,
    onClick: undefined,
}

export default memo(Link, reactFastCompare)