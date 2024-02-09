import React, { createRef, forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import reactFastCompare from 'react-fast-compare'
import $ from 'jquery'

import PropTypes from 'prop-types'

import '../CharacterField/character_field.scss'
import { Grid, Text } from '../../index'

const generateArray = length => [...Array(length).keys()]
const cursorToEnd = () => {
    const element = document.activeElement
    const { type } = element
    if (type === 'number')
        element.type = 'text'
    element.setSelectionRange(1, 1)
    if (type === 'number')
        element.type = 'number'
}
/**
 * @type React.FC<CharacterFieldV2PropTypes>
 */

const CharacterFieldV2Component = forwardRef(function CharacterField(props, ref) {
    /*--------------------PROPS--------------------*/
    const {
        className, size, type, lblAlign, value, onChange, required,
        label, errorMessage, onValidate, style,
    } = props

    /*--------------------STATE--------------------*/
    const lengthArray = useMemo(() => generateArray(size), [size])
    const [status, setStatus] = useState('normal')

    /*--------------------REFS--------------------*/
    const firstRender = useRef(true)
    const inputsRef = useRef(lengthArray.map(() => createRef()))

    /*--------------------FUNCTIONS--------------------*/
    const validate = useCallback(() => {
        let valid = true

        if (required && (value.length < size || value === '')) {
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
    }, [onValidate, required, size, value])

    const handleChange = useCallback((e, idx) => {
        const inputValue = e.target.value

        const valArr = value.split('')
        valArr.splice(idx, idx + 1, inputValue)

        onChange(valArr.join(''))
    }, [onChange, value])

    const handlePaste = useCallback(async e => {
        e.preventDefault()
        try {
            const text = await window.navigator.clipboard.readText()
            onChange(text.slice(0, size))
        } catch (error) {
            console.log(error)
        }
    }, [size, onChange])

    const focusLastInput = useCallback(() => {
        const focusIdx = value.length === size ? (size - 1) : value.length
        inputsRef.current[focusIdx].current.focus()
        cursorToEnd()
    }, [size, value])

    const handleClick = useCallback(() => {
        focusLastInput()
    }, [focusLastInput])

    const handleKeyDown = useCallback((e, i) => {
        if (e.key === 'Tab' || e.key === 'Escape') {
            return setTimeout(() => { e.target.blur() }, 20)
            // return setTimeout(() => { e.target.focus() }, 20)
        }

        if (e.target.value === '' && (e.key === 'Backspace' || e.key === 'Delete')) {
            // onChange(value => {
            const valArr = value.split('')
            valArr.pop()
            onChange(valArr.join(''))
            // })

            // if (i === 0) e.preventDefault()
            // else inputsRef.current[i - 1].current.focus()
            return
        }

        if (e.target.value !== '' && i === size - 1 && e.key !== 'Backspace' && e.key !== 'Delete')
            return e.preventDefault()
    }, [size, onChange, value])

    /*--------------------IMPERATIVEHANDLE--------------------*/
    useImperativeHandle(ref, () => ({
        errorMessage,
        label,
        validate,
        setStatus,
    }), [errorMessage, validate, label])

    /*--------------------EFFECT--------------------*/
    useEffect(() => {
        if (firstRender.current) {
            $('input[type="number"]').on('mousewheel', e => { e.preventDefault() })
            $('input[type="number"]').on('keydown', e => {
                if (e.which === 38 || e.which === 40)
                    e.preventDefault()
            })
            firstRender.current = false
        }
        else if (!firstRender.current)
            focusLastInput()
    }, [focusLastInput])

    /*--------------------RENDER--------------------*/

    return (
        <Grid className={`character_field_container ${className} status--${status}`} gap='2px' style={style}>
            {label && <Text size={2} align={lblAlign}>{label}{required && '*'}</Text>}
            <div className={`character_field ${type}`}>
                {lengthArray.map((idx) => <input
                    key={idx}
                    className='character_input'
                    ref={inputsRef.current[idx]}
                    type={type}
                    maxLength={1}
                    value={value[idx] || ''}
                    onChange={e => handleChange(e, idx)}
                    onClick={handleClick}
                    // onFocus={handleClick}
                    onKeyDown={e => handleKeyDown(e, idx)}
                    onPaste={handlePaste}
                />)}
            </div>
        </Grid>
    )
})

const charactersLength = (props, propName, componentName) => {
    const maxLength = 12
    componentName = componentName || 'ANONYMOUS'

    if (props[propName]) {
        let value = props[propName]
        if (typeof value === 'number') {
            return (value >= 1 && value <= maxLength) ? null : new Error(`Invalid prop \`${propName}\` supplied to \`CharacterField\` is not within 1 to ${maxLength}`)
        }
    }

    return null
}

const CharacterFieldV2PropTypes = {
    className: PropTypes.string,
    size: charactersLength,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    lblAlign: PropTypes.oneOf([PropTypes.null, 'left', 'center', 'right']),
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onValidate: PropTypes.func,
}

CharacterFieldV2Component.propTypes = CharacterFieldV2PropTypes

CharacterFieldV2Component.defaultProps = {
    className: '',
    size: 1,
    type: 'text',
    lblAlign: 'left',
    value: '',
    onChange: undefined,
    required: false,
    errorMessage: '',
    label: '',
    onValidate: undefined,
}

export default memo(CharacterFieldV2Component, reactFastCompare)
