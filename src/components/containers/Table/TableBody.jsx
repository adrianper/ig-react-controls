import React, { cloneElement, useCallback } from 'react'

const TableBody = ({ columns, rows, onClickRow, rowButtons, bodyMaxHeight }) => {

    const handleClickRow = useCallback((data) => {
        onClickRow && onClickRow(data)
    }, [onClickRow])

    const handleClickRowBtn = useCallback((e, callback, data) => {
        e.stopPropagation()
        callback(data)
    }, [])

    const cardRowsTemplate = `repeat(${columns.length}, auto)`

    return (
        <div className='table__body' style={{ maxHeight: bodyMaxHeight }}>
            {rows.map((row, i) =>
                <div key={i} className={`table__row${!!onClickRow ? ' clickable' : ''}`} onClick={() => { handleClickRow(row) }} style={{ '--var-card-rows-template': cardRowsTemplate }}>
                    {columns.map((col, j) => {
                        const value = row[col.name]
                        return (
                            <div key={`${i}-${j}`} className="row__data">
                                <p className='row_data__text'>
                                    {typeof col.formatValue === 'function' ?
                                        col.formatValue(value, row)
                                        :
                                        value
                                    }
                                </p>
                            </div>
                        )
                    }
                    )}
                    {rowButtons.map((buttonElement, key) => (
                        cloneElement(
                            buttonElement,
                            {
                                key,
                                className: `row_btn ${buttonElement.props.className}`,
                                onClick: (e) => { handleClickRowBtn(e, buttonElement.props.onClick, row) }
                            }
                        )
                    ))}

                </div>
            )}
        </div>
    )
}

export default TableBody
