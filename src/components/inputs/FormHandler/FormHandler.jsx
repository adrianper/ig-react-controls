import React, { createRef, forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import PropTypes from 'prop-types'

import { Text } from '../../index'
import { useRenderInput } from '../../../hooks'

/**
 * @type React.ForwardRefRenderFunction<React.ReactElement, FormHandlerPropTypes>
 */
const FormHandlerComponent = forwardRef(function FormHandler(props, ref) {
    /*--------------------------------------PROPS-----------------------------------*/
    const {
        fields,
        formData,
        setFormData,
    } = props

    /*--------------------------------------STATE-----------------------------------*/

    /*--------------------------------------REFS-----------------------------------*/
    const fieldsRef = useRef(Object.keys(fields).filter(key => !key.includes('label')).map(() => createRef()))

    /*--------------------------------------HOOKS-----------------------------------*/
    const renderInput = useRenderInput()

    /*--------------------------------------FUNCTIONS-----------------------------------*/
    const handleChangeData = useCallback((name, value) => {
        setFormData(formData => ({ ...formData, [name]: value }))
    }, [setFormData])

    const setInputProps = (inputName) => {
        const {
            onChange,
        } = fields[inputName]

        const handleChangeField = value => {
            handleChangeData(inputName, value)
            onChange && onChange(value)
        }

        return ({
            onChange: handleChangeField,
            value: formData[inputName] || fields[inputName].inputProps?.defaultValue
        })
    }

    /*--------------------------------------IMPERATIVEHANDLE-----------------------------------*/
    const validateForm = useCallback(() => {
        const errors = []
        let valid = true

        fieldsRef.current.forEach(fieldRef => {
            if (fieldRef.current?.validate && !fieldRef.current.validate()) {
                valid = false
                errors.push(fieldRef.current.errorMessage || `Error on field "${fieldRef.current.label}"`)
            }
        })

        return { valid, errors }
    }, [fieldsRef.current])

    useImperativeHandle(ref, () => ({
        validate: validateForm,
        fieldsRef: fieldsRef.current
    }), [validateForm])

    /*--------------------------------------RENDER-----------------------------------*/
    let fieldCount = 0
    return Object.keys(fields).map((inputName) => fields[inputName].type === 'text' ?
        <Text key={inputName} {...fields[inputName].inputProps} />
        :
        renderInput(fields[inputName].type, { key: inputName, ref: fieldsRef.current[fieldCount++], ...fields[inputName].inputProps, ...setInputProps(inputName) })
    )
})

const FormHandlerPropTypes = {
    fields: PropTypes.objectOf(PropTypes.shape({
        'type': PropTypes.string.isRequired,
        'inputProps': PropTypes.object,
        'onChange': PropTypes.func
    })),
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
}

FormHandlerComponent.propTypes = FormHandlerPropTypes

FormHandlerComponent.defaultProps = {
    fields: {},
    formData: {},
    setFormData: undefined,
}

export default FormHandlerComponent