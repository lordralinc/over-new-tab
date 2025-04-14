import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./select.module.scss";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { ghost?: boolean }
>(({ className, ghost = true, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={
        ghost
          ? mergeClassNames(className?.toString(), styles.select)
          : mergeClassNames(className?.toString(), styles.select, styles.bg)
      }
      {...props}
    />
  );
});

export default Select;
