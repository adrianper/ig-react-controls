import { useState } from 'react';
import { RadioButton } from '../components';
import { customArgTypes, customTableDefaults } from './customArgTypes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/RadioButton',
    component: RadioButton,
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
        direction: {
            description: '**grid-auto-flow** property',
            options: ['row', 'column'],
            table: { type: { summary: "'row' 'column'" } },
            control: 'radio',
        },
        inputs: {
            description: 'Object with input and label names',
            table: { type: { summary: `{ "inputName": "label" }` } },
        },
        gap: { table: customTableDefaults.string },
        templateColumns: { control: 'text', table: customTableDefaults.string },
        templateRows: { control: 'text', table: customTableDefaults.string },
        likert: { table: { disable: true } },
    },
}

export const Example = {
    args: {
        inputs: { 'F': 'Femenino', 'M': 'Masculino' },
        templateColumns: 'auto auto',
        gap: '8px',
        containerStyle: { direction: 'rtl' },
        direction: 'row'
    },
    render: (args) => {
        const [value, setValue] = useState('')
        return <RadioButton {...{ ...args, value, onChange: setValue }} />
    }
}