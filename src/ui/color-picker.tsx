import React, { useEffect, useRef } from "preact/compat";
import Button from "./button";
import { SketchPicker, SketchPickerProps } from "react-color";

export default function ColorPicker({ color, ...props }: SketchPickerProps) {
  const [visible, setVisible] = React.useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      ref={pickerRef}
    >
      <Button onClick={() => setVisible(!visible)}>
        <div
          style={{
            backgroundColor: color as string,
            width: "26px",
            height: "25px",
          }}
        ></div>
      </Button>

      {visible && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "100%",
            marginLeft: "10px",
            zIndex: 999,
          }}
        >
          <SketchPicker color={color} {...props} />
        </div>
      )}
    </div>
  );
}
