import React, { memo } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import useAccordion from '../accordionhooks/useAccordion'
import AccordionLayout from './AccordionLayout'
import './accordion.scss'
import './accordion_colors.scss'

const Accordion = (props) => {
    /*------------------------------------PROPS--------------------------------*/
    const {
        className, title, toggleElement
    } = props

    /*------------------------------------HOOKS--------------------------------*/
    const { isOpen, contentRef, getContentSize, toggleAccordion } = useAccordion()

    /*------------------------------------RENDER--------------------------------*/
    const contentStyles = { height: isOpen ? `${getContentSize()}px` : 0 }

    return (
        <AccordionLayout {...{
            className: `accordion ${className}`,
            contentRef,
            contentStyles,
            isOpen,
            title,
            toggleAccordion,
            toggleElement
        }} >
            {props.children}
        </AccordionLayout>
    )
}

export const accordionPropTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    toggleElement: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
}

Accordion.propTypes = accordionPropTypes

Accordion.defaultProps = {
    className: '',
    title: undefined,
    toggleElement: undefined,
}

export default memo(Accordion, reactFastCompare)
