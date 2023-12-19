import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import './link.scss'

const tp = (propName, prop) => {
    if (prop !== '' && prop !== undefined) return ` text--${propName}--${prop}`
    else return ''
}

const Link = (props) => {
    let {
        align,
        className,
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

    className += ' link'
    className += tp('size', size) + tp('align', align)

    className += ` text--${weight}`

    if (disabled) className += ' text--disabled'
    if (underline) className += ' text--underline'
    if (ellipsis) {
        className += ' text--ellipsis'
        style.WebkitLineClamp = ellipsisLines
    }

    return (
        <a className={className} style={style} href={href} target={target} onClick={handleClick}>
            {props.children}
        </a>
    )
}

Link.propTypes = {
    align: PropTypes.oneOf([undefined, 'left', 'center', 'right', 'justify']),
    className: PropTypes.string,
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
    align: undefined,
    className: undefined,
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