import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  digitsonly?: boolean | string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, digitsonly, ...props }, ref) => {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (digitsonly) {
        // Convert digitsonly prop to a string before checking
        const isDigitOnly = String(digitsonly) === "true";
        if (isDigitOnly) {
          // Replace non-digit characters with an empty string
          event.target.value = event.target.value.replace(/[^0-9]/g, "");
        }
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        onInput={handleInput}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export { Input };
