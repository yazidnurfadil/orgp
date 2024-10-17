import { code } from "@nextui-org/theme";
import { Meta } from "@storybook/react";

import { Code } from "@nextui-org/code";

export default {
  title: "Atoms/Code",
  component: Code,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
  },
} as Meta<typeof Code>;

const defaultProps = {
  children: "npm install @nextui-org/react",
  ...code.defaultVariants,
};

export const Default = {
  args: {
    ...defaultProps,
  },
};
