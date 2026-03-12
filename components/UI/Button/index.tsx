import { cva, type VariantProps } from "class-variance-authority"
import Link from 'next/link';

import { twMerge } from "tailwind-merge"

const buttonCVA = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-lg",
    "text-center",
    "border",
    "border-transparent",
    "transition-colors",
    "delay-50",
    "text-preset-4-bold",
    "p-4",
    "text-grey-900",
    "pointer",
    "cursor-pointer",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-grey-900", "text-white", "hover:bg-grey-500"],
        secondary: ["bg-white", "border-beige-500", "hover:border-transparent", "hover:bg-beige-100"],
        tertiary: ["bg-transparent", "p-0", "text-preset-4", "hover:text-grey-500"],
        destroy: ["bg-red", "hover:bg-red/80", "text-white"],
      },
      disabled: {
        false: null,
        true: ["pointer-events-none", "opacity-50"],
      }
    },
    defaultVariants: {
      intent: "primary",
    },
  }
)

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, 'type' | 'disabled'>, Omit<VariantProps<typeof buttonCVA>, 'disabled'> {
  href?: string;
  type?: 'link' | 'button';
  disabled?: boolean;
}

export function Button({ className, intent = "primary", disabled = false, href, type = 'button', ...rest }: ButtonProps) {
  const props = {
    className: twMerge(buttonCVA({ intent, disabled, className })),
    'aria-disabled': disabled,
    ...rest
  }

  if (type === 'link' && href) {
    <Link {...props} href={href} />
  }

  return (
    <button {...props}>
      {props.children}
    </button>
  )
}
