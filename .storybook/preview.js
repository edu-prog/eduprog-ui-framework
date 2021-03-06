import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import EduprogTheme from "./EduprogTheme";
import "../src/styles/themes/eduprogTheme.scss";

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: EduprogTheme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  theme: {
    default: 'light',
    selector: 'body',
    themes: [
      {
        id: 'light',
        title: 'Light',
        class: 'light',
        color: '#fff',
      },
      {
        id: 'dark',
        title: 'Dark',
        class: 'dark',
        color: '#000',
      },
    ],
  }
};
