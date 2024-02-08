import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'
import './text.scss'

const tp = (propName, prop) => {
    if (prop !== '' && prop !== undefined) return ` text--${propName}--${prop}`
    else return ''
}

/**
 * @type React.FC<TextPropTypes>
 */

const Text = forwardRef((props, ref) => {
    const {
        className,
        children,
        size,
        weight,
        disabled,
        ellipsis,
        ellipsisLines,
        underline,
        color,
        align,
        variant,
        style,
        ...rest
    } = props

    let elementClassName = 'text ' + className
    elementClassName += tp('size', size)
    elementClassName += tp('align', align)
    elementClassName += tp('color', color)

    elementClassName += ` text--${weight}`

    if (disabled) elementClassName += ' text--disabled'
    if (underline) elementClassName += ' text--underline'
    if (ellipsis) {
        elementClassName += ' text--ellipsis'
        style['WebkitLineClamp'] = ellipsisLines
    }

    const tagProps = { className: elementClassName, style, ref }

    switch (variant) {
        case 'h1': return <h1 {...{ ...tagProps, ...rest }}>{children}</h1>
        case 'h2': return <h2 {...{ ...tagProps, ...rest }}>{children}</h2>
        case 'h3': return <h3 {...{ ...tagProps, ...rest }}>{children}</h3>
        case 'h4': return <h4 {...{ ...tagProps, ...rest }}>{children}</h4>
        case 'h5': return <h5 {...{ ...tagProps, ...rest }}>{children}</h5>
        case 'p': return <p {...{ ...tagProps, ...rest }}>{children}</p>
        case 'li': return <li {...{ ...tagProps, ...rest }}>{children}</li>
        case 'span': return <span {...{ ...tagProps, ...rest }}>{children}</span>
        case 'label': return <label {...{ ...tagProps, ...rest }}>{children}</label>
        default: return <p {...{ ...tagProps, ...rest }}>{children}</p>
    }
})

const TextPropTypes = {
    className: PropTypes.string,
    weight: PropTypes.oneOf(['thin', 'extra-light', 'light', 'regular', 'medium', 'semi-bold', 'bold', 'extra-bold', 'heavy']),
    disabled: PropTypes.bool,
    ellipsis: PropTypes.bool,
    ellipsisLines: PropTypes.number,
    underline: PropTypes.bool,
    color: PropTypes.string,
    align: PropTypes.oneOf([PropTypes.null, 'left', 'center', 'right', 'justify']),
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'span', 'label']),
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    style: PropTypes.object,
}

Text.propTypes = TextPropTypes

Text.defaultProps = {
    className: '',
    weight: 'regular',
    disabled: false,
    ellipsis: false,
    ellipsisLines: 1,
    underline: false,
    color: 'first',
    align: undefined,
    variant: 'p',
    size: undefined,
    style: {},
}

export default memo(Text, reactFastCompare)