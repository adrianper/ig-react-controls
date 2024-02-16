import { useState } from 'react';
import { ComboBox } from '../components';
import { customArgTypes } from './customArgTypes';

// const variants = { 'filled': 'filled', 'filled--danger': 'filled--danger', 'outlined': 'outlined', 'outlined--danger': 'outlined--danger' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/ComboBox',
    component: ComboBox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        className: customArgTypes.className,
        ref: customArgTypes.ref,
        onChange: customArgTypes.onChange,
    },
}

const citiesObj = {
    1: 'New York',
    2: 'Los Angeles',
    3: 'San Francisco',
    4: 'Chicago',
    5: 'San Diego',
}

const ComboBoxExample = (props) => {
    const [city, setCity] = useState('')

    return <div style={{ width: '100vw', maxWidth: '200px', minHeight: '250px' }}>
        <ComboBox {...{ ...props, value: city, onChange: setCity }} />
    </div>
}

export const Example = {
    args: {
        floatingLabel: true,
        nullValue: true,
        label: 'City',
        options: citiesObj,
    },
    render: ComboBoxExample
}