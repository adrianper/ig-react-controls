import React, { forwardRef, memo, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import reactFastCompare from 'react-fast-compare'
import PropTypes from 'prop-types'

import './text_field.scss'

/**
 * @type React.FC<TextFieldPropTypes>
 */

const TextFieldComponent = forwardRef(function TextField(props, ref) {
    /*------------------------------------PROPS--------------------------------*/
    let {
        className,
        label,
        type,
        value,
        onChange,
        placeholder,
        padding,
        margin,
        w100,
        h100,
        maxWidth,
        style,
        required,
        pattern,
        onValidate,
        errorMessage,
        onFocus,
        onBlur,
        maxLength,
        ...rest
    } = props

    /*------------------------------------STATE---------------------------------*/
    const [status, setStatus] = useState('normal')
    const [focused, setFocused] = useState(false)

    /*------------------------------------REFS--------------------------*/
    const inputRef = useRef()

    /*------------------------------------FUNCTIONS--------------------------*/
    const handleFocus = useCallback((e) => {
        setFocused(true)
        onFocus && onFocus(e)
    }, [onFocus])

    const handleBlur = useCallback(() => {
        onBlur && onBlur()
        setFocused(false)
    }, [onBlur])

    const handleChange = useCallback((e) => {
        onChange(e.target.value)
        setStatus('normal')
    }, [onChange])

    /*------------------------------------IMPERATIVEHANDLE-------------------------------*/
    const validate = useCallback(() => {
        if (required && !value) {
            setStatus('error')
            return false
        }

        if (pattern && value && !value.toString().match(pattern)) {
            setStatus('error')
            return false
        } else {

        }

        if (onValidate && !onValidate(value)) {
            setStatus('error')
            return false
        }

        return true
    }, [onValidate, pattern, required, value])

    useImperativeHandle(ref, () => ({
        errorMessage,
        label,
        focus: () => inputRef.current.focus(),
        validate,
        value,
        setStatus,
    }), [errorMessage, validate, value, setStatus])

    /*------------------------------------EFFECT-------------------------------*/

    /*------------------------------------RENDER-------------------------------*/
    style = {
        padding,
        margin,
        width: w100 && '100%',
        height: h100 && '100%',
        maxWidth,
        ...style,
    }

    const labelContent = `${label}${required ? ' *' : ''}`

    className = className ? `text_field_container ${className}` : 'text_field_container'
    if (!label) className += ' no_label'
    if (value || value === 0 || focused) className += ' label_up'
    if (focused) className += ' focused'
    className += ` text_field--status--${status}`

    return (
        <div className={className} style={style}>
            {label && <label className='text_field__label'>{labelContent}</label>}
            <div className='text_field'>
                <input
                    type={type}
                    min={1}
                    ref={inputRef}
                    className='text_field__input'
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={(focused || !label) ? placeholder : ''}
                    pattern={pattern}
                    required={required}
                    maxLength={maxLength}
                    {...{ value, ...rest }}
                />
                <fieldset className='text_field__fieldset'>
                    <legend className='text_field__legend'>{labelContent}</legend>
                </fieldset>
            </div>
        </div>
    )
})

const TextFieldPropTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    w100: PropTypes.bool,
    h100: PropTypes.bool,
    maxWidth: PropTypes.string,
    style: PropTypes.object,
    required: PropTypes.bool,
    pattern: PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string]),
    errorMessage: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onValidate: PropTypes.func,
    maxLength: PropTypes.number,
}

TextFieldComponent.propTypes = TextFieldPropTypes

TextFieldComponent.defaultProps = {
    className: '',
    label: undefined,
    type: 'text',
    value: '',
    placeholder: undefined,
    padding: undefined,
    margin: undefined,
    w100: undefined,
    h100: undefined,
    maxWidth: undefined,
    style: undefined,
    required: false,
    pattern: undefined,
    errorMessage: '',
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    onValidate: undefined,
    maxLength: undefined,
}

export default memo(TextFieldComponent, reactFastCompare)
