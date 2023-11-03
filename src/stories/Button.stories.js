import { Button } from "../components";

const variants = { 'filled': 'filled', 'filled--danger': 'filled--danger', 'outlined': 'outlined', 'outlined--danger': 'outlined--danger' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        variant: {
            options: Object.keys(variants),
            mapping: variants,
            control: {
                type: 'select', labels: {
                    'filled': 'Filled',
                    'filled--danger': 'Filled Danger',
                    'outlined': 'Outlined',
                    'outlined--danger': 'Outlined Danger',
                }
            }
        },
    },
};

export const Default = {
    args: {
        children: 'Click me!',
        variant: 'filled',
    }
}