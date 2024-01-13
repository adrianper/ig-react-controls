import { useState } from 'react';
import { ColorPicker } from '../components';
import { customArgTypes } from './customArgTypes';

// const variants = { 'filled': 'filled', 'filled--danger': 'filled--danger', 'outlined': 'outlined', 'outlined--danger': 'outlined--danger' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/ColorPicker',
    component: ColorPicker,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: { control: 'none' },
        onChange: customArgTypes.onChange,
        textFieldProps: {
            control: 'none',
            description: 'Object of `TextField` accepted properties',
            table: { type: { summary: 'object' }, defaultValue: { summary: '{ }' } }
        },
        ref: customArgTypes.ref,
    },
}

const ColorPickerExample = () => {
    const [color, setColor] = useState('#ffb1b2')

    return <ColorPicker value={color} onChange={setColor} />
}

export const Example = {
    render: ColorPickerExample
}