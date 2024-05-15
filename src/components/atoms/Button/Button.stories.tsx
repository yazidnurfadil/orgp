import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

import { button } from "@nextui-org/theme";
import {
  Camera,
  HeadphonesIcon,
  Notification,
  ArrowRightIcon,
} from "@nextui-org/shared-icons";
import { Grid } from "@/components/atoms/Grid";

const meta: Meta<typeof Button> = {
  title: "UI/Input/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "solid",
        "bordered",
        "light",
        "flat",
        "faded",
        "shadow",
        "ghost",
      ],
    },
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
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    spinnerPlacement: {
      control: {
        type: "select",
      },
      options: ["start", "end"],
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const defaultProps = {
  children: "Button",
  spinnerPlacement: "start",
  ...button.defaultVariants,
};

const SizesTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Grid>
        {meta.argTypes?.size?.options?.map(
          (size: "sm" | "md" | "lg", index: number) => (
            <Button key={index} {...args} size={size}>
              Button
            </Button>
          )
        )}
      </Grid>
    );
  },
};

const SizesTemplateNoText: Story = {
  render: ({ ...args }) => {
    return (
      <Grid>
        {meta.argTypes?.size?.options?.map(
          (size: "sm" | "md" | "lg", index: number) => (
            <Button key={index} {...args} size={size} />
          )
        )}
      </Grid>
    );
  },
};

const ColorsTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Grid>
        {meta.argTypes?.color?.options?.map(
          (
            color:
              | "default"
              | "primary"
              | "secondary"
              | "success"
              | "warning"
              | "danger"
          ) => (
            <>
              <Button {...args} color={color}>
                Button
              </Button>
              <Button {...args} color={color} endContent={<ArrowRightIcon />}>
                Button
              </Button>
              <Button {...args} color={color} variant="solid">
                Button
              </Button>
              <Button {...args} color={color} variant="light">
                Button
              </Button>
            </>
          )
        )}
      </Grid>
    );
  },
};

export const Sizes: Story = {
  ...SizesTemplate,
  args: {
    onClick: () => alert(2),
    className: "max-w-fit",
  },
};

export const SizesNoText: Story = {
  ...SizesTemplateNoText,
  args: {
    onClick: () => alert(2),
    className: "max-w-fit",
  },
};

export const Colors: Story = {
  ...ColorsTemplate,
  args: {
    onClick: () => alert(2),
    className: "max-w-fit",
  },
};

export const IsDisabled = {
  args: {
    ...defaultProps,
    isDisabled: true,
  },
};

export const DisableRipple = {
  args: {
    ...defaultProps,
    disableRipple: true,
  },
};

export const WithIcons = {
  args: {
    ...defaultProps,
    startContent: <Notification className="fill-current" />,
    endContent: <Camera className="fill-current" />,
  },
};

export const IconButton = {
  args: {
    ...defaultProps,
    isIconOnly: true,
    children: <HeadphonesIcon className="w-5 h-5" />,
  },
};

export const IsLoading = {
  args: {
    ...defaultProps,
    color: "primary",
    isLoading: true,
  },
};

export const CustomWithClassNames = {
  args: {
    ...defaultProps,
    radius: "full",
    className:
      "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
  },
};
