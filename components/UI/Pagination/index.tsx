"use client"

import { twMerge } from "tailwind-merge"
import { CaretRightIcon } from "components/UI/Icon"

const pageButtonBase = [
  "inline-flex items-center justify-center",
  "rounded-lg border",
  "p-4 min-w-[2.5rem] h-10",
  "transition-colors cursor-pointer",
  "disabled:pointer-events-none disabled:opacity-50 gap-4",
].join(" ")

const secondaryStyle = "bg-white border-beige-500 hover:border-transparent hover:bg-beige-500 hover:text-white text-grey-900"
const primaryStyle = "bg-grey-900 border-transparent hover:bg-grey-500 text-white"

type Props = {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ totalPages, currentPage, onPageChange, className }: Props) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={twMerge("flex items-center gap-2 text-preset-5-bold", className)}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className={twMerge(pageButtonBase, secondaryStyle, "")}
      >
        <CaretRightIcon className="size-4 rotate-180" />
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={twMerge(
            pageButtonBase,
            "text-preset-5-bold",
            page === currentPage ? primaryStyle : secondaryStyle,
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className={twMerge(pageButtonBase, secondaryStyle)}
      >
        <span>Next</span>
        <CaretRightIcon className="size-4" />
      </button>
    </nav>
  )
}
