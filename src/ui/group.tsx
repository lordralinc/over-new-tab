import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./group.module.scss";

const Group = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    variant?: "default" | "ghost";
  }
>(({ className, title, children, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClassNames(className?.toString(), styles.group)}
      data-variant={variant}
      {...props}
    >
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
});

export default Group;
