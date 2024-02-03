import React, { memo, useCallback, useEffect, useRef, useState, } from 'react'
import reactFastCompare from 'react-fast-compare'
import PropTypes from 'prop-types'
// import libraries
import _$ from 'jquery'

//import hooks
import { useClickOutside, useScrollOutside } from '../../../hooks'
//import customHooks
//import context/providers

import { TextField } from '../../'

//redux-actions

//scripts/js
//general_functions.js

//wrappers

//components-- e.g. stateless/layout components
import SearchBoxList from './SearchBoxList'

//global variables
//static values
import './search_box.scss'

const setListScroll = container => {
    const selectedElement = container.getElementsByClassName('search_box__option--selected')[0]
    if (selectedElement)
        setTimeout(() => {
            _$(container).find('.search_box__list').scrollTop(selectedElement.offsetTop)
        }, 50)
}

const SearchBoxComponent = function SearchBox(props) {
    /*------------------------------------PROPS------------------------------*/
    let { className } = props
    const {
        value,
        onChange,
        onChangeSearchText,
        label,
        placeholder,
        optionsEmptyText,
        listWidth,
        descriptionWidth,
        options,
        optionsDescriptions,
        isLoadingOptions,
    } = props

    /*------------------------------------CONTEXT/STORE----------------------*/
    /*------------------------------------STATE------------------------------*/
    const [searchText, setSearchText] = useState(Object.hasOwn(options, value) || '')
    const [openList, setOpenList] = useState(false)

    /*------------------------------------REFS-------------------------------*/
    const containerRef = useRef()

    /*------------------------------------HOOKS------------------------------*/
    useClickOutside(containerRef, () => setOpenList(false))
    useScrollOutside(containerRef, () => setOpenList(false))

    /*------------------------------------FUNCTIONS--------------------------*/
    const handleChangeInput = useCallback(value => {
        setSearchText(value)
        onChangeSearchText(value)
        setOpenList(value !== '')
    }, [])

    const handleSelect = useCallback((value, text) => {
        setSearchText(text)
        setOpenList(false)
        onChange && onChange(value)
    }, [onChange])

    const handleFocusInput = useCallback(() => {
        setSearchText('')
        if (Object.keys(options).length > 0) setOpenList(true)
    }, [options])

    /*------------------------------------IMPERATIVEHANDLE-------------------*/
    /*------------------------------------EFFECTS----------------------------*/
    useEffect(() => {
        if (openList)
            setListScroll(containerRef.current)
    }, [openList])


    /*------------------------------------RENDER-----------------------------*/
    className = className ? `${className} search_box` : 'search_box'

    console.log('isLoadingOptions ', isLoadingOptions)

    return (
        <div ref={containerRef} className={className}>
            <TextField className="search_box__input" label={label} placeholder={placeholder}
                value={searchText} onChange={handleChangeInput} onFocus={handleFocusInput} />
            <SearchBoxList {...{
                isOpen: openList, isLoadingOptions, options, optionsDescriptions, value,
                handleSelect, containerRef, optionsEmptyText, listWidth, descWidth: descriptionWidth
            }} />
        </div>
    )
}

SearchBoxComponent.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    optionsEmptyText: PropTypes.string,
    listWidth: PropTypes.string,
    descriptionWidth: PropTypes.string,
    options: PropTypes.object.isRequired,
    optionsDescriptions: PropTypes.object,
    isLoadingOptions: PropTypes.bool.isRequired,
}

SearchBoxComponent.defaultProps = {
    value: '',
    onChange: undefined,
    label: '',
    placeholder: 'Buscar...',
    optionsEmptyText: 'No se encontraron resultados',
    listWidth: '',
    descriptionWidth: '5em',
    options: {},
    optionsDescriptions: {},
    isLoadingOptions: false,
}

export default memo(SearchBoxComponent, reactFastCompare)