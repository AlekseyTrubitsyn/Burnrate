import * as React from "react"

import { cn } from "lib/utils"
import { Field, FieldDescription, FieldLabel } from '../Field';

const InputPrimitive = ({ className, type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-md border border-beige-500 hover:border-grey-500 bg-transparent px-5 py-3  text-grey-900 transition-colors outline-none placeholder:text-beige-500 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "text-preset-4 placeholder:text-preset-4",
        className
      )}
      {...props}
    />
  )
}

type Props = React.ComponentProps<"input"> & {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  containerClassname?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = ({ containerClassname, description, label, startAdornment, endAdornment, className, ...inputProps }: Props) => (
  <Field className={containerClassname}>
    {label && <FieldLabel htmlFor="input-demo-api-key">{label}</FieldLabel>}
    <div className="relative">
      {startAdornment && (
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-beige-500 leading-none">
          {startAdornment}
        </span>
      )}
      <InputPrimitive
        className={cn(
          startAdornment && "pl-10",
          endAdornment && "pr-10",
          className
        )}
        {...inputProps}
      />
      {endAdornment && (
        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-beige-500 leading-none">
          {endAdornment}
        </span>
      )}
    </div>
    {description && <FieldDescription>{description}</FieldDescription>}
  </Field>
);

export { Input }
