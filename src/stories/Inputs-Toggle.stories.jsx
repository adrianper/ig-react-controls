import { useState } from 'react';
import { Grid, Text, Toggle } from '../components';
import { customArgTypes } from './customArgTypes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/Toggle',
    component: Toggle,
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
        onChange: customArgTypes.onChange,
    },
}

export const Example = {
    render: (args) => {
        const [value, setValue] = useState(false)
        return (
            <Grid gap='1rem' itemsX='center'>
                <Toggle value={value} onChange={setValue} alwaysActive={args.alwaysActive} />
                <Text>Value is {value ? 'true' : 'false'}</Text>
            </Grid>
        )
    }
}