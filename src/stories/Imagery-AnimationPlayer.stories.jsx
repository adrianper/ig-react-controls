import { AnimationPlayer, Flex } from "../components";
import { IoClose } from "react-icons/io5";
import { BiMessageError, BiSolidMessageError } from "react-icons/bi";
import { TbInfoSquare, TbInfoSquareFilled } from "react-icons/tb";
import { TbAlertTriangle, TbAlertTriangleFilled } from "react-icons/tb";
import { BsPatchCheck, BsPatchCheckFill } from "react-icons/bs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Imagery/AnimationPlayer',
    component: AnimationPlayer,
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

export const Example = {
    args: {
        animation: 'zoomIn',
        hoverAnimate: true,
    },
    render: (props) => {
        return (
            <Flex direction='column' align='center'>
                <Flex>
                    <AnimationPlayer animation='pulse'>
                        <BiMessageError size='5rem' style={{ cursor: 'pointer' }} color='var(--color--red--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbInfoSquare size='5rem' style={{ cursor: 'pointer' }} color='var(--color--blue--7)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbAlertTriangle size='5rem' style={{ cursor: 'pointer' }} color='var(--color--yellow--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <BsPatchCheck size='5rem' style={{ cursor: 'pointer' }} color='var(--color--green--1)' />
                    </AnimationPlayer>
                </Flex>
                <Flex>
                    <AnimationPlayer animation='pulse'>
                        <BiSolidMessageError size='5rem' style={{ cursor: 'pointer' }} color='var(--color--red--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbInfoSquareFilled size='5rem' style={{ cursor: 'pointer' }} color='var(--color--blue--7)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <TbAlertTriangleFilled size='5rem' style={{ cursor: 'pointer' }} color='var(--color--yellow--1)' />
                    </AnimationPlayer>
                    <AnimationPlayer animation='pulse'>
                        <BsPatchCheckFill size='5rem' style={{ cursor: 'pointer' }} color='var(--color--green--1)' />
                    </AnimationPlayer>
                </Flex>
                <AnimationPlayer {...props}>
                    <IoClose size='5rem' style={{ cursor: 'pointer' }} color='var(--color--red--1)' />
                </AnimationPlayer>
            </Flex>
        )
    }
}
