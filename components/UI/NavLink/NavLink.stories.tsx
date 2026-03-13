import type { Meta, StoryObj } from "@storybook/nextjs"
import { HomeIcon } from '../Icon'
import { NavLink } from "."

// import { HomeIcon } from '../Icon'

const meta: Meta<typeof NavLink> = {
  title: "NavLink",
  component: NavLink,
  args: {
    href: "/",
    label: "Overview",
    icon: <HomeIcon className="size-6" />,
    isActive: false,
    isExpanded: false,
  },
}

type Story = StoryObj<typeof NavLink>

export const Default: Story = {
  render: (args) => (
    <div className='bg-gray-400 p-4 w-fit'>
      <NavLink {...args} />
    </div>
  ),
}

export default meta
