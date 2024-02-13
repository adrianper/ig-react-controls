import React, { forwardRef, isValidElement, memo, useCallback, useImperativeHandle, useReducer, useRef } from 'react'
import reactFastCompare from 'react-fast-compare'
import PropTypes from 'prop-types'

import { AnimationPlayer, Button, Flex, Grid, Portal, Text } from '../../index'

import { BiErrorCircle } from 'react-icons/bi'
import { TbAlertTriangle, TbInfoSquare } from 'react-icons/tb'
import { BsPatchCheck } from 'react-icons/bs'

import './message_dialog.scss'
import { IoClose } from 'react-icons/io5'

const mdTypes = {
    'ALERT': 'ALERT',
    'ERROR': 'ERROR',
    'INFO': 'INFO',
    'SUCCESS': 'SUCCESS',
}

const mdTypeIcons = {
    'ALERT': <TbAlertTriangle size='5rem' color='var(--color--yellow--1)' />,
    'ERROR': <BiErrorCircle size='5rem' color='var(--color--red--1)' />,
    'INFO': <TbInfoSquare size='5rem' color='var(--color--blue--7)' />,
    'SUCCESS': <BsPatchCheck size='5rem' color='var(--color--green--1)' />,
}

const mdContentTypes = {
    'SINGLE': 'SINGLE',
    'MULTIPLE': 'MULTIPLE',
}

const initReducer = {
    isOpen: false,
    mdType: mdTypes.INFO,
    mdTitle: '',
    mdContent: '',
    mdTypeConfirm: false,
    mdConfirmCallback: undefined,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'init':
            return initReducer
        case 'show':
            return { ...state, ...action.payload, isOpen: true }
        case 'hide':
            return { ...initReducer, isOpen: false }
        default:
            return initReducer
    }
}

/**
 * @type React.ForwardRefExoticComponent<React.RefAttributes<any>|MessageDialogComponentPropTypes>
 */

const MessageDialogComponent = forwardRef(function MessageDialog(props, ref) {

    const {
        className,
        confirmText,
        cancelText,
        closeBtn,
    } = props

    const [state, dispatch] = useReducer(reducer, initReducer)

    /*---------------------------------------STATE-------------------------------------------*/
    const {
        mdType, mdContent, mdTitle, isOpen, mdTypeConfirm,
    } = state

    /*---------------------------------REF------------------------------------*/
    const resolveRef = useRef(null)

    /*---------------------------------FUNCTIONS------------------------------------*/
    const show = useCallback((
        {
            type: mdType = mdTypes.INFO,
            title: mdTitle = 'Hubo un problema',
            content: mdContent = '',
        } = {}
    ) => {
        if (!Object.keys(mdTypes).includes(mdType))
            console.error(`Warning: Argument value: Invalid argument \`type\` of value \`${mdType}\` supplied, expected one of \`${Object.keys(mdTypes)}\`.`)

        dispatch({
            type: 'show',
            payload: {
                mdContent,
                mdTitle,
                mdType: mdType,
            }
        })
    }, [dispatch])

    const showConfirm = useCallback((
        {
            type: mdType = mdTypes.INFO,
            title: mdTitle = 'Hubo un problema',
            content: mdContent = '',
        } = {}
    ) => new Promise((resolve, reject) => {
        dispatch({
            type: 'show',
            payload: {
                mdContent,
                mdTitle,
                mdType: mdType,
                mdTypeConfirm: true,
            }
        })
        resolveRef.current = { resolve }
    }), [dispatch])

    const hide = useCallback(() => {
        dispatch({ type: 'hide' })
        resolveRef.current = null
    }, [dispatch])

    const error = useCallback((
        errors = []
    ) => {
        show({
            type: mdTypes.ERROR,
            title: 'Oops! Something went wrong!',
            content: errors,
        })
    }, [hide, show])

    const handleClose = useCallback((event) => {
        if (mdTypeConfirm)
            resolveRef.current?.resolve(event.target.value === 'true');

        hide()
    }, [hide, mdTypeConfirm])

    useImperativeHandle(ref, () => ({
        show,
        showConfirm,
        hide,
        error,
    }), [error, hide, show, showConfirm])

    /*--------------------------------------RENDER-------------------------------------------*/

    if (!isOpen) return null

    let contentRender = null
    const mdContentType = mdContent.constructor === Array ? mdContentTypes.MULTIPLE : mdContentTypes.SINGLE

    switch (mdContentType) {
        case mdContentTypes.SINGLE:
            contentRender = mdContent && (
                mdContent.constructor === String ?
                    <Text align="center">{mdContent}</Text>
                    :
                    mdContent
            )
            break
        case mdContentTypes.MULTIPLE:
            contentRender = mdContent.length > 0 && (
                <ul>
                    {mdContent.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
            )
            break
    }

    return (
        <Portal>
            <Flex w100 h100 skipClickOutside align='center' justify='center' className='message_dialog_modal'>
                <Grid w100 padding='2em' gap='1em' className={`message_dialog ${className}`}>
                    {closeBtn && (
                        <IoClose value='false' className='react_icon close_modal_btn' onClick={handleClose} />
                    )}
                    <Grid contentX='center'>
                        <AnimationPlayer animation='pulse'>
                            {mdTypeIcons[mdType]}
                        </AnimationPlayer>
                    </Grid>
                    {mdTitle !== '' && (
                        isValidElement(mdTitle) ?
                            mdTitle
                            :
                            <Text weight='bold' align='center' className='message_dialog__title'>{mdTitle}</Text>
                    )}
                    {contentRender && (
                        <Grid className='message_dialog__content' gap='12px'>
                            {contentRender}
                        </Grid>
                    )}
                    <Flex wrap className='message_dialog__buttons' justify='center'>
                        {mdTypeConfirm && (
                            <Button value='false' variant='outlined' onClick={handleClose}>{cancelText}</Button>
                        )}
                        <Button value='true' onClick={handleClose}>{confirmText}</Button>
                    </Flex>
                </Grid>
            </Flex>
        </Portal>
    )
})


const MessageDialogComponentPropTypes = {
    className: PropTypes.string,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    closeBtn: PropTypes.bool,
}
MessageDialogComponent.propTypes = MessageDialogComponentPropTypes

MessageDialogComponent.defaultProps = {
    className: '',
    confirmText: 'Accept',
    cancelText: 'Cancel',
    closeBtn: true,
}

export default memo(MessageDialogComponent, reactFastCompare)