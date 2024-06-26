import React from "react";
import { NextUIProvider } from "../src/providers/NextUi";
import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        string: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, context) => <NextUIProvider>{story(context)}</NextUIProvider>,
  ],
};

export default preview;
