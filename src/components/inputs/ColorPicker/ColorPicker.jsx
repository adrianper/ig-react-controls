import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Grid, TextField } from '../../'
import regexDictionary from '../../../utl/scripts/regexDictionary'

import './color_picker.scss'

const ColorPickerComponent = forwardRef(function ColorPicker(props, ref) {
    const {
        value,
        onChange,
        textFieldProps,
    } = props

    return (
        <Grid itemsY='end' direction='column' gap='0.71rem'>
            <input type='color' value={value} onChange={e => onChange(e.target.value)} />
            <TextField
                maxLength='7'
                maxWidth='7.85rem'
                label='HEX'
                ref={ref}
                pattern={regexDictionary.hexColor}
                value={value}
                onChange={onChange}
                {...textFieldProps}
            />
        </Grid>
    )
})

ColorPickerComponent.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    textFieldProps: PropTypes.object,
}

ColorPickerComponent.defaultProps = {
    value: '',
    onChange: undefined,
    textFieldProps: {},
}

export default ColorPickerComponent