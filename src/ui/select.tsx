import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./select.module.scss";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={mergeClassNames(className?.toString(), styles.select)}
      {...props}
    />
  );
});

export default Select;
