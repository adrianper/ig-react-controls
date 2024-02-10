import { useState } from 'react';
import { Button, Modal, Text } from '../components';
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
    },
}

export const Example = {
    render: () => {
        const [value, setValue] = useState(false)

        const toggleModal = () => {
            setValue(value => !value)
        }

        return (
            <>
                <Button onClick={toggleModal}>Open modal</Button>
                <Modal isOpen={value} closeModal={toggleModal}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, provident nihil? Pariatur harum incidunt consectetur fuga nisi error distinctio, sint deserunt amet aut sapiente, a ducimus expedita perferendis ab consequatur?
                    </Text>
                </Modal>
            </>
        )
    }
}