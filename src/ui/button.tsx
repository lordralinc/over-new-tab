import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./button.module.scss";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { ghost?: boolean }
>(({ className, ghost = true, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={
        ghost
          ? mergeClassNames(className?.toString(), styles.button)
          : mergeClassNames(className?.toString(), styles.button, styles.bg)
      }
      {...props}
    />
  );
});

export default Button;
