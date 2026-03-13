import type { Meta, StoryObj } from "@storybook/nextjs"
import { SelectField } from "./index"

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "mango", label: "Mango" },
]

const meta: Meta<typeof SelectField> = {
  title: "Select",
  component: SelectField,
  args: {
    placeholder: "Select an option",
    label: "Label",
    description: "Helper text",
    disabled: false,
    options,
  },
}

type Story = StoryObj<typeof SelectField>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}

export const NoLabel: Story = {
  args: { label: undefined, description: undefined },
}

export default meta
