import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "."

describe("Button", () => {
  it("renders with children", () => {
    render(<Button href="/test">Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies correct intent classes", () => {
    const { container } = render(
      <Button href="/test" intent="secondary">
        Secondary
      </Button>
    )
    const link = container.querySelector("a")
    expect(link).toHaveClass("bg-transparent")
    expect(link).toHaveClass("text-blue-400")
  })
})
