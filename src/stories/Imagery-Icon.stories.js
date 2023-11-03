import { Icon } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Imagery/Icon',
    component: Icon,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        direction: {
            options: ['up', 'right', 'down', 'left'],
            control: { type: 'select' }
        },
    },
};

export const Example = {
    args: {
        icon: 'arrow',
        size: 1.5,
    }
}