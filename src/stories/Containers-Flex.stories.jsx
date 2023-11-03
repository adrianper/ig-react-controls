import { Flex } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Containers/Flex',
    component: Flex,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        style: { control: 'object' },
        margin: { control: 'text' },
        padding: { control: 'text' },
        direction: { control: 'radio', options: ['column', 'row'] },
        gap: { control: 'text' },
        align: { control: 'text', description: '**align-items** CSS property' },
        justify: { control: 'text', description: '**justify-content** CSS property' },
        maxWidth: { control: 'text' },
        w100: { control: 'boolean' },
        h100: { control: 'boolean' },
        skipClickOutside: { control: 'boolean', description: 'If **true** container is ignored in function clickOutside', },
        wrap: { control: 'boolean' },
    },
};

const flexItemStyle = { border: '1px solid gray', borderRadius: '4px', padding: '2px' }
const FlexExample = (props) => {
    return (
        <Flex {...props}>
            <Flex style={flexItemStyle}>Item1</Flex>
            <Flex style={flexItemStyle}>Item2</Flex>
            <Flex style={flexItemStyle}>Item3</Flex>
            <Flex style={flexItemStyle}>Item4</Flex>
            <Flex style={flexItemStyle}>Item5</Flex>
        </Flex>
    )
}

export const Example = {
    args: {
        wrap: true,
        gap: '10px',
        maxWidth: '300px',
        padding: '1rem',
        style: { border: '1px solid black', minHeight: '100px' }
    },
    render: (args) => <FlexExample {...args} />
}
