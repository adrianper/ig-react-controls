import React, { Fragment, memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
// import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";

import './toggle_switch.scss'

const ToggleSwitch = (props) => {
    const {
        className,
        value,
        onChange,
        alwaysActive,
    } = props

    const handleChange = useCallback(() => {
        onChange(!value)
    }, [onChange, value])

    let elementClassName = `toggle_switch ${className}`
    if (alwaysActive) elementClassName += ' not_inactive'

    return (
        <div className={elementClassName} onClick={handleChange}>
            {alwaysActive ?
                <Fragment>
                    <CgToggleOn className={`not_inactive react_icon ${!value ? 'active' : 'inactive'}`} />
                    <CgToggleOff className={`not_inactive react_icon ${value ? 'active' : 'inactive'}`} />
                </Fragment>
                // <Fragment>
                //     <BiSolidToggleLeft className={`not_inactive react_icon ${!value ? 'active' : 'inactive'}`} />
                //     <BiSolidToggleRight className={`not_inactive react_icon ${value ? 'active' : 'inactive'}`} />
                // </Fragment>
                :
                <Fragment>
                    <LiaToggleOffSolid className={`react_icon ${!value ? 'active' : 'inactive'}`} />
                    <LiaToggleOnSolid className={`on react_icon ${value ? 'active' : 'inactive'}`} />
                </Fragment>
            }
        </div>
    )
}

ToggleSwitch.propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    alwaysActive: PropTypes.bool,
}

ToggleSwitch.defaultProps = {
    className: '',
    value: false,
    onChange: undefined,
    alwaysActive: false,
}

export default memo(ToggleSwitch, reactFastCompare)