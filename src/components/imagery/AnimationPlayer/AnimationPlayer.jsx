import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import './animation_player.scss'

const AnimationPlayer = (props) => {
    const {
        children,
        className,
        animation,
        duration,
        hoverAnimate: hover,
    } = props

    /*------------------------------------STATE---------------------------------*/
    const [animate, setAnimate] = useState(false)

    /*------------------------------------REF---------------------------------*/
    const containerRef = useRef()

    /*------------------------------------FUNCTIONS---------------------------------*/
    const playAnimation = useCallback(() => {
        setAnimate(true)
    }, [setAnimate])

    /*------------------------------------EFFECT---------------------------------*/
    useEffect(() => {
        containerRef.current.style.animationDuration = `${duration}s`
    }, [duration])

    useEffect(() => {
        if (animate)
            setTimeout(() => {
                containerRef.current.classList.remove(`animation--${animation}`)
                setAnimate(false)
            }, duration * 1000)
    }, [animate])

    /*------------------------------------RENDER---------------------------------*/
    return (
        <div
            ref={containerRef}
            className={`animation_player${animate || !hover ? ` animation--${animation}` : ''} ${className}`}
            onMouseEnter={hover ? playAnimation : undefined}
        >
            {children}
        </div>
    )
}

AnimationPlayer.propTypes = {
    className: PropTypes.string,
    animation: PropTypes.oneOf(['pulse', 'shakeC', 'shakeB', 'upDown', 'downUp', 'zoomIn']),
    duration: PropTypes.number,
    hoverAnimate: PropTypes.bool,
}

AnimationPlayer.defaultProps = {
    className: '',
    animation: '',
    duration: 0.6,
    hoverAnimate: false,
}

export default memo(AnimationPlayer, reactFastCompare)