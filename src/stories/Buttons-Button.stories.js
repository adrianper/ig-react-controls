import { Button } from "../components";
import { customArgTypes } from "./customArgTypes";

// const variants = { 'filled': 'filled', 'filled--danger': 'filled--danger', 'outlined': 'outlined', 'outlined--danger': 'outlined--danger' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Buttons/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        children: { table: { defaultValue: { summary: 'undefined' } } },
        className: customArgTypes.className,
        onClick: customArgTypes.onClick,
        ref: customArgTypes.ref,
        variant: {
            // options: Object.keys(variants),
            // mapping: variants,
            options: ['filled', 'outlined', 'filled--danger', 'outlined--danger'],
            control: {
                type: 'select'/*, labels: {
                    'filled': 'Filled',
                    'filled--danger': 'Filled Danger',
                    'outlined': 'Outlined',
                    'outlined--danger': 'Outlined Danger',
                }*/
            }
        },
    },
};

export const Default = {
    args: {
        children: 'Click me!',
        variant: 'outlined',
    },
}