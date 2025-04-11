import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./input.module.scss";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={mergeClassNames(className?.toString(), styles.input)}
      {...props}
    />
  );
});

export default Input;
