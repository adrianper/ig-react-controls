import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import { Spinner } from '../../index'

import { CiViewList } from "react-icons/ci"
import { TfiViewList } from "react-icons/tfi";
import { PiListFill } from "react-icons/pi";
import { MdOutlineGridView } from "react-icons/md"

import './filter_table.scss'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const Table = (props) => {
    /*---------------------------------------PROPS-----------------------------------------*/
    const {
        className,
        columns,
        rows,
        isLoadingRows,
        onClickRow,
        rowButtons,
        bodyMaxHeight,
    } = props

    /*---------------------------------------STATE-----------------------------------------*/
    const [cardsLayout, setCardsLayout] = useState(false)
    const [sortColumn, setSortColumn] = useState(null)
    const [ascSort, setAscSort] = useState(true)

    /*---------------------------------------FUNCTIONS-----------------------------------------*/
    const toggleAscSort = useCallback((column) => {
        setSortColumn(column)
        if (sortColumn && sortColumn === column) {
            setAscSort(currentVal => !currentVal)
        }
    }, [sortColumn])

    /*---------------------------------------RENDER-----------------------------------------*/
    const containerStyle = useMemo(() => ({
        '--filter-table-rows-template': `repeat(${columns.length}, 1fr)${rowButtons.length ? ` repeat(${rowButtons.length}, 1.2em)` : ''}`
    }), [columns.length, rowButtons.length])

    let sortedRows
    if (sortColumn) {
        const columnSortMethod = columns.find(({ name, sortMethod }) => sortMethod && name === sortColumn)?.sortMethod

        sortedRows = columnSortMethod ?
            rows.sort((a, b) => columnSortMethod(a, b, sortColumn, ascSort))
            :
            rows.sort((a, b) => {
                if (a[sortColumn] < b[sortColumn]) return ascSort ? -1 : 1
                if (a[sortColumn] > b[sortColumn]) return ascSort ? 1 : -1
                return 0
            })
    }

    return (
        <div className={`filter_table_container ${className}`} style={containerStyle}>
            <div className='filter_container'>
                <div className='layout_selector'>
                    <div className="react_icon_container">
                        <MdOutlineGridView
                            size={'1.2em'}
                            onClick={() => { setCardsLayout(true) }}
                            className={`react_icon ${cardsLayout ? 'active' : ''}`}
                        />
                    </div>
                    <div className="react_icon_container">
                        <PiListFill
                            size={'1.2em'}
                            onClick={() => { setCardsLayout(false) }}
                            className={`react_icon ${!cardsLayout ? 'active' : ''}`}
                        />
                    </div>
                </div>
            </div>

            <div className={`filter_table ${cardsLayout ? 'cards_layout' : ''}`}>
                <TableHeader
                    columns={columns}
                    sortColumn={sortColumn}
                    ascSort={ascSort}
                    toggleAscSort={toggleAscSort} />
                <TableBody
                    columns={columns}
                    rows={sortColumn ? sortedRows : rows}
                    onClickRow={onClickRow}
                    rowButtons={rowButtons}
                    bodyMaxHeight={bodyMaxHeight} />

                <Spinner isLoading={isLoadingRows} />
            </div>
        </div >
    )
}

Table.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        displayName: PropTypes.string,
        formatValue: PropTypes.func,
        sortMethod: PropTypes.func,
    })),
    rows: PropTypes.arrayOf(PropTypes.object),
    isLoadingRows: PropTypes.bool,
    onClickRow: PropTypes.func,
    rowButtons: PropTypes.arrayOf(PropTypes.node),
    bodyMaxHeight: PropTypes.string,
}

Table.defaultProps = {
    className: '',
    columns: [],
    rows: [],
    isLoadingRows: false,
    onClickRow: undefined,
    rowButtons: [],
    bodyMaxHeight: '60vh',
}


export default Table
