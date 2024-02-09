import { useState } from "react";
import { CharacterField } from "../components";
import { customArgTypes } from "./customArgTypes";

// const variants = { 'filled': 'filled', 'filled--danger': 'filled--danger', 'outlined': 'outlined', 'outlined--danger': 'outlined--danger' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/CharacterField',
    component: CharacterField,
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
        lblAlign: {
            options: ['left', 'center', 'right'],
            description: 'Label alignment, possible values "left" | "center" | "right"',
            table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } }
        },
        size: {
            control: 'number',
            description: 'Field length, number of input characters (1 - 12)',
            table: {
                type: { summary: 'number', detail: null }, defaultValue: { summary: '1' }
            },
        },
        type: {
            control: 'select',
            description: 'Label alignment, accepted values "text" | "number" | "password"',
            table: { type: { summary: 'string' }, defaultValue: { summary: 'text' } }
        }
    },
}

const CharacterFieldExample = (props) => {
    const [characterValue, setCharacterValue] = useState('')

    return (
        <CharacterField
            {...props}
            value={characterValue}
            onChange={setCharacterValue}
        />
    )
}

export const Example = {
    args: {
        className: 'custom_characterfield',
        size: 6,
        length: 6,
        label: 'Passcode',
        lblAlign: 'center',
        type: 'password',
    },
    render: CharacterFieldExample
}