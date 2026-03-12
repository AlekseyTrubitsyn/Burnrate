import type { Meta, StoryObj } from "@storybook/nextjs"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    intent: "primary",
    disabled: false,
    children: "Button",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "tertiary", "destroy"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export default meta
