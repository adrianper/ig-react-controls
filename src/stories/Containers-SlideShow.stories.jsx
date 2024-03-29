import { useState } from "react";
import { Grid, Flex, SlideShow, IconButton } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Containers/SlideShow',
    component: SlideShow,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        controls: { sort: 'alpha' }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        containerProps: { control: 'none', description: '**Flex** container properties' },
        currentScreen: { control: 'none', description: 'Control current screen  component properties' },
    },
};

const SlideShowExample = (props) => {
    const [currentScreen, setCurrentScreen] = useState(0)

    const previousScreen = () => {
        setCurrentScreen(currentScreen => currentScreen - 1)
    }

    const nextScreen = () => {
        setCurrentScreen(currentScreen => currentScreen + 1)
    }

    return (
        <Grid gap='10px'>
            <SlideShow currentScreen={currentScreen} containerProps={{ style: { height: '100px' } }}>
                <Flex justify='center' align='center' padding='6px' style={{ backgroundColor: '#ff000088' }}>Screen 1</Flex>
                <Flex justify='center' align='center' padding='6px' style={{ backgroundColor: '#00ff0088' }}>Screen 2</Flex>
                <Flex justify='center' align='center' padding='6px' style={{ backgroundColor: '#0000ff88' }}>Screen 3</Flex>
            </SlideShow>
            <Flex gap='10px' justify='center'>
                <IconButton className={currentScreen === 0 ? 'disabled' : ''} onClick={previousScreen} icon="arrow" direction='down' />
                <IconButton className={currentScreen === 2 ? 'disabled' : ''} onClick={nextScreen} icon="arrow" />
            </Flex>
        </Grid>
    )
}

export const Example = {
    render: SlideShowExample
}
