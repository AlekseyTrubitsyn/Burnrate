import type { Meta, StoryObj } from "@storybook/nextjs"
import { Input } from "."

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Placeholder",
    disabled: false,
    type: "text",
    description: 'Helper text',
    label: 'Label'
  },
  argTypes: {
    type: {
      options: ["text", "email", "password", "number", "search", "url", "tel"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => <Input {...args} />,
}

export const Disabled: Story = {
  render: (args) => <Input {...args} />,
  args: { disabled: true },
}

export const Invalid: Story = {
  render: (args) => <Input {...args} />,
  args: { "aria-invalid": true },
}

export const Password: Story = {
  render: (args) => <Input {...args} />,
  args: { type: "password", placeholder: "Password" },
}

export default meta
