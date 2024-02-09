import { useState } from 'react';
import { FormHandler, Grid } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Inputs/FormHandler',
    component: FormHandler,
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
            description: 'Form ref, returns **validate** function and **fieldsRef**',
            table: { type: { summary: 'React ref', }, defaultValue: { summary: 'undefined' } }
        },
        fields: {
            control: 'object',
            description: `Fields object`,
            table: { type: { summary: 'object' }, defaultValue: { summary: '{ }' } }
        },
        formData: {
            control: 'none',
            description: 'Form value',
            table: { type: { summary: 'object' }, defaultValue: { summary: '{ }' } }
        },
        setFormData: {
            control: 'none',
            description: 'Form `onChange` event',
            table: { type: { summary: 'function' }, defaultValue: { summary: 'undefined' } }
        }
    },
}

const formFields = {
    email: {
        type: 'text_field',
        inputProps: {
            label: 'Email',
            type: 'email',
            placeholder: 'Type email',
            style: { gridArea: 'a' },
        },
        onChange: console.log,
    },
    password: {
        type: 'text_field',
        inputProps: {
            label: 'Password',
            type: 'password',
            placeholder: 'Type password',
            style: { gridArea: 'b' },
        }
    },
    promo_code: {
        type: 'character_field',
        inputProps: {
            label: 'Promotional code',
            size: 4,
            type: 'number',
            style: { gridArea: 'c' },
        }
    },
    terms: {
        type: 'checkbox',
        inputProps: {
            className: 'terms_checkbox',
            style: { gridArea: 'd' },
        }
    },
    label_terms: {
        type: 'text',
        inputProps: {
            children: 'Accept terms and conditions',
            className: 'terms_label',
            style: { gridArea: 'e' },
        }
    },
}

export const Example = {
    args: {
        fields: formFields,
    },
    render: (args) => {
        const [formData, setFormData] = useState({})

        return (
            <Grid gap='1rem' itemsX='center' itemsY='center' style={{ gridTemplateAreas: '"a a" "b b" "c c" "d e"' }}>
                <FormHandler fields={args.fields} formData={formData} setFormData={setFormData} />
            </Grid>
        )
    }
}