import React, { forwardRef, memo, useMemo } from 'react'
import PropTypes from 'prop-types';
import reactFastCompare from 'react-fast-compare'

import './flex.scss'

const FlexComponent = forwardRef(function Flex(props, ref) {
    let { className } = props

    const {
        style,
        margin,
        padding,
        direction,
        gap,
        align,
        justify,
        maxWidth,
        w100,
        h100,
        skipClickOutside,
        wrap,
        ...rest
    } = props

    const newStyle = useMemo(() => ({
        padding,
        margin,
        flexDirection: direction,
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap && 'wrap',
        width: w100 && '100%',
        height: h100 && '100%',
        maxWidth,
        ...style
    }), [padding, margin, direction, gap, align, justify, wrap, w100, h100, maxWidth, style])

    className = className ? `${className} flex` : 'flex'

    return (

        <div ref={ref} {...{ ...rest, className, style: newStyle, "data-skip-click-outside": skipClickOutside ? 1 : 0 }}>
            {props.children}
        </div >
    )
})

FlexComponent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    margin: PropTypes.string,
    padding: PropTypes.string,
    direction: PropTypes.oneOf(['column', 'row']),
    gap: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    maxWidth: PropTypes.string,
    w100: PropTypes.bool,
    h100: PropTypes.bool,
    skipClickOutside: PropTypes.bool,
    wrap: PropTypes.bool,
};

FlexComponent.defaultProps = {
    className: undefined,
    style: {},
    margin: undefined,
    padding: undefined,
    direction: undefined,
    gap: undefined,
    align: undefined,
    justify: undefined,
    maxWidth: undefined,
    w100: undefined,
    h100: undefined,
    skipClickOutside: false,
    wrap: undefined,
};

export default memo(FlexComponent, reactFastCompare)