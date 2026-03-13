import * as React from "react"

import { cn } from "lib/utils"
import { Field, FieldDescription, FieldLabel } from '../Field';

const InputPrimitive = ({ className, type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-md border border-beige-500 hover:border-grey-500 bg-transparent px-5 py-3 text-preset-4 text-grey-900 transition-colors outline-none placeholder:text-preset-4 placeholder:text-beige-500 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
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
}

const Input = ({ containerClassname, description, label, ...inputProps }: Props) => (
  <Field className={containerClassname}>
    {label && <FieldLabel htmlFor="input-demo-api-key">{label}</FieldLabel>}
    <InputPrimitive {...inputProps} />
    {description && <FieldDescription>{description}</FieldDescription>}
  </Field>
);

export { Input }
