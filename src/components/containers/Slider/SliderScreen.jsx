import React, { memo } from 'react'
import reactFastCompare from 'react-fast-compare'

import { Grid } from 'components'

const SliderScreen = props => {

    const {
        children,
        currentScreen,
        screenIdx,
        // isOpen = false,
        // animationDuration = 0.3,
        // onClose = () => { },
        // onOpen = () => { },
    } = props

    /*---------------------------------------STATE-----------------------------------------*/
    // const [isActive, setIsActive] = useState(false)

    // const contRef = useRef()

    /*--------------------------------------EFFECTS----------------------------------------*/
    // useEffect(() => {
    // if (isActive) onOpen()

    // if (!isActive)
    // setTimeout(() => {
    //     onClose()
    // }, animationDuration * 1000)

    // }, [isActive])

    /*----------------------------------EXTERNAL FUNCTIONS---------------------------------*/
    // useImperativeHandle(ref, () => ({
    //     updateScreen: (screen, active) => {
    //         contRef.current.style.left = `-${screen * 100}%`

    //         contRef.current.classList.remove('open')
    //         if (active) contRef.current.classList.add('open')

    //         setIsActive(active)
    //     },
    // }))

    /*---------------------------------------RENDER----------------------------------------*/

    return (
        <Grid
            className={`slider__screen${currentScreen === screenIdx ? ' open' : ''}`}
            style={{ left: `-${currentScreen * 100}%` }}>
            {children}
        </Grid>
    )
}

export default memo(SliderScreen, reactFastCompare)
