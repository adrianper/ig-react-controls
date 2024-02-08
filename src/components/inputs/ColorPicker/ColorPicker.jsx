import React from 'react'
import PropTypes from 'prop-types'

import { Grid, TextField } from '../../index'
import regexDictionary from '../../../utils/scripts/regexDictionary'

import './color_picker.scss'

const ColorPicker = (props) => {
    const {
        value,
        onChange,
        textFieldProps,
    } = props

    return (
        <Grid itemsY='end' direction='column' gap='0.71rem'>
            <input type='color' value={value} onChange={e => onChange(e.target.value)} />
            <TextField
                maxLength={7}
                maxWidth='7.85rem'
                label='HEX'
                pattern={regexDictionary.hexColor}
                value={value}
                onChange={onChange}
                {...textFieldProps}
            />
        </Grid>
    )
}

ColorPicker.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    textFieldProps: PropTypes.object,
}

ColorPicker.defaultProps = {
    value: '',
    onChange: undefined,
    textFieldProps: {},
}

export default ColorPicker