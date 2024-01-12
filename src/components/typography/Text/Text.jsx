import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'
import './text.scss'

const tp = (propName, prop) => {
    if (prop !== '' && prop !== undefined) return ` text--${propName}--${prop}`
    else return ''
}

const Text = forwardRef((props, ref) => {
    let {
        size,
        weight,
        disabled,
        ellipsis,
        ellipsisLines,
        underline,
        className,
        color,
        align,
        variant,
        style,
        ...rest
    } = props

    className += ` text`
    className += tp('size', size)
    className += tp('align', align)
    className += tp('color', color)

    className += ` text--${weight}`

    if (disabled) className += ' text--disabled'
    if (underline) className += ' text--underline'
    if (ellipsis) {
        className += ' text--ellipsis'
        style['WebkitLineClamp'] = ellipsisLines
    }

    const tagProps = { className, style, ref }

    switch (variant) {
        case 'h1': return <h1 {...{ ...tagProps, ...rest }}>{props.children}</h1>
        case 'h2': return <h2 {...{ ...tagProps, ...rest }}>{props.children}</h2>
        case 'h3': return <h3 {...{ ...tagProps, ...rest }}>{props.children}</h3>
        case 'h4': return <h4 {...{ ...tagProps, ...rest }}>{props.children}</h4>
        case 'h5': return <h5 {...{ ...tagProps, ...rest }}>{props.children}</h5>
        case 'p': return <p {...{ ...tagProps, ...rest }}>{props.children}</p>
        case 'li': return <li {...{ ...tagProps, ...rest }}>{props.children}</li>
        case 'span': return <span {...{ ...tagProps, ...rest }}>{props.children}</span>
        case 'label': return <label {...{ ...tagProps, ...rest }}>{props.children}</label>
        default: return <p {...{ ...tagProps, ...rest }}>{props.children}</p>
    }
})

Text.propTypes = {
    weight: PropTypes.oneOf(['thin', 'extra-light', 'light', 'regular', 'medium', 'semi-bold', 'bold', 'extra-bold', 'heavy']),
    disabled: PropTypes.bool,
    ellipsis: PropTypes.bool,
    ellipsisLines: PropTypes.number,
    underline: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.oneOf([PropTypes.null, 'left', 'center', 'right', 'justify']),
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'span', 'label']),
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    style: PropTypes.object,
}

Text.defaultProps = {
    weight: 'regular',
    disabled: false,
    ellipsis: false,
    ellipsisLines: 1,
    underline: false,
    className: undefined,
    color: 'first',
    align: undefined,
    variant: 'p',
    size: undefined,
    style: {},
}

export default memo(Text, reactFastCompare)