import React, { memo, useCallback, useState, useRef, useEffect } from 'react'

import { Text } from 'components'
import { getRelativePosition } from 'scripts/componentFunctions'

import './tooltip.scss'

export default memo ( function Tooltip (props) {
    let {
        children,
        text = '',
        tooltipClassName = '',
        containerClassName = '',
        tooltipMaxWidth = '',
        size = '3',
        position = 'bottom',
        onMouseEnter = () => {},
    } = props
    
    /*-----------------------------------STATE---------------------------------*/
        const [isHover, setIsHover] = useState(false)
        const [positionResult, setPositionResult] = useState({})
        const tooltip = useRef(), node = useRef()
    
    /*-----------------------------------EFFECTS---------------------------------*/
        useEffect(() => {
            if(isHover){
                if(tooltip.current !== undefined && node.current !== undefined){
                    const pos = getRelativePosition(position, node.current, tooltip.current)
                    setPositionResult(pos)
                }
            }
                    
        }, [isHover, position])
    
    /*----------------------------------FUNCTIONS----------------------------------*/
        const onMouseEnterFunc = useCallback(() => {
            if(typeof onMouseEnter === 'function') onMouseEnter()
            setIsHover(true)
        }, [onMouseEnter])
        
        const onMouseLeaveFunc = useCallback(() => {
            setIsHover(false)
        }, [])
    
    /*---------------------------------POSITIONING---------------------------------*/
        let style = {}
        if(isHover) style['display'] = 'inherit'
        style['top'] = positionResult['top']
        style['bottom'] = positionResult['bottom']
        style['left'] = positionResult['left']
        style['right'] = positionResult['right']
        
    /*------------------------------------RENDER-----------------------------------*/
        containerClassName = `tooltip_container ${containerClassName}`
        return (
            <div ref={node} onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc} className={containerClassName}>
                {children}
                <Text className={`tooltip ${tooltipClassName} tooltip--position--${position}`} size={size} 
                    align='center' maxWidth={tooltipMaxWidth} ref={tooltip} style={style}>
                    
                    {text}
                </Text>
            </div>
        )
    
})