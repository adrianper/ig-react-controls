import React, { memo, useCallback, useState, useRef, useEffect, Fragment } from 'react'
import reactFastCompare from 'react-fast-compare'
import PropTypes from 'prop-types'

import _$ from 'jquery'

import { Portal, Text } from '../../index'

import './tooltip.scss'

const getRelativePosition = (position, relativeNode, element) => {
    let positionResult = {}
    if (element != undefined && relativeNode != undefined) {
        const windowWidth = window.innerWidth, windowHeight = window.innerHeight
        const tooltipWidth = _$(element).outerWidth(true), tooltipHeight = _$(element).outerHeight(true)
        const nodeWidth = _$(relativeNode).outerWidth(true), nodeHeight = _$(relativeNode).outerHeight(true)
        const nodePosition = relativeNode.getBoundingClientRect()

        switch (position) {
            case 'top':
                positionResult['bottom'] = windowHeight - nodePosition.top + 14
                positionResult['left'] = nodePosition.left + (nodeWidth / 2) - (tooltipWidth / 2)
                break
            case 'left':
                positionResult['right'] = windowWidth - nodePosition.left + 14
                positionResult['top'] = nodePosition.top + (nodeHeight / 2) - (tooltipHeight / 2)
                break
            case 'right':
                positionResult['left'] = nodePosition.right + 14
                positionResult['top'] = nodePosition.top + (nodeHeight / 2) - (tooltipHeight / 2)
                break
            default:
                positionResult['top'] = nodePosition.bottom + 14
                positionResult['left'] = nodePosition.left + (nodeWidth / 2) - (tooltipWidth / 2)
        }
    }
    return positionResult
}

const Tooltip = (props) => {
    const {
        children,
        className: tooltipClassName,
        containerClassName,
        position,
        title,
        titleSize,
        interactive,
        closeDelay,
        onHover,
    } = props

    /*-----------------------------------STATE---------------------------------*/
    const [isHover, setIsHover] = useState(false)
    const [positionResult, setPositionResult] = useState({})
    const tooltip = useRef(), node = useRef()

    /*-----------------------------------REF---------------------------------*/
    const timerRef = useRef()

    /*-----------------------------------EFFECTS---------------------------------*/
    useEffect(() => {
        if (isHover) {
            if (tooltip.current !== undefined && node.current !== undefined) {
                const pos = getRelativePosition(position, node.current, tooltip.current)
                setPositionResult(pos)
            }
        }
    }, [isHover, position])

    /*----------------------------------FUNCTIONS----------------------------------*/
    const handleMouseEnter = useCallback(() => {
        if (typeof onHover === 'function')
            onHover()

        if (interactive)
            clearTimeout(timerRef.current)

        setIsHover(true)
    }, [interactive, onHover])

    const handleMouseEnterTooltip = useCallback(() => {
        if (interactive)
            clearTimeout(timerRef.current)
    }, [interactive])

    const handleMouseLeave = useCallback(() => {
        if (interactive)
            timerRef.current = setTimeout(() => {
                setIsHover(false)
            }, closeDelay)
        else
            setIsHover(false)
    }, [closeDelay, interactive])

    const handleMouseLeaveTooltip = useCallback(() => {
        if (interactive)
            timerRef.current = setTimeout(() => {
                setIsHover(false)
            }, closeDelay)
    }, [closeDelay, interactive])

    /*---------------------------------POSITIONING---------------------------------*/
    let style = {}
    if (isHover) style['display'] = 'block'
    style['top'] = positionResult['top']
    style['bottom'] = positionResult['bottom']
    style['left'] = positionResult['left']
    style['right'] = positionResult['right']

    /*------------------------------------RENDER-----------------------------------*/
    return (
        <Fragment>
            <div
                ref={node}
                className={`tooltip_container ${containerClassName}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            <Portal>
                <Text
                    ref={tooltip}
                    align='center'
                    className={`tooltip ${tooltipClassName} tooltip--position--${position}`}
                    size={titleSize}
                    style={style}
                    onMouseEnter={handleMouseEnterTooltip}
                    onMouseLeave={handleMouseLeaveTooltip}
                >
                    {title}
                </Text>
            </Portal>
        </Fragment>
    )

}

Tooltip.propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    title: PropTypes.string,
    titleSize: PropTypes.number,
    interactive: PropTypes.bool,
    closeDelay: PropTypes.number,
    onHover: PropTypes.func,
}

Tooltip.defaultProps = {
    className: '',
    containerClassName: '',
    position: 'bottom',
    title: '',
    titleSize: undefined,
    interactive: false,
    closeDelay: 200,
    onHover: undefined,
}

export default memo(Tooltip, reactFastCompare)