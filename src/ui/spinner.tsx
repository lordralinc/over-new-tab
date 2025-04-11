import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./spinner.module.scss";

const Spinner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant: "small" | "medium" | "large" | undefined;
  }
>(({ className, variant = "small", ...props }, ref) => {
  const classList = [className?.toString(), styles.spinner];
  if (variant === "small") classList.push(styles["spinner--small"]);
  if (variant === "large") classList.push(styles["spinner--large"]);
  return <div ref={ref} className={mergeClassNames(...classList)} {...props} />;
});

export default Spinner;
