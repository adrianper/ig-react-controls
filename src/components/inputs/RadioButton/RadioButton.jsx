import React, { Fragment, memo } from 'react'
import reactFastCompare from 'react-fast-compare'
import PropTypes from 'prop-types'

import { Grid, Text } from '../../'

import './radio_button.scss'
import './radio_button_colors.scss'

const RadioButton = (props) => {
    const {
        value,
        onChange,
        gap,
        templateColumns,
        templateRows,
        direction,
        inputs,
        likert,
        containerStyle,
    } = props

    return (
        <Grid itemsX='center' itemsY='center' className='radio_button' direction={direction} gap={gap} columns={templateColumns} rows={templateRows} style={containerStyle}>
            {
                Object.keys(inputs).map(inputName => (
                    <Fragment key={inputName}>
                        {inputs[inputName] && <Text>{inputs[inputName]}</Text>}
                        <div
                            className={`radio_button__input${value === inputName ? ' checked' : ''}`}
                            onClick={() => onChange(inputName)}>
                            <div className={`radio_button__circle${likert ? ` size__${Math.abs(inputName) + 1}` : ''}`} />
                        </div >
                    </Fragment >
                ))
            }
        </Grid >
    )
}

RadioButton.PropTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    gap: PropTypes.string,
    templateColumns: PropTypes.string,
    templateRows: PropTypes.string,
    direction: PropTypes.oneOf(['row', 'column']),
    inputs: PropTypes.object,
    likert: PropTypes.bool,
    containerStyle: PropTypes.object,
}

RadioButton.defaultProps = {
    value: '',
    onChange: undefined,
    gap: '1rem',
    templateColumns: '',
    templateRows: '',
    direction: 'row',
    inputs: {},
    likert: false,
    containerStyle: {},
}

export default memo(RadioButton, reactFastCompare)