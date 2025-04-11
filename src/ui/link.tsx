import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./link.module.scss";

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={mergeClassNames(className?.toString(), styles.link)}
      {...props}
    />
  );
});

export default Link;
