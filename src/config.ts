import { Tab, VisualConfig } from "./types";
import { getNavigatorLanguage } from "./utils";
import providers, {
  defaultProviders,
  SearchProviderWE,
} from "./pages/main/search-bar.providers";

export const defaultTabs: Tab[] = [
  {
    name: "ГЛАВНОЕ",
    color: "var(--accent-color)",
    content: [
      {
        name: "twitch",
        color: "var(--foreground-color)",
        url: "https://www.twitch.tv/",
      },
      {
        name: "chatgpt",
        color: "var(--foreground-color)",
        url: "https://chat.openai.com/",
      },
      {
        name: "deepseek",
        color: "var(--foreground-color)",
        url: "https://deepseek.com/",
      },
      {
        name: "reddit",
        color: "var(--foreground-color)",
        url: "https://www.reddit.com/",
      },
      {
        name: "youtube",
        color: "var(--foreground-color)",
        url: "https://www.youtube.com/",
      },
      {
        name: "music",
        color: "var(--foreground-color)",
        url: "https://music.youtube.com/",
      },
    ],
  },
  {
    name: "СОЦИАЛЬНЫЕ СЕТИ",
    color: "var(--accent-color)",
    content: [
      {
        name: "vk",
        color: "var(--foreground-color)",
        url: "https://vk.com/",
      },
      {
        name: "discord",
        color: "var(--foreground-color)",
        url: "https://discord.com/",
      },
      {
        name: "telegram",
        color: "var(--foreground-color)",
        url: "https://web.telegram.org/",
      },
      {
        name: "gmail",
        color: "var(--foreground-color)",
        url: "https://mail.google.com/",
      },
      {
        name: "whatsapp",
        color: "var(--foreground-color)",
        url: "https://web.whatsapp.com/",
      },
      {
        name: "messenger",
        color: "var(--foreground-color)",
        url: "https://www.messenger.com/",
      },
      {
        name: "facebook",
        color: "var(--foreground-color)",
        url: "https://www.facebook.com/",
      },
      {
        name: "instagram",
        color: "var(--foreground-color)",
        url: "https://www.instagram.com/",
      },
      {
        name: "twitter",
        color: "var(--foreground-color)",
        url: "https://twitter.com/",
      },
      {
        name: "snapchat",
        color: "var(--foreground-color)",
        url: "https://www.snapchat.com/",
      },
      {
        name: "tiktok",
        color: "var(--foreground-color)",
        url: "https://www.tiktok.com/",
      },
      {
        name: "linkedin",
        color: "var(--foreground-color)",
        url: "https://www.linkedin.com/",
      },
      {
        name: "skype",
        color: "var(--foreground-color)",
        url: "https://www.skype.com/",
      },
      {
        name: "signal",
        color: "var(--foreground-color)",
        url: "https://signal.org/",
      },
      {
        name: "line",
        color: "var(--foreground-color)",
        url: "https://line.me/",
      },
      {
        name: "weChat",
        color: "var(--foreground-color)",
        url: "https://www.wechat.com/",
      },
      {
        name: "viber",
        color: "var(--foreground-color)",
        url: "https://www.viber.com/",
      },
    ],
  },
  {
    name: "КОД",
    color: "var(--accent-color)",
    content: [
      {
        name: "github",
        color: "var(--foreground-color)",
        url: "https://github.com/",
      },
      {
        name: "gitlab",
        color: "var(--foreground-color)",
        url: "https://gitlab.com/",
      },
      {
        name: "bitbucket",
        color: "var(--foreground-color)",
        url: "https://bitbucket.org/",
      },
      {
        name: "trello",
        color: "var(--foreground-color)",
        url: "https://trello.com/",
      },
      {
        name: "jira",
        color: "var(--foreground-color)",
        url: "https://www.atlassian.com/software/jira",
      },
      {
        name: "stack overflow",
        color: "var(--foreground-color)",
        url: "https://stackoverflow.com/",
      },
      {
        name: "w3schools",
        color: "var(--foreground-color)",
        url: "https://www.w3schools.com/",
      },
      {
        name: "mdn web docs",
        color: "var(--foreground-color)",
        url: "https://developer.mozilla.org/",
      },
      {
        name: "codepen",
        color: "var(--foreground-color)",
        url: "https://codepen.io/",
      },
      {
        name: "replit",
        color: "var(--foreground-color)",
        url: "https://replit.com/",
      },
      {
        name: "jsfiddle",
        color: "var(--foreground-color)",
        url: "https://jsfiddle.net/",
      },
      {
        name: "codesandbox",
        color: "var(--foreground-color)",
        url: "https://codesandbox.io/",
      },
      {
        name: "leetcode",
        color: "var(--foreground-color)",
        url: "https://leetcode.com/",
      },
      {
        name: "codeforces",
        color: "var(--foreground-color)",
        url: "https://codeforces.com/",
      },
      {
        name: "hackerrank",
        color: "var(--foreground-color)",
        url: "https://www.hackerrank.com/",
      },
      {
        name: "kaggle",
        color: "var(--foreground-color)",
        url: "https://www.kaggle.com/",
      },
      {
        name: "godbolt",
        color: "var(--foreground-color)",
        url: "https://godbolt.org/",
      },
      {
        name: "runkit",
        color: "var(--foreground-color)",
        url: "https://runkit.com/",
      },
    ],
  },
];

export const defaultVisualConfig: VisualConfig = {
  backgroundType: "theme",
};

export interface ConfigUpdateEvent {
  key: string;
  value: any;
}

class Config {
  private events: Map<string, Set<(...args: any[]) => void>> = new Map();

  on(event: "update", listener: (arg: ConfigUpdateEvent) => void) {
    if (!this.events.has(event)) this.events.set(event, new Set());
    this.events.get(event)!.add(listener);
  }

  off(event: "update", listener: (arg: ConfigUpdateEvent) => void) {
    this.events.get(event)?.delete(listener);
  }

  emit(event: "update", e: ConfigUpdateEvent) {
    this.events.get(event)?.forEach((listener) => listener(e));
  }

  get city(): string | undefined {
    return localStorage.getItem("city") || undefined;
  }
  set city(value: string | undefined) {
    if (!value) {
      localStorage.removeItem("city");
    } else {
      localStorage.setItem("city", value);
    }
    this.emit("update", { key: "city", value: value });
  }

  get language(): string {
    return getNavigatorLanguage();
  }
  set language(value: string) {
    localStorage.setItem("language", value);
    this.emit("update", { key: "language", value: value });
  }

  get tabs(): Tab[] {
    return JSON.parse(
      localStorage.getItem("tabs") ?? JSON.stringify(defaultTabs)
    );
  }
  set tabs(value: Tab[]) {
    localStorage.setItem("tabs", JSON.stringify(value));
    this.emit("update", { key: "tabs", value: value });
  }

  get theme(): string {
    return localStorage.getItem("theme") ?? "system";
  }
  set theme(value: string) {
    localStorage.setItem("theme", value);
    this.emit("update", { key: "theme", value: value });
  }

  get visualConfig(): VisualConfig {
    return JSON.parse(
      localStorage.getItem("visualConfig") ??
        JSON.stringify(defaultVisualConfig)
    );
  }
  set visualConfig(value: VisualConfig) {
    localStorage.setItem("visualConfig", JSON.stringify(value));
    this.emit("update", { key: "visualConfig", value: value });
  }

  get searchProviders(): SearchProviderWE[] {
    if (!localStorage.getItem("searchProviders")) {
      localStorage.setItem(
        "searchProviders",
        JSON.stringify(
          defaultProviders.map((it) => {
            return { id: it, enabled: true };
          })
        )
      );
      return this.searchProviders;
    }
    const enabledItems = JSON.parse(
      localStorage.getItem("searchProviders") ?? "[]"
    ) as { id: string; enabled: string }[];
    return enabledItems
      .map((it) => {
        const provider = providers.filter((i) => i.id === it.id)[0];
        if (provider) {
          return { ...provider, ...it } as unknown as SearchProviderWE;
        }
        return undefined;
      })
      .filter((it) => it) as SearchProviderWE[];
  }

  set searchProviders(
    value: (SearchProviderWE | { id: string; enabled: string })[]
  ) {
    localStorage.setItem(
      "searchProviders",
      JSON.stringify(
        value.map((it) => {
          return { id: it.id, enabled: it.enabled };
        })
      )
    );
    this.emit("update", { key: "searchProviders", value: value });
  }
}

export default new Config();
