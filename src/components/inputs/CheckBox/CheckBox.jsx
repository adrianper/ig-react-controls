import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { IoMdCheckboxOutline } from "react-icons/io"
import { MdCheckBoxOutlineBlank } from "react-icons/md"

import './checkbox.scss'

const CheckBox = (props) => {
    const {
        value,
        onChange,
    } = props

    let { className } = props

    const handleChange = useCallback(() => {
        onChange(!value)
    }, [onChange, value])

    return (
        <div className={`checkbox ${className}`} onClick={handleChange}>
            <IoMdCheckboxOutline className={`react_icon on ${value ? 'active' : ''}`} />
            <MdCheckBoxOutlineBlank className={`react_icon off ${!value ? 'active' : ''}`} />
        </div>
    )
}

CheckBox.propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}

CheckBox.defaultProps = {
    className: '',
    value: false,
    onChange: undefined,
}

export default CheckBox