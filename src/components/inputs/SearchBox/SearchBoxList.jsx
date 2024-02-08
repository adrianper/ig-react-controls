import React, { } from 'react'
// import reactFastCompare from 'react-fast-compare'

//import { ... } from 'react-redux'

//import hooks
//import customHooks
//impoty context/providers

//import components
import { Spinner, Text } from '../../index'

//redux-actions

//scripts/js
//general_functions.js

//wrappers

//components-- e.g. stateless/layout components

//global variables
//static values

const SearchBoxList = (props, ref) => {
    /*------------------------------------PROPS------------------------------*/
    const {
        isOpen, isLoadingOptions, options, optionsDescriptions, value, handleSelect,
        containerRef, optionsEmptyText, descWidth, listWidth
    } = props

    /*------------------------------------CONTEXT/STORE----------------------*/
    /*------------------------------------STATE------------------------------*/

    /*------------------------------------HOOKS------------------------------*/
    /*------------------------------------REFS-------------------------------*/
    /*------------------------------------FUNCTIONS--------------------------*/

    /*------------------------------------IMPERATIVEHANDLE-------------------*/
    /*------------------------------------EFFECTS----------------------------*/
    /*------------------------------------RENDER-----------------------------*/
    const showOptionDescription = () => Object.keys(optionsDescriptions) > 0

    const listStyle = {}
    let positionClass = ''

    if (containerRef.current) {
        const windowWidth = window.innerWidth, windowHeight = window.innerHeight
        const textfieldLocation = containerRef.current.getBoundingClientRect()

        listStyle['width'] = listWidth ? listWidth : textfieldLocation.width

        positionClass += isOpen ? 'search_box__list--open ' : ''
        // positionClass = textfieldLocation.top > windowHeight - textfieldLocation.bottom ? 'top ' : 'bottom '
        // positionClass += textfieldLocation.left > windowWidth - textfieldLocation.right ? 'right' : 'left'

        if (textfieldLocation.top > windowHeight - textfieldLocation.bottom) listStyle['bottom'] = windowHeight - textfieldLocation.top
        else listStyle['top'] = textfieldLocation.bottom

        if (textfieldLocation.left > windowWidth - textfieldLocation.right) listStyle['right'] = windowWidth - textfieldLocation.right
        else listStyle['left'] = textfieldLocation.left
    }

    return (
        <div className={`search_box__list ${positionClass}`} style={listStyle}>
            {Object.keys(options).length === 0 && !isLoadingOptions ?
                <div className="search_box__option">{optionsEmptyText}</div>
                :
                Object.keys(options).map(key =>
                    <div key={key} className={`search_box__option${key === value ? ' search_box__option--selected' : ''}`}
                        style={{ gridTemplateColumns: showOptionDescription ? `1fr ${descWidth}` : '' }}
                        onClick={() => handleSelect(key, options[key])}>
                        {options[key]}
                        {showOptionDescription && optionsDescriptions[key] &&
                            <Text ellipsis ellipsisLines={2} style={{ fontStyle: 'italic' }}>{optionsDescriptions[key]}</Text>}
                    </div>
                )}
            <Spinner isLoading={isLoadingOptions} />
        </div>
    )
}

export default SearchBoxList