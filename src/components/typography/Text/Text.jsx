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
        regular,
        medium,
        bold,
        disabled,
        ellipsis,
        elipsisLines,
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
    if (regular) className += ' text--regular'
    if (medium) className += ' text--medium'
    if (bold) className += ' text--bold'
    if (disabled) className += ' text--disabled'
    if (underline) className += ' text--underline'
    if (ellipsis) {
        className += ' text--ellipsis'
        style['WebkitLineClamp'] = elipsisLines
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
    regular: PropTypes.bool,
    medium: PropTypes.bool,
    bold: PropTypes.bool,
    disabled: PropTypes.bool,
    ellipsis: PropTypes.bool,
    elipsisLines: PropTypes.number,
    underline: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    align: PropTypes.oneOf(['', 'left', 'center', 'right', 'justify']),
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'span', 'label']),
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    style: PropTypes.object,
}

Text.defaultProps = {
    regular: false,
    medium: false,
    bold: false,
    disabled: false,
    ellipsis: false,
    elipsisLines: 1,
    underline: false,
    className: '',
    color: 'first',
    align: '',
    variant: 'p',
    size: undefined,
    style: {},
}

export default memo(Text, reactFastCompare)