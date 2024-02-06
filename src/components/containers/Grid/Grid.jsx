import React, { forwardRef, memo } from "react"
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import './grid.scss'

const GridComponent = forwardRef(function Grid(props, ref) {
    const {
        padding, margin, gap, columns, rows,
        direction, itemsX, itemsY, contentX,
        contentY, w100, h100, maxWidth, selfY, selfX,
        skipClickOutside,
        ...rest
    } = props

    let { className, style, } = props

    style = {
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
        width: w100 && '100%',
        height: h100 && '100%',
        maxWidth,
        ...style
    }

    className = className ? `${className} grid` : 'grid'

    return (
        <div ref={ref} {...{ ...rest, style, className, "data-skip-click-outside": skipClickOutside ? 1 : 0 }}>
            {props.children}
        </div>
    )
})

GridComponent.propTypes = {
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

GridComponent.defaultProps = {
    style: undefined,
    className: undefined,
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