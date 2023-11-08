import React, { memo, Children } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import { Flex, Grid } from '../../'

import './slider.scss'

function Slider(props) {

    const {
        containerProps,
        currentScreen
    } = props

    let { className = '' } = props

    /*---------------------------------------STATE-----------------------------------------*/

    /*----------------------------------------REF------------------------------------------*/

    /*---------------------------------FUNCTIONS----------------------------------*/

    /*--------------------------------------EFFECTS----------------------------------------*/

    /*---------------------------------------RENDER----------------------------------------*/
    className += ' slider'

    return (
        <Flex className={className} {...containerProps}>
            {Children.map(props.children, (child, i) =>
                <Grid
                    className={`slider__screen${currentScreen === i ? ' open' : ''}`}
                    style={{ left: `-${currentScreen * 100}%` }}>
                    {child}
                </Grid>
            )}
        </Flex>
    )
}

Slider.propTypes = {
    containerProps: PropTypes.object,
    currentScreen: PropTypes.number,
}

Slider.defaultProps = {
    containerProps: {},
    currentScreen: 0,
}

export default memo(Slider, reactFastCompare)