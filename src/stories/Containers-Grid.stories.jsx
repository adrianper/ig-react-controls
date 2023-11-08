import { Flex as FlexComponent, Grid as GridComponent } from "../components";
import { customArgTypes } from "./customArgTypes";

const Grid = props => <GridComponent {...props} />
const Flex = props => <FlexComponent {...props} />

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Containers/Grid',
    component: Grid,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        style: customArgTypes.style,
        className: customArgTypes.className,
        padding: customArgTypes.padding,
        margin: customArgTypes.margin,
        gap: customArgTypes.gap,
        columns: { control: 'text', description: '**grid-template-columns** CSS property' },
        rows: { control: 'text', description: '**grid-template-rows** CSS property' },
        direction: { control: 'radio', description: '**grid-auto-flow** CSS property', options: ['column', 'row'], table: { type: { summary: 'string' }, defaultValue: '' } },
        itemsX: { control: 'text', description: '**justify-items** CSS property' },
        itemsY: { control: 'text', description: '**align-items** CSS property' },
        contentX: { control: 'text', description: '**justify-content** CSS property' },
        contentY: { control: 'text', description: '**align-content** CSS property' },
        // // w100: {},
        // // h100: {},
        maxWidth: customArgTypes.maxWidth,
        selfX: { control: 'text', description: '**justify-self** CSS property' },
        selfY: { control: 'text', description: '**align-self** CSS property' },
        skipClickOutside: customArgTypes.skipClickOutside,
    },
};

const flexItemStyle = { border: '1px solid gray', borderRadius: '4px', padding: '2px' }
const GridExample = (props) => {
    return (
        <Grid {...props}>
            <Flex style={flexItemStyle}>Item1</Flex>
            <Flex style={flexItemStyle}>Item2</Flex>
            <Flex style={flexItemStyle}>Item3</Flex>
            <Flex style={flexItemStyle}>Item4</Flex>
            <Flex style={flexItemStyle}>Item5</Flex>
        </Grid>
    )
}

export const Example = {
    args: {
        gap: '10px',
        maxWidth: '300px',
        padding: '1rem',
        style: { border: '1px solid black', minHeight: '100px' },
        // direction: 'column'
    },
    render: GridExample
}
