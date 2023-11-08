import React, { memo } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import useAccordion from '../accordionhooks/useAccordion'
import AccordionLayout from './AccordionLayout'
import './accordion.scss'
import './accordion_colors.scss'

const Accordion = (props) => {
    /*------------------------------------PROPS--------------------------------*/
    let { className } = props
    const { title, toggleElement } = props

    /*------------------------------------HOOKS--------------------------------*/
    const { isOpen, contentRef, getContentSize, toggleAccordion } = useAccordion()

    /*------------------------------------RENDER--------------------------------*/
    const contentStyles = { height: isOpen ? `${getContentSize()}px` : 0 }
    className = className ? `${className} accordion` : 'accordion'

    return (
        <AccordionLayout {...{
            className,
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
    className: undefined,
    title: undefined,
    toggleElement: undefined,
}

export default memo(Accordion, reactFastCompare)
