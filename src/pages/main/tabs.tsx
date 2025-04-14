import config from "../../config";
import Link from "../../ui/link";
import styles from "./tabs.module.scss";

export default function Tabs() {
  const tabs = config.tabs;

  return (
    <div className={styles.container}>
      {tabs.map((category) => {
        return (
          <div className={styles.category} style={{ color: category.color }}>
            <h3 className={styles.header}>{category.name}</h3>
            <div className={styles.links}>
              {category.content.map((site) => {
                return (
                  <Link href={site.url} style={{ color: site.color }}>
                    {site.name}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
