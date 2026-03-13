import type { Meta } from "@storybook/nextjs"

import { Sidebar } from '.'

const meta: Meta = {
  title: "Sidebar",
}

export const Default = {
  render: () => (
    <div className="p-4 h-[calc(100vh-2rem)] min-h-150">
      <Sidebar />
    </div>
  ),
}

export default meta
