import { useState, useEffect } from "react";
import React from "react";

import styles from "./clock.module.scss";
import { getNavigatorLanguage } from "../../utils";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = React.useMemo(
    () =>
      time.toLocaleTimeString(getNavigatorLanguage(), {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    [time],
  );

  const formattedDate = React.useMemo(
    () =>
      time.toLocaleDateString(getNavigatorLanguage(), {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    [time],
  );

  return (
    <div className={styles.clock}>
      <div className={styles["clock--time"]}>{formattedTime}</div>
      <div className={styles["clock--date"]}>
        {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
      </div>
    </div>
  );
}
