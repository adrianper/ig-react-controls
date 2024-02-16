import React, { memo, Children } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import { Flex, Grid } from '../../index'

import './slide_show.scss'

function SlideShow(props) {

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
    className += ' slide_show'

    return (
        <Flex className={className} {...containerProps}>
            {Children.map(props.children, (child, i) =>
                <Grid
                    className={`slide_show__screen${currentScreen === i ? ' open' : ''}`}
                    style={{ left: `-${currentScreen * 100}%` }}>
                    {child}
                </Grid>
            )}
        </Flex>
    )
}

SlideShow.propTypes = {
    containerProps: PropTypes.object,
    currentScreen: PropTypes.number,
}

SlideShow.defaultProps = {
    containerProps: {},
    currentScreen: 0,
}

export default memo(SlideShow, reactFastCompare)