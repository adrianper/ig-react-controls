import React, { forwardRef, memo, useMemo } from 'react'
import PropTypes from 'prop-types';
import reactFastCompare from 'react-fast-compare'

import './flex.scss'

/**
 * @type React.FC<FlexPropTypes>
 */

const FlexComponent = forwardRef(function Flex(props, ref) {
    const {
        children,
        className,
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

    const elementStyle = {
        flexDirection: direction,
        flexWrap: wrap && 'wrap',
        width: w100 && '100%',
        height: h100 && '100%',
        maxWidth,
        alignItems: align,
        justifyContent: justify,
        padding,
        margin,
        gap,
        ...style,
    }

    return (
        <div
            ref={ref}
            className={`flex ${className}`}
            style={elementStyle}
            data-skip-click-outside={skipClickOutside ? 1 : 0}
            {...rest}
        >
            {children}
        </div >
    )
})

const FlexPropTypes = {
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
}

FlexComponent.propTypes = FlexPropTypes

FlexComponent.defaultProps = {
    className: '',
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
    wrap: false,
}

export default memo(FlexComponent, reactFastCompare)