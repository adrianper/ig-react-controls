import React, { createRef, forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import { Grid, Text } from '../../index'
import './character_field.scss'

const generateArray = length => [...Array(length).keys()]

const cursorToEnd = () => { document.activeElement.setSelectionRange(1, 1) }

/**
 * @type React.FC<CharacterFieldPropTypes>
 */

const CharacterFieldComponent = forwardRef(function CharacterField(props, ref) {
    //--------------------PROPS--------------------
    let { initValue, } = props
    const {
        className,
        length,
        label,
        // pattern,
        onChange,
        lblAlign,
        type,
    } = props

    const lengthArray = useMemo(() => generateArray(length), [length])

    //--------------------STATE--------------------
    const [value, setValue] = useState(initValue.padEnd(length, 'x').split('', length))

    //--------------------REF--------------------
    const inputsRef = useRef(lengthArray.map(() => createRef()))
    const characterFieldRef = useRef()

    //--------------------FUNCTIONS--------------------
    const handleFocus = useCallback(() => {
        const focusIdx = value.length === length ? (length - 1) : value.length
        inputsRef.current[focusIdx].current.focus()
    }, [value, length])

    // const validateInput = (val, pattern) => {
    //     if (!val) return
    //     return pattern && val.join("").match(pattern) === null
    // }

    const handleChange = useCallback((v, i) => {
        setValue(val => {
            val[i] = v.toUpperCase()
            if (i === length - 1 && v === '') val.pop()

            // if (validateInput(val/*, pattern*/)) {
            //     inputsRef.current[i].current.value = null
            //     val.pop()
            // }
            onChange(val)
            return val
        })

        inputsRef.current[i].current.value = inputsRef.current[i].current.value.toUpperCase()

        if (i === length - 1) return

        inputsRef.current[i + 1].current.focus()
    }, [length, onChange/*, pattern*/])

    const handleKeyDown = useCallback((e, i) => {
        if (e.key === 'Tab' || e.key === 'Escape') return setTimeout(() => { e.target.blur() }, 50)

        if (e.target.value === '' && (e.key === 'Backspace' || e.key === 'Delete')) {
            setValue(val => {
                val.pop()
                onChange(val)
                return val
            })

            if (i === 0) return e.preventDefault()

            inputsRef.current[i - 1].current.value = ''
            inputsRef.current[i - 1].current.focus()
            return
        }

        if (e.target.value !== '' && i === length - 1 && e.key !== 'Backspace' && e.key !== 'Delete')
            return e.preventDefault()
    }, [length, onChange])

    const handleSetValue = useCallback((text) => {
        const value = text.split('', length)

        // if (validateInput(value/*, pattern*/))
        //     return

        inputsRef.current.forEach((ref, i) => {
            const letter = text[i] || ''
            ref.current.value = letter
        })

        onChange(value)
        setValue(value)

        setTimeout(() => {
            const focusIdx = text.length >= length ? (length - 1) : text.length
            inputsRef.current[focusIdx].current.focus()
        }, 10)
    }, [inputsRef, length, onChange/*, pattern*/])

    const handlePaste = useCallback(async e => {
        e.preventDefault()
        try {
            const text = await window.navigator.clipboard.readText()

            handleSetValue(text)

        } catch (error) {
            console.log(error)
        }
    }, [handleSetValue])

    const handleReset = useCallback(() => {
        inputsRef.current.forEach(ref => {
            ref.current.value = ''
            setValue(val => {
                val.pop()
                return val
            })
        })

        onChange([])
    }, [inputsRef, onChange])

    const setStatus = useCallback((status) => {
        const currClass = characterFieldRef.current.className
        const statusClass = `status--${status}`

        if (characterFieldRef.current.className.includes(statusClass)) return

        if (currClass.includes('status'))
            characterFieldRef.current.className = currClass.slice(0, currClass.indexOf('status')).concat(statusClass)
        else
            characterFieldRef.current.classList.add(statusClass)
    }, [])

    //--------------------IMPERATIVEHANDLE--------------------
    useImperativeHandle(ref, () => ({
        reset: handleReset,
        setValue: handleSetValue,
        setStatus,
        value
    }), [handleReset, handleSetValue, setStatus, value])

    //--------------------EFFECT--------------------
    useEffect(() => {
        if (initValue !== '') {
            if (initValue.length < length) {
                initValue = initValue.padEnd(length, 'x')
            }
            inputsRef.current.forEach((ref, i) => {
                ref.current.value = initValue[i]
            })
            onChange(initValue.split('', length))
        }
    }, [initValue, length, onChange])

    useEffect(() => {
        setStatus('normal')
    }, [setStatus])

    //--------------------RENDER--------------------

    const inputs = useMemo(() => lengthArray.map((i) => {
        return <input
            key={i}
            className='character_input'
            ref={inputsRef.current[i]}
            type={type}
            maxLength={1}
            onClick={cursorToEnd}
            onFocus={handleFocus}
            onPaste={handlePaste}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
        />
    }), [lengthArray, handleChange, handleFocus, handleKeyDown, handlePaste, type])


    return (
        <Grid ref={characterFieldRef} className={`character_field_container ${className}`} gap='1em'>
            {label && <Text align={lblAlign}>{label}</Text>}
            <div className='character_field'>
                {inputs}
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

const CharacterFieldPropTypes = {
    className: PropTypes.string,
    length: charactersLength,
    label: PropTypes.string,
    initValue: PropTypes.string,
    // pattern: PropTypes.string,
    onChange: PropTypes.func,
    lblAlign: PropTypes.oneOf([PropTypes.null, 'left', 'center', 'right']),
    // type: PropTypes.oneOf(['text', 'number']),
}

CharacterFieldComponent.propTypes = CharacterFieldPropTypes

CharacterFieldComponent.defaultProps = {
    className: '',
    length: 1,
    label: undefined,
    initValue: '',
    // pattern: undefined,
    onChange: undefined,
    lblAlign: undefined,
    // type: 'text',
}

export default memo(CharacterFieldComponent, reactFastCompare)