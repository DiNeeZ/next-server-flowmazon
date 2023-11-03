"use client";

import React, { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

interface FormSubmitButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export default function FormSubmitButton({
  children,
  className,
  ...restProps
}: FormSubmitButtonProps) {
  const status = useFormStatus();

  return (
    <button
      {...restProps}
      type="submit"
      className={`btn btn-primary ${className}`}
      disabled={status.pending}
    >
      {children}
      {status.pending && <span className="loading loading-spinner text-info" />}
    </button>
  );
}
