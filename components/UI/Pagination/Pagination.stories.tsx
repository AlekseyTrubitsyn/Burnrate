import type { Meta, StoryObj } from "@storybook/nextjs"
import { useState } from "react"
import { Pagination } from "."

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
  args: {
    totalPages: 5,
    currentPage: 1,
  },
}

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

export const MiddlePage: Story = {
  render: (args) => {
    const [page, setPage] = useState(3)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

export const LastPage: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.totalPages)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

export const ManyPages: Story = {
  args: { totalPages: 10 },
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />
  },
}

export default meta
