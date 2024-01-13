export const customTableDefaults = {
    string: { type: { summary: 'string' }, defaultValue: { summary: "''" } },
    bool: { type: { summary: 'bool' }, defaultValue: { summary: 'false' } },
}

export const customArgTypes = {
    className: {
        control: 'text', table: customTableDefaults.string
    },
    gap: {
        control: 'text',
        table: customTableDefaults.string
    },
    margin: {
        control: 'text',
        table: customTableDefaults.string
    },
    maxHeight: {
        control: 'text',
        table: customTableDefaults.string
    },
    maxWidth: {
        control: 'text',
        table: customTableDefaults.string
    },
    onChange: {
        control: 'none',
        description: 'Input `onChange` event',
        table: { type: { summary: 'function' }, defaultValue: { summary: 'undefined' } }
    },
    onClick: {
        control: 'none',
        description: 'Element `onClick` event',
        table: { type: { summary: 'function' }, defaultValue: { summary: 'undefined' } }
    },
    padding: {
        control: 'text',
        table: customTableDefaults.string
    },
    ref: {
        control: 'none',
        description: 'Element ref',
        table: { type: {}, defaultValue: { summary: 'undefined' } }
    },
    skipClickOutside: {
        control: 'boolean', description: 'If **true** the property `data-skip-click-outside` is added to the element',
        table: customTableDefaults.bool
    },
    style: {
        control: 'object',
        table: { type: { summary: 'object' }, defaultValue: { summary: '{ }' } }
    },
    width: {
        control: 'text',
        table: customTableDefaults.string
    },
}