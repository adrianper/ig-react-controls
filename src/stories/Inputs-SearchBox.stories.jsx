import { useState } from 'react';
import { Grid, SearchBox, Text } from '../components';
import { customArgTypes } from './customArgTypes';

// const variants = { 'filled': 'filled', 'filled--danger': 'filled--danger', 'outlined': 'outlined', 'outlined--danger': 'outlined--danger' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/SearchBox',
    component: SearchBox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        onChange: customArgTypes.onChange,
        value: { control: 'none', },
        // className: customArgTypes.className,
        // onBlur: { control: 'none' },
        // onFocus: { control: 'none' },
        // onValidate: { control: 'none' },
        // rest: {
        //     control: 'none',
        //     description: 'Object of `input` accepted properties',
        //     table: { type: { summary: 'object' }, defaultValue: { summary: 'undefined' } }
        // }
    },
}

function debounce(callback, wait) {
    let timerId
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

const carsObject = {
    1: { "brand": 'Dodge', "name": 'Charger' }, 2: { "brand": "Honda", "name": "Accord" }, 3: { "brand": "Honda", "name": "Civic" }, 4: { "brand": "Subaru", "name": "Legacy" }, 5: { "brand": "Subaru", "name": "WRX" }, 6: { "brand": "Volkswagen", "name": "Arteon" }, 8: { "brand": "Kia", "name": "K5" }, 9: { "brand": "MAZDA", "name": "MAZDA3" }, 10: { "brand": "Nissan", "name": "Maxima" },
    11: { "brand": "Kia", "name": "Rio" }, 12: { "brand": "Toyota", "name": "Crown" }, 13: { "brand": "Volkswagen", "name": "Jetta GLI" }, 14: { "brand": "Audi", "name": "A3" }, 15: { "brand": "Honda", "name": "Accord Touring" }, 16: { "brand": "Toyota", "name": "Prius" }, 18: { "brand": "Acura", "name": "Integra" }, 19: { "brand": "BMW", "name": "i4" }, 20: { "brand": "Cadillac", "name": "CT4" },
    21: { "brand": "Lexus", "name": "ES" }, 22: { "brand": "Volkswagen", "name": "Passat" }, 23: { "brand": "Hyundai", "name": "Elantra N" },
}

export const Example = {
    args: {
        // className: 'custom_textfield',
        // type: 'email',
        // label: 'Email',
    },
    render: (args) => {
        const [value, setValue] = useState('')
        const [cars, setCars] = useState({})
        const [isLoadingCars, setIsLoadingCars] = useState(false)

        const handleChangeCar = (value) => {
            console.log('Has been selected a car')
            setValue(value)
        }

        const getCars = (value) => {
            setIsLoadingCars(true)
            setTimeout(() => {
                const result = {}
                let counter = 0

                for (const carId in carsObject) {
                    if (counter >= 5) break

                    const carName = carsObject[carId].name
                    if (carName.toUpperCase().search(RegExp(`${value.toUpperCase()}`)) >= 0) {
                        counter++
                        result[carId] = carName
                    }
                }

                setCars(result)
                setIsLoadingCars(false)
            }, 600)
        }

        const handleChangeSearchText = debounce((value) => {
            console.log('changed text ', value)
            getCars(value)
        }, 600)

        return <div style={{ minHeight: '300px' }}>
            <SearchBox
                label={args.label || 'Search car'}
                placeholder={args.placeholder}
                value={value}
                onChange={handleChangeCar}
                onChangeSearchText={handleChangeSearchText}
                options={cars}
                isLoadingOptions={isLoadingCars}
            />
            {value !== '' && (
                <Grid>
                    <Text><b>Brand:</b> {carsObject[value].brand}</Text>
                    <Text><b>Model:</b> {carsObject[value].name}</Text>
                </Grid>
            )}
        </div>
    },
    toolbar: false
}