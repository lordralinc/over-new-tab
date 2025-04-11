import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./button.module.scss";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={mergeClassNames(className?.toString(), styles.button)}
      {...props}
    />
  );
});

export default Button;
