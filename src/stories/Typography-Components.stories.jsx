import { Grid, Link, Text } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Typography/Components',
    component: Text,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};

const TyphographyExample = (props) => {

    return (
        <Grid gap='10px'>
            <Text {...props}>Text</Text>
            <Link {...props}>Link</Link>
        </Grid>
    )
}

export const Example = {
    render: TyphographyExample
}
