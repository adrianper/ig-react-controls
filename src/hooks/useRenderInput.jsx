import React from 'react'
import { CharacterField, CheckBox, ColorPicker, ComboBox, RadioButton, SearchBox, TextField, Toggle } from '../components'

export const useRenderInput = () => (inputType, inputProps) => {
    switch (inputType) {
        case 'calendar':
            return null//<CalendarV2 {...inputProps} />
        case 'date_month_year':
            return null//<DateMonthYear {...inputProps} />
        case 'character_field':
            return <CharacterField {...inputProps} />
        case 'checkbox':
            delete inputProps['ref']
            return <CheckBox {...inputProps} />
        case 'checkbox_group':
            return null//<CheckBoxGroup {...inputProps} />
        case 'color_picker':
            return <ColorPicker {...inputProps} />
        case 'combobox':
            return <ComboBox {...inputProps} />
        case 'combobox_range':
            return null//<ComboBoxRange {...inputProps} />
        case 'file_input':
            return null//<FileInput {...inputProps} />
        case 'toggle':
            delete inputProps['ref']
            return <Toggle {...inputProps} />
        case 'radio_button':
            return <RadioButton {...inputProps} />
        case 'record_group':
            return null// return <RecordGroup {...inputProps} />
        case 'record_group_custom':
            return null// return <RecordGroupCustom {...inputProps} />
        case 'record_group_checkbox':
            return null//<RecordGroupCheckBox {...inputProps} />
        case 'search_box':
            return <SearchBox {...inputProps} />
        case 'text_field':
            return <TextField {...inputProps} />
        default:
            return null
    }
}