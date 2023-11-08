import { AccordionGroup as AccordionComponent } from "../components";
import { customArgTypes } from "./customArgTypes";

const AccordionGroup = props => <AccordionComponent {...props} />

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Containers/AccordionGroup',
    component: AccordionGroup,
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
        accordions: {
            control: 'none',
            description: 'Array of Accordion props objects. Pass prop `content` as `children` prop',
            table: { type: {}, defaultValue: { summary: '[]' } }
        },
        ref: { ...customArgTypes.ref, description: 'Component ref' },
    },
};

const AccordionGroupExample = (props) => {
    return (
        <AccordionGroup className={props.className} accordions={[
            {
                title: 'Accordion group tab 1',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed efficitur arcu, a semper erat. Nulla ut justo vitae mauris pretium posuere id id ipsum. Vivamus id dictum justo. Nulla facilisi. Vestibulum ullamcorper malesuada augue eu commodo. Mauris dapibus, risus id tristique gravida, nulla nisl viverra ipsum, dictum vehicula ipsum nulla non metus. Vestibulum id erat ipsum. Aliquam bibendum tortor non turpis porta faucibus. Nunc facilisis, eros sit amet ornare cursus, ante elit feugiat enim, a tempor orci turpis sed nisi.
                    Pellentesque at posuere nulla. Aliquam non urna congue, tincidunt velit vel, interdum orci. Cras et semper est, eget luctus nulla. Mauris ultrices dignissim nibh at pulvinar. Nunc pretium pretium condimentum. Ut placerat est vitae tellus dapibus mollis. Maecenas a nulla at diam imperdiet lacinia. Praesent auctor diam sem, vel malesuada tellus tempor in.`
            },
            {
                title: 'Accordion group tab 2',
                content: `Sed tortor tortor, vulputate nec faucibus faucibus, sollicitudin ac ipsum. Maecenas bibendum nibh eu nisl congue cursus. Aliquam erat volutpat. Integer lobortis pellentesque felis non blandit. Phasellus sit amet augue id eros ultrices molestie quis ac dui. Vivamus blandit, leo at venenatis sollicitudin, tortor ligula viverra dui, a vehicula orci ante ut neque. Nunc scelerisque lectus vitae sapien aliquet tristique.`
            },
        ]} />
    )
}

export const Example = {
    render: AccordionGroupExample
}
