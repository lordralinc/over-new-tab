import React from "preact/compat";
import { mergeClassNames } from "../utils";
import styles from "./visual-block.module.scss";

const VisualBlock = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClassNames(className?.toString(), styles["visual-block"])}
      {...props}
    />
  );
});

export default VisualBlock;
