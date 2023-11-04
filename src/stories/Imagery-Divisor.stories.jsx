import { Divisor, Flex as FlexComponent } from "../components";

const Flex = props => <FlexComponent {...props} />

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Imagery/Divisor',
    component: Divisor,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        className: { control: 'text' },
        color: { control: 'text' },
        height: { control: 'text' },
        margin: { control: 'text' },
        maxWidth: { control: 'text' },
        thickness: { control: 'text' },
        vertical: { control: 'boolean' },
        width: { control: 'text' },
    },
};

// export const Default = {
//     args: {
//         width: '100px',
//         thickness: '2px',
//         color: 'green--2'
//     },
//     render: (args) => <Divisor {...args} />
// }

const DivisorExample = (props) => {
    return (
        <Flex>
            <p>Vertical divisor</p>
            <Divisor vertical color='green--1' margin='4px' />
            <Flex direction='column'>
                <p>Horizontal divisor</p>
                <Divisor color='green--1' margin='4px' />
                <p>Horizontal divisor</p>
            </Flex>
        </Flex>
    )
}

export const Example = {
    render: DivisorExample,
}
