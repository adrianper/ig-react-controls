
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'
import _$ from 'jquery'

import { useClickOutside, useScrollOutside } from '../../../utils/hooks'
import { Grid, Text } from '../../index'

import { IoIosArrowDown } from "react-icons/io";

import ComboBoxList from './ComboBox__List'

import './combobox.scss'

/**
 * @type React.FC<ComboBoxPropTypes>
 */

const ComboBoxComponent = forwardRef(function ComboBox(props, ref) {
    let {
        inputClassName,
        value,
        onChange,
        options,
        nullValue,
        required,
        onValidate,
        placeholder,

        w100,
        maxWidth,

        className,
        label,

        errorMessage,
        sortList,
        reverseList,
        floatingLabel,
        style,
    } = props

    /*-----------------------------------------------STATE-----------------------------------------------------------*/
    const [isOpen, setIsOpen] = useState(false)
    const [animationOnClose, setAnimationOnClose] = useState(false)
    const [comboStatus, setStatus] = useState('normal')
    const [isFocused, setIsFocused] = useState(false)

    /*-----------------------------------------------REF-----------------------------------------------------------*/
    const comboboxRef = useRef()
    const listRef = useRef()

    /*-----------------------------------------------HOOKS-----------------------------------------------------------*/
    useClickOutside(comboboxRef, () => {
        setIsOpen(false)
    })

    useScrollOutside(listRef, () => {
        setAnimationOnClose(false)
        setIsOpen(false)
    })

    /*-----------------------------------------------FUNCTIONS-----------------------------------------------------------*/
    const handleFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    const handleBlur = useCallback(() => {
        setIsFocused(false)
    }, [])

    const handleClickCombobox = useCallback(() => {
        setIsOpen(opened => !opened)
    }, [])

    const handleChange = useCallback((value) => {
        setStatus('normal')
        onChange(value)
        setIsOpen(false)
    }, [onChange])

    /*------------------------------------------IMPERATIVE HANDLE------------------------------------------------------*/
    const validate = useCallback(() => {
        let valid = true

        if (required && value === '') {
            setStatus('error')
            valid = false
        }

        if (onValidate && !onValidate(value)) {
            setStatus('error')
            valid = false
        }

        if (valid) {
            setStatus('normal')
        }

        return valid
    }, [onValidate, required, value])

    useImperativeHandle(ref, () => ({
        errorMessage,
        label,
        validate,
        setStatus,
    }), [errorMessage, validate, setStatus])

    /*-----------------------------------------------EFFECTS-----------------------------------------------------------*/
    useEffect(() => {
        if (!isOpen) return
        const selectedElement = comboboxRef.current.getElementsByClassName('combobox__list__option--selected')[0]
        if (selectedElement)
            setTimeout(() => {
                _$(comboboxRef.current).find('.combobox__list').scrollTop(selectedElement.offsetTop)
            }, 50)

        if (!animationOnClose) setAnimationOnClose(true)
        // eslint-disable-next-line
    }, [isOpen])

    useEffect(() => {
        if (nullValue) {
            options[''] = placeholder
        } else if (!nullValue) {
            delete options['']
        }
    }, [nullValue, options, placeholder])

    /*-----------------------------------------------RENDER------------------------------------------------------------*/
    const valueContent = value !== '' ? options[value] : (floatingLabel ? '_' : placeholder)
    const labelContent = `${label || placeholder}${required ? ' *' : ''}`

    if (!labelContent) className += ' no_label'
    if (value !== '' || !floatingLabel) className += ' label_up'
    if (isFocused) className += ` combobox--focused`
    className += ` combobox--status--${comboStatus}${floatingLabel ? ' floating_label' : ''}`

    inputClassName += ' combobox'

    return (
        <Grid w100={w100} maxWidth={maxWidth} ref={comboboxRef}
            gap='1rem' className={`${className} combobox__container`}
            style={style}
        >
            {labelContent && <label className='combobox__label'>{labelContent}</label>}
            <Grid className={inputClassName} onClick={handleClickCombobox} tabIndex='0'
                contentY='center' itemsY='center' direction='column' gap='1rem' columns='1fr auto'
                onFocus={handleFocus} onBlur={handleBlur}>
                <Text className='combobox__text'>{valueContent}</Text>
                <div className='react_icon_container'>
                    <IoIosArrowDown className='combobox__arrow_btn' size='24px' />
                </div>
                <fieldset className='combobox__fieldset'>
                    <legend className='combobox__legend'>{labelContent}</legend>
                </fieldset>
            </Grid>

            <ComboBoxList {...{
                listRef, options, value, handleChange, comboboxRef,
                isOpen, animationOnClose, sortList, reverseList
            }} />
        </Grid>
    )
})

const ComboBoxPropTypes = {
    inputClassName: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    nullValue: PropTypes.bool,
    required: PropTypes.bool,
    onValidate: PropTypes.func,
    placeholder: PropTypes.string,
    w100: PropTypes.bool,
    maxWidth: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    sortList: PropTypes.bool,
    reverseList: PropTypes.bool,
    floatingLabel: PropTypes.bool,
    style: PropTypes.object,
}

ComboBoxComponent.propTypes = ComboBoxPropTypes

ComboBoxComponent.defaultProps = {
    inputClassName: '',
    value: '',
    onChange: undefined,
    options: {},
    nullValue: false,
    required: false,
    onValidate: undefined,
    placeholder: 'Please select',
    w100: false,
    maxWidth: undefined,
    className: '',
    label: '',
    errorMessage: '',
    sortList: true,
    reverseList: false,
    floatingLabel: true,
    style: {},
}

export default memo(ComboBoxComponent, reactFastCompare)