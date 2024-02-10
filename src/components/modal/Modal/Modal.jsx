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
        maxWidth,
        maxHeight,
        closeModal,
    } = props

    return !isOpen ? null :
        (
            <Portal>
                <Flex className='modal' padding='1rem'>
                    <Grid w100 maxWidth={maxWidth} maxHeight={maxHeight} padding='26px 18px' className={`modal_content ${className}`}>
                        <IoClose style className='react_icon close_modal_btn' onClick={closeModal} />
                        {children}
                    </Grid>
                </Flex>
            </Portal>
        )
}

Modal.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    maxWidth: PropTypes.string,
    maxHeight: PropTypes.string,
    closeModal: PropTypes.func.isRequired,
}

Modal.defaultProps = {
    className: '',
    isOpen: false,
    title: '',
    maxWidth: '50vw',
    maxHeight: '50vh',
    closeModal: undefined,
}

export default Modal
