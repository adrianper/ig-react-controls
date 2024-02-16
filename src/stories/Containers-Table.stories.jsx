import { useEffect, useRef, useState } from "react";
import { Grid, MessageDialog, Table } from "../components";

import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Containers/Table',
    component: Table,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};

const carsMock = [
    { "brand": 'Dodge', "name": 'Charger' }, { "brand": "Honda", "name": "Accord" }, { "brand": "Honda", "name": "Civic" }, { "brand": "Subaru", "name": "Legacy" }, { "brand": "Subaru", "name": "WRX" }, { "brand": "Volkswagen", "name": "Arteon" }, { "brand": "Kia", "name": "K5" }, { "brand": "MAZDA", "name": "MAZDA3" }, { "brand": "Nissan", "name": "Maxima" },
    { "brand": "Kia", "name": "Rio" }, { "brand": "Toyota", "name": "Crown" }, { "brand": "Volkswagen", "name": "Jetta GLI" }, { "brand": "Audi", "name": "A3" }, { "brand": "Honda", "name": "Accord Touring" }, { "brand": "Toyota", "name": "Prius" }, { "brand": "Acura", "name": "Integra" }, { "brand": "BMW", "name": "i4" }, { "brand": "Cadillac", "name": "CT4" },
    { "brand": "Lexus", "name": "ES" }, { "brand": "Volkswagen", "name": "Passat" }, { "brand": "Hyundai", "name": "Elantra N" },
]

const TableExample = (props) => {

    const [carsList, setCars] = useState([])
    const [isLoadingCars, setIsLoadingCars] = useState(true)

    const mdRef = useRef()

    const getCars = () => {
        setTimeout(() => {
            setCars(carsMock)
            setIsLoadingCars(false)
        }, [1000])
    }

    const handleClickRow = (car) => {
        mdRef.current.show({
            type: 'INFO',
            title: car.name,
            content: `You have clicked "${car.name}" owned by "${car.brand}"`,
        })
    }

    const deleteCar = (carData) => {
        const carIdx = carsList.map(car => car.name).indexOf(carData.name)
        const result = [...carsList]
        result.splice(carIdx, 1)
        setIsLoadingCars(true)
        setTimeout(() => {
            setCars(result)
            setIsLoadingCars(false)
        }, 600)
    }

    const handleClickDelete = async (carData) => {
        const confirm = await mdRef.current.showConfirm({
            type: 'ERROR',
            title: 'Are you sure you want to delete this car?',
        })

        if (confirm)
            deleteCar(carData)
    }

    const handleClickCopy = async (carData) => {
        // Get the text field
        const copyContent = JSON.stringify(carData)

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyContent);

        // Alert the copied text
        mdRef.current.show({
            type: 'SUCCESS',
            title: 'Row has been copied to clipboard',
            content: copyContent,
        })
    }

    useEffect(() => {
        getCars()
    }, [])

    const rowButtons = [
        <div className='react_icon_container' onClick={handleClickCopy} >
            <MdOutlineContentCopy className='react_icon' />
        </div>,
        <div className='react_icon_container' onClick={handleClickDelete} >
            <FaRegTrashAlt className='react_icon delete_btn' />
        </div>,
    ]

    return (
        <Grid style={{ width: '600px' }}>
            <Table
                columns={props.columns}
                isLoadingRows={isLoadingCars}
                onClickRow={handleClickRow}
                rows={carsList}
                rowButtons={rowButtons}
                bodyMaxHeight={props.bodyMaxHeight}
            />
            <MessageDialog ref={mdRef} closeBtn={false} />
        </Grid>
    )
}

const carColumns = [{ name: 'brand', displayName: 'Brand' }, { name: 'name', displayName: 'Name' }]

export const Example = {
    args: {
        columns: carColumns,
        bodyMaxHeight: '40vh',
    },
    render: TableExample
}
