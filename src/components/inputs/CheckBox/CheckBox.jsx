import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { IoMdCheckboxOutline } from "react-icons/io"
import { MdCheckBoxOutlineBlank } from "react-icons/md"

import './checkbox.scss'

const CheckBox = (props) => {
    const {
        className,
        value,
        onChange,
    } = props

    const handleChange = useCallback(() => {
        onChange(!value)
    }, [onChange, value])

    return (
        <div className={`checkbox ${className}`} onClick={handleChange}>
            {value ?
                <IoMdCheckboxOutline color='var(--component--color)' />
                :
                <MdCheckBoxOutlineBlank color='var(--component--color--inactive)' />
            }
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
