import { render } from "preact";
import App from "./app";
import { SiteItem } from "./types";
import config, { defaultTabs } from "./config";
import "./i18n";

(async () => {
  try {
    const { default: browser } = await import("webextension-polyfill");
    let sites: SiteItem[] = [];

    const processTreeItem = (node: any) => {
      if (node.title === "Mozilla Firefox") return;

      if (node.url)
        sites.push({
          name: node.title,
          url: node.url,
          color: "var(--foreground-color)",
        });

      if (node.children) {
        node.children.forEach(processTreeItem);
      }
    };

    const bookmarksTree = await browser.bookmarks.getTree();
    bookmarksTree.forEach(processTreeItem);

    if (sites && !localStorage.getItem("tabs")) {
      config.tabs = [
        {
          name: "ЗАКЛАДКИ",
          color: "var(--accent-color)",
          content: sites,
        },
        ...defaultTabs,
      ];
    }
  } catch (e) {
    console.error("Кажется, мы запущены не как расширение", e);
  }
})();

render(<App />, document.getElementById("app")!);
