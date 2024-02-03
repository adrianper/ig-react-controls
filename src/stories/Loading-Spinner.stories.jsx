import { Spinner } from "../components";
import { customTableDefaults } from "./customArgTypes";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Loading/Spinner',
    component: Spinner,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        appSpinner: {
            control: 'boolean',
            table: customTableDefaults.bool,
        },
        isLoading: {
            control: 'boolean',
            table: customTableDefaults.bool,
        },
    },
};

export const Example = {
    args: {
        isLoading: true
    },
    render: (args) => (
        <div style={{ width: '200px', height: '200px' }}>
            <Spinner {...args} />
        </div>
    )
}