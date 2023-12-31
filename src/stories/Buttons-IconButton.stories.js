import { IconButton } from "../components";
import { customArgTypes } from "./customArgTypes";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Buttons/IconButton',
    component: IconButton,
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
        direction: {
            options: ['up', 'right', 'down', 'left'],
            control: { type: 'select' }
        },
        icon: { table: { defaultValue: { summary: 'undefined' } } },
        onClick: customArgTypes.onClick,
    },
};

export const Example = {
    args: {
        icon: 'trash',
        size: 1.5,
    }
}