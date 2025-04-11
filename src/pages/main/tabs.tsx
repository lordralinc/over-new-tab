import Link from "../../ui/link";
import styles from "./tabs.module.scss";

export interface SiteItem {
  name: string;
  color: string;
  url: string;
}

export interface Tab {
  name: string;
  color: string;
  content: SiteItem[];
}

export const defaultTabs: Tab[] = [
  {
    name: "SOCIAL",
    color: "rgb(255, 137, 255)",
    content: [
      { name: "vk", color: "var(--foreground-color)", url: "https://vk.com" },
      {
        name: "discord",
        color: "var(--foreground-color)",
        url: "https://discord.com/app",
      },
    ],
  },
  {
    name: "GENERAL",
    color: "rgb(255, 137, 137)",
    content: [
      {
        name: "youtube",
        color: "var(--foreground-color)",
        url: "https://www.youtube.com/",
      },
    ],
  },
  {
    name: "TECHS",
    color: "rgb(137, 237, 255)",
    content: [
      {
        name: "github",
        color: "var(--foreground-color)",
        url: "https://github.com/",
      },
    ],
  },
];

export default function Tabs() {
  const tabs = JSON.parse(
    localStorage.getItem("tabs") ?? JSON.stringify(defaultTabs),
  ) as Tab[];

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
