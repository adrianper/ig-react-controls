import React, { Fragment, memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
// import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";

import './toggle.scss'

const Toggle = (props) => {
    let {
        className = ''
    } = props
    const {
        value,
        onChange,
        alwaysActive,
    } = props

    const handleChange = useCallback(() => {
        onChange(!value)
    }, [onChange, value])

    className += ' toggle_switch'
    if (alwaysActive) className += ' not_inactive'

    return (
        <div className={className} onClick={handleChange}>
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

Toggle.propTypes = {
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    alwaysActive: PropTypes.bool,
}

Toggle.defaultProps = {
    value: false,
    onChange: undefined,
    alwaysActive: false,
}

export default memo(Toggle, reactFastCompare)