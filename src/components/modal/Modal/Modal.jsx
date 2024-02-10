import React from 'react'
import PropTypes from 'prop-types'
import { IoClose } from 'react-icons/io5'

import { Flex, Grid, Portal, Text } from '../../index'

import './modal.scss'

const Modal = (props) => {
    const {
        children,
        className,
        isOpen,
        title,
        maxWidth,
        maxHeight,
        padding,
        closeModal,
    } = props

    return !isOpen ? null :
        (
            <Portal>
                <Flex className='modal' padding='1rem'>
                    <Grid w100 maxWidth={maxWidth} maxHeight={maxHeight} padding={padding} className={`modal_content ${className}`}>
                        <Grid columns='24px 1fr 24px'>
                            <span />
                            <Text weight='bold'>{title}</Text>
                            <IoClose className='react_icon close_modal_btn' onClick={closeModal} />
                        </Grid>
                        {children}
                    </Grid>
                </Flex>
            </Portal>
        )
}

Modal.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    maxWidth: PropTypes.string,
    maxHeight: PropTypes.string,
    padding: PropTypes.string,
    closeModal: PropTypes.func.isRequired,
}

Modal.defaultProps = {
    className: '',
    isOpen: false,
    title: '',
    maxWidth: '50vw',
    maxHeight: '50vh',
    padding: '1rem',
    closeModal: undefined,
}

export default Modal
