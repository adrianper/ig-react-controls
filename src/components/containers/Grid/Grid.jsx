import React, { forwardRef, memo } from "react"
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import './grid.scss'

/**
 * @type React.FC<GridPropTypes>
 */

const GridComponent = forwardRef(function Grid(props, ref) {
    const {
        children, className, style, padding, margin, gap, columns, rows,
        direction, itemsX, itemsY, contentX,
        contentY, w100, h100, maxWidth, selfY, selfX,
        skipClickOutside,
        ...rest
    } = props

    const elementStyle = {
        width: w100 && '100%',
        height: h100 && '100%',
        padding,
        margin,
        gap: gap,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridAutoFlow: direction,
        justifyItems: itemsX,
        alignItems: itemsY,
        justifyContent: contentX,
        justifySelf: selfX,
        alignContent: contentY,
        alignSelf: selfY,
        maxWidth,
        ...style,
    }

    return (
        <div
            ref={ref}
            className={`grid ${className}`}
            style={elementStyle}
            data-skip-click-outside={skipClickOutside ? 1 : 0}
            {...rest}
        >
            {children}
        </div >
    )
})

const GridPropTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    gap: PropTypes.string,
    columns: PropTypes.string,
    rows: PropTypes.string,
    direction: PropTypes.oneOf(['column', 'row']),
    itemsX: PropTypes.string,
    itemsY: PropTypes.string,
    contentX: PropTypes.string,
    contentY: PropTypes.string,
    w100: PropTypes.bool,
    h100: PropTypes.bool,
    maxWidth: PropTypes.string,
    selfY: PropTypes.string,
    selfX: PropTypes.string,
    skipClickOutside: PropTypes.bool,
}

GridComponent.propTypes = GridPropTypes

GridComponent.defaultProps = {
    style: undefined,
    className: '',
    padding: undefined,
    margin: undefined,
    gap: undefined,
    columns: undefined,
    rows: undefined,
    direction: undefined,
    itemsX: undefined,
    itemsY: undefined,
    contentX: undefined,
    contentY: undefined,
    w100: false,
    h100: false,
    maxWidth: undefined,
    selfY: undefined,
    selfX: undefined,
    skipClickOutside: false,
}

export default memo(GridComponent, reactFastCompare)