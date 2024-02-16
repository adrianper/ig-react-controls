import React from 'react'
import { Text } from '../../index'

import { MdSort } from "react-icons/md"


const TableHeader = ({ columns, sortColumn, ascSort, toggleAscSort }) => {

    return (
        <div className='table__header'>
            {columns.map((col, i) =>
                <div key={i} className='header__data' onClick={() => toggleAscSort(col.name)}>
                    <Text className='header_data__text'>{col.displayName}</Text>
                    {sortColumn === col.name && (
                        <div className="react_icon_container">
                            <MdSort size='1.4em' color='var(--component--color)' style={{ scale: ascSort ? '1 -1' : '' }} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default TableHeader
