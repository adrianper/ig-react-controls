import { useState } from 'react';
import { Button, Grid, Modal, Text } from '../components';
import { customArgTypes } from './customArgTypes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Modal/Modal',
    component: Modal,
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
        isOpen: { control: 'text' },
        closeBtn: { control: 'boolean' },
        maxWidth: { control: 'text' },
        maxHeight: { control: 'text' },
    },
}

export const Example = {
    args: {
        closeBtn: true,
    },
    render: (props) => {
        const [value, setValue] = useState(false)

        const toggleModal = () => {
            setValue(value => !value)
        }

        return (
            <>
                <Button onClick={toggleModal}>Open modal</Button>
                <Modal {...props} isOpen={value} onClose={toggleModal}>
                    <Grid itemsX='center'>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, provident nihil? Pariatur harum incidunt consectetur fuga nisi error distinctio, sint deserunt amet aut sapiente, a ducimus expedita perferendis ab consequatur?
                        </Text>
                        <Button onClick={toggleModal}>Close</Button>
                    </Grid>
                </Modal>
            </>
        )
    }
}