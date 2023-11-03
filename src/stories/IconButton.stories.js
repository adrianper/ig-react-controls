import { IconButton } from "../components";

const positions = { 'up': 'up', 'right': 'right', 'down': 'down', 'left': 'left' };

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        direction: {
            options: Object.keys(positions),
            mapping: positions,
            control: {
                type: 'select', labels: {
                    'up': 'up',
                    'right': 'right',
                    'down': 'down',
                    'left': 'left',
                }
            }
        },
    },
};

export const AddIcon = {
    args: {
        icon: 'add',
        size: 1.5,
    }
}