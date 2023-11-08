import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import AccordionLayout from '../Accordion/AccordionLayout.jsx'
import useAccordion from '../accordionhooks/useAccordion.js'

import { accordionPropTypes } from '../Accordion/Accordion.jsx'

import './accordion_group.scss'

const AccordionGroupTab = (props) => {
    /*------------------------------------PROPS--------------------------------*/
    let { className } = props
    const { title, toggleElement, accordionIdx, isOpen, children, toggleAccordion } = props

    /*------------------------------------HOOKS--------------------------------*/
    const { contentRef, getContentSize } = useAccordion()

    /*------------------------------------FUNCTIONS--------------------------------*/
    const handleToggleAccordion = useCallback(() => {
        toggleAccordion(accordionIdx)
    }, [accordionIdx, toggleAccordion])

    /*------------------------------------RENDER--------------------------------*/
    const contentStyles = { height: isOpen ? `${getContentSize()}px` : 0 }
    className = className ? `${className} accordion` : 'accordion'

    return <AccordionLayout {...{
        children,
        className,
        contentRef,
        contentStyles,
        isOpen,
        title,
        toggleAccordion: handleToggleAccordion,
        toggleElement
    }} />
}

const AccordionGroupComponent = forwardRef(function AccordionGroup(props, ref) {
    /*------------------------------------PROPS--------------------------------*/
    let { className } = props
    const { accordions/*, onToggle*/ } = props

    /*------------------------------------STATE--------------------------------*/
    const [openAccordion, setOpenAccordion] = useState(0)

    /*------------------------------------FUNCTIONS--------------------------------*/
    const toggleAccordion = useCallback((accordionId) => {
        setOpenAccordion(currentAccordion => currentAccordion !== accordionId ? accordionId : 0)
    }, [])

    /*------------------------------------EFFECTS--------------------------------*/
    useImperativeHandle(ref, () => ({
        setOpenAccordion
    }), [])

    /*------------------------------------EFFECTS--------------------------------*/
    // useEffect(() => {
    //     if (onToggle && onToggle.constructor === Function)
    //         onToggle(openAccordion !== 0)
    // }, [openAccordion, onToggle])

    /*------------------------------------RENDER--------------------------------*/
    className = className ? `${className} accordion_group` : 'accordion_group'

    return (
        <div className={className}>
            {accordions.map((accordion, i) => (
                <AccordionGroupTab
                    key={i + 1}
                    accordionIdx={i + 1}
                    isOpen={openAccordion === (i + 1)}
                    toggleAccordion={toggleAccordion}
                    children={accordion.content}
                    className={accordion.className}
                    title={accordion.title}
                    toggleElement={accordion.toggleElement}
                />
            ))}
        </div>
    )
})

AccordionGroupComponent.propTypes = {
    className: PropTypes.string,
    accordions: PropTypes.arrayOf(PropTypes.shape({ ...accordionPropTypes, content: accordionPropTypes.toggleElement })),
    // onToggle: PropTypes.func
}

AccordionGroupComponent.defaultProps = {
    className: undefined,
    accordions: [],
    // onToggle: undefined,
}

export default memo(AccordionGroupComponent, reactFastCompare)
