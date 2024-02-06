import React, { memo, } from 'react'
import reactFastCompare from 'react-fast-compare'

const ComboBoxList = (props) => {

    const {
        listRef, options, value, handleChange,
        comboboxRef, isOpen, sortList, reverseList
    } = props

    /*---------------------------------POSITIONING---------------------------------*/
    const listStyle = {}
    // let positionClass = ''

    if (comboboxRef.current) {
        const windowWidth = window.innerWidth, windowHeight = window.innerHeight
        const comboLocation = comboboxRef.current.getBoundingClientRect()

        listStyle['width'] = comboLocation.width

        // positionClass = comboLocation.top > windowHeight - comboLocation.bottom ? 'top ' : 'bottom '
        // positionClass += comboLocation.left > windowWidth - comboLocation.right ? 'right' : 'left'

        if (comboLocation.top > windowHeight - comboLocation.bottom) listStyle['bottom'] = windowHeight - comboLocation.top
        else listStyle['top'] = comboLocation.bottom

        if (comboLocation.left > windowWidth - comboLocation.right) listStyle['right'] = windowWidth - comboLocation.right
        else listStyle['left'] = comboLocation.left
    }

    /*-----------------------------------OPTIONS-----------------------------------*/
    const createOption = (i, key) => {
        const className = `combobox__list__option ${key === value ? 'combobox__list__option--selected' : ''}`
        return <li {...{ className, key, onClick: () => handleChange(key) }}>
            {options[key]}
        </li>
    }

    let optionsList = []

    Object.keys(options).forEach((k, i) => {
        if (k !== "" && k !== '9999') optionsList.push(createOption(i + 1, k))
    })

    if (sortList) {
        optionsList = optionsList.sort((a, b) => {
            if (options[a.key].toString().toLowerCase() < options[b.key].toString().toLowerCase()) return -1
            if (options[a.key].toString().toLowerCase() > options[b.key].toString().toLowerCase()) return 1
            return 0
        })
    }
    if (reverseList) {
        optionsList = optionsList.reverse()
    }

    if (options['']) optionsList.unshift(createOption(0, ""))
    if (options['9999']) optionsList.push(createOption('9999', '9999'))

    const listClassName = `combobox__list ${isOpen ? 'combobox__list--open' /*+ positionClass*/ : ''}`

    return <ul ref={listRef} className={listClassName} {...{ style: listStyle }}>
        {optionsList}
    </ul>
}

export default memo(ComboBoxList, reactFastCompare)