import { Button, Grid, Tooltip } from '../components';
import { customArgTypes } from './customArgTypes';

import { LuBadgeHelp } from "react-icons/lu";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Modal/Tooltip',
    component: Tooltip,
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
        position: { control: 'select' }
    },
}

export const Example = {
    args: {
        title: 'This is an interactive tooltip',
        titleSize: 2,
        position: 'top',
        closeDelay: 300,
        interactive: true,
    },
    render: (props) => {
        const { position, title, titleSize, closeDelay, interactive } = props

        return (
            <Grid>
                <Tooltip
                    position={position}
                    title={title}
                    titleSize={titleSize}
                    closeDelay={closeDelay}
                    interactive={interactive}
                >
                    <LuBadgeHelp size='2em' className='react_icon react_icon--hover_colored' />
                </Tooltip>
            </Grid>
        )
    }
}