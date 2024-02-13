import React from 'react'
import PropTypes from 'prop-types'
import { IoClose } from 'react-icons/io5'

import { Flex, Grid, Portal } from '../../index'

import './modal.scss'

const Modal = (props) => {
    const {
        children,
        className,
        isOpen,
        closeBtn,
        onClose,
        maxWidth,
        maxHeight,
    } = props

    return !isOpen ? null :
        (
            <Portal>
                <Flex className='modal' padding='1rem'>
                    <Grid w100 maxWidth={maxWidth} maxHeight={maxHeight} padding='26px 18px' className={`modal_content ${className}`}>
                        {closeBtn && (
                            <IoClose className='react_icon close_modal_btn' onClick={onClose} />
                        )}
                        {children}
                    </Grid>
                </Flex>
            </Portal>
        )
}

Modal.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    closeBtn: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    maxWidth: PropTypes.string,
    maxHeight: PropTypes.string,
}

Modal.defaultProps = {
    className: '',
    isOpen: false,
    title: '',
    closeBtn: true,
    onClose: undefined,
    maxWidth: '40em',
    maxHeight: '50vh',
}

export default Modal
