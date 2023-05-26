import type { Preview } from '@storybook/react';
import * as nextImage from "next/image";
import "../src/styles/globals.scss";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img { ...props } />;
  },
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
