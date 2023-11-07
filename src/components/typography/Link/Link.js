import React, { memo, useCallback } from 'react'
import reactFastCompare from 'react-fast-compare'
import { Link as RouterLink } from 'react-router-dom'

import './link.scss'

const tp = (propName, prop) => {
    return prop ? ` text--${propName}--${prop}` : ''
}

const Link = (props) => {
    let {
        children,
        router = false,
        className = '',
        color = '',
        size = '',
        align = '',
        bold = false,
        regular = false,
        target = '_blank',
        href,
        onClick,
        underline = false,
        style
    } = props

    const handleClick = useCallback((e) => {
        if (onClick) {
            e.preventDefault()
            onClick(e)
        }
    }, [onClick])

    className += ' link'
    className += tp('size', size)
    className += tp('align', align)
    if (bold) className += ' text--bold'
    if (regular) className += ' text--regular'
    if (underline) className += ' text--underline'
    if (color) className += ` link--${color}`

    return router ?
        <RouterLink to={href} className={className} style={style}>{children}</RouterLink>
        :
        <a className={className} style={style} href={href} target={target} onClick={handleClick}>
            {children}
        </a>
}

export default memo(Link, reactFastCompare)