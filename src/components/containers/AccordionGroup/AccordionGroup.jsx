import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import reactFastCompare from 'react-fast-compare'

import AccordionLayout from '../Accordion/AccordionLayout.jsx'
import useAccordion from '../accordionhooks/useAccordion.js'

import { accordionPropTypes } from '../Accordion/Accordion.jsx'

import './accordion_group.scss'

const AccordionGroupTab = (props) => {
    /*------------------------------------PROPS--------------------------------*/
    const {
        className, title, toggleElement, accordionIdx, isOpen, children, toggleAccordion
    } = props

    /*------------------------------------HOOKS--------------------------------*/
    const { contentRef, getContentSize } = useAccordion()

    /*------------------------------------FUNCTIONS--------------------------------*/
    const handleToggleAccordion = useCallback(() => {
        toggleAccordion(accordionIdx)
    }, [accordionIdx, toggleAccordion])

    /*------------------------------------RENDER--------------------------------*/
    const contentStyles = { height: isOpen ? `${getContentSize()}px` : 0 }

    return <AccordionLayout {...{
        children,
        className: `accordion ${className}`,
        contentRef,
        contentStyles,
        isOpen,
        title,
        toggleAccordion: handleToggleAccordion,
        toggleElement
    }} />
}

/**
 * @type React.FC<AccordionGroupPropTypes>
 */

const AccordionGroupComponent = forwardRef(function AccordionGroup(props, ref) {
    /*------------------------------------PROPS--------------------------------*/
    const { className = '', accordions/*, onToggle*/ } = props

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

    return (
        <div className={`accordion_group ${className}`}>
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

const AccordionGroupPropTypes = {
    className: PropTypes.string,
    accordions: PropTypes.arrayOf(PropTypes.shape({ ...accordionPropTypes, content: accordionPropTypes.toggleElement })),
    // onToggle: PropTypes.func
}

AccordionGroupComponent.propTypes = AccordionGroupPropTypes

AccordionGroupComponent.defaultProps = {
    className: '',
    accordions: [],
    // onToggle: undefined,
}

export default memo(AccordionGroupComponent, reactFastCompare)
