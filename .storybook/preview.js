/** @type { import('@storybook/react').Preview } */
import './general.scss'
import './color_variables.scss'
import './filter_variables.scss'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
