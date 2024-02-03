import { useState } from 'react';
import { TextField } from '../components';
import { customArgTypes } from './customArgTypes';

// const variants = { 'filled': 'filled', 'filled--danger': 'filled--danger', 'outlined': 'outlined', 'outlined--danger': 'outlined--danger' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/TextField',
    component: TextField,
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
        onBlur: { control: 'none' },
        onFocus: { control: 'none' },
        onValidate: { control: 'none' },
        value: {
            control: 'none',
        },
        rest: {
            control: 'none',
            description: 'Object of `input` accepted properties',
            table: { type: { summary: 'object' }, defaultValue: { summary: 'undefined' } }
        }
    },
}

export const Example = {
    args: {
        className: 'custom_textfield',
        type: 'email',
        label: 'Email',
    },
    render: (args) => {
        const [value, setValue] = useState('')

        return <div style={{ width: '100vw', maxWidth: '200px', minHeight: '200px' }}>
            <TextField {...{ ...args, value, onChange: setValue }} data-some-property={'some-value'} />
        </div>
    }
}