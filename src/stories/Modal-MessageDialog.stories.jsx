import { useRef } from 'react';
import { Button, Flex, MessageDialog, Text } from '../components';
import { customArgTypes } from './customArgTypes';
import PropTypes from 'prop-types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Modal/MessageDialog',
    component: MessageDialog,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        ref: {
            control: 'none',
            description: `Object of type
            \n\t{
            \n\t\tshow: fn(showArgs),
            \n\t\tshowConfirm: fn(showArgs): Promise,
            \n\t\thide: fn(),
            \n\t\terror: fn(errors: [string])
            \n\t}
            \n\tObject showArgs = {
            \n\t\ttype: [ALERT, ERROR, INFO, SUCCESS],
            \n\t\ttitle: string|node,
            \n\t\tcontent: string|[string]
            \n\t}`,
            table: { type: { summary: 'ref object' }, defaultValue: { summary: 'undefined' } }
        },
        className: customArgTypes.className,
        confirmText: { control: 'text' },
        cancelText: { control: 'text' },
        closeBtn: { control: 'boolean' },
    },
}

const MdRefType = {
    current: {
        show: PropTypes.func,
        hide: PropTypes.func,
        error: PropTypes.func,
    }
}

export const Example = {
    args: {
        confirmText: undefined,
        cancelText: undefined,
        closeBtn: false,
    },
    render: ({ confirmText, cancelText, closeBtn }) => {
        /**
         * @type MdRefType
         */
        const mdRef = useRef()

        const confirmCallback = () => {
            console.log('Dialog is confirmed')
        }

        const cancelCallback = () => {
            console.log('Dialog is canceled')
        }

        const showAlert = () => {
            mdRef.current.show({
                type: 'ERROR',
                title: 'Oops! Something went wrong!',
                content: 'Error processing request',
            })
        }

        const showConfirm = async () => {
            const confirmResult = await mdRef.current.showConfirm({
                type: 'INFO',
                title: 'Dialog confirm title',
                content: 'Please confirm action',
            })
            if (confirmResult)
                confirmCallback()
            else
                cancelCallback()
        }

        return (
            <Flex>
                <Button onClick={showAlert}>Alert dialog</Button>
                <Button onClick={showConfirm}>Confirm dialog</Button>
                <MessageDialog
                    ref={mdRef}
                    confirmText={confirmText}
                    cancelText={cancelText}
                    closeBtn={closeBtn}
                />
            </Flex>
        )
    }
}
