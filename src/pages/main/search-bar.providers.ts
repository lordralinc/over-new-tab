export interface SearchProvider {
  id: string;
  name: string;
  search_url: string;
}

export interface SearchProviderWE extends SearchProvider {
  enabled: boolean;
}

export const defaultProviders = ["google", "google_translate", "chatgpt", "wikipedia"];

export default [
  // Общие поисковики
  {
    id: "google",
    name: "Google",
    search_url: "https://google.com/search?q=${searchTerms}",
  },
  {
    id: "bing",
    name: "Bing",
    search_url: "https://www.bing.com/search?q=${searchTerms}",
  },
  {
    id: "duckduckgo",
    name: "DuckDuckGo",
    search_url: "https://duckduckgo.com/?q=${searchTerms}",
  },
  {
    id: "yandex",
    name: "Yandex",
    search_url: "https://yandex.ru/search/?text=${searchTerms}",
  },
  {
    id: "startpage",
    name: "Startpage",
    search_url: "https://www.startpage.com/do/search?q=${searchTerms}",
  },
  {
    id: "brave",
    name: "Brave",
    search_url: "https://search.brave.com/search?q=${searchTerms}",
  },
  {
    id: "ecosia",
    name: "Ecosia",
    search_url: "https://www.ecosia.org/search?q=${searchTerms}",
  },
  {
    id: "qwant",
    name: "Qwant",
    search_url: "https://www.qwant.com/?q=${searchTerms}",
  },

  // Переводчики и языковые сервисы
  {
    id: "google_translate",
    name: "Google Translate",
    search_url: "https://translate.google.com/search?q=${searchTerms}",
  },
  {
    id: "deepl",
    name: "DeepL",
    search_url: "https://www.deepl.com/en/translator#en/ru/${searchTerms}",
  },

  // AI-сервисы
  {
    id: "chatgpt",
    name: "ChatGPT",
    search_url: "https://chatgpt.com/?hints=search&ref=ext&q=${searchTerms}",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    search_url: "https://www.perplexity.ai/search?q=${searchTerms}",
  },
  {
    id: "you",
    name: "You.com",
    search_url: "https://you.com/search?q=${searchTerms}",
  },

  // Документация и тех. источники
  {
    id: "mdn",
    name: "MDN Web Docs",
    search_url: "https://developer.mozilla.org/en-US/search?q=${searchTerms}",
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    search_url: "https://stackoverflow.com/search?q=${searchTerms}",
  },
  {
    id: "github",
    name: "GitHub",
    search_url: "https://github.com/search?q=${searchTerms}",
  },
  {
    id: "npm",
    name: "npm",
    search_url: "https://www.npmjs.com/search?q=${searchTerms}",
  },
  {
    id: "pypi",
    name: "PyPI",
    search_url: "https://pypi.org/search/?q=${searchTerms}",
  },
  {
    id: "pkg_go_dev",
    name: "pkg.go.dev",
    search_url: "https://pkg.go.dev/search?q=${searchTerms}",
  },
  {
    id: "docs_rs",
    name: "docs.rs (Rust)",
    search_url: "https://docs.rs/releases/search?query=${searchTerms}",
  },
  {
    id: "kotlin_docs",
    name: "Kotlin Docs",
    search_url: "https://kotlinlang.org/search.html?q=${searchTerms}",
  },

  // Общие источники знаний
  {
    id: "wikipedia",
    name: "Wikipedia",
    search_url: "https://en.wikipedia.org/w/index.php?search=${searchTerms}",
  },
  {
    id: "reddit",
    name: "Reddit",
    search_url: "https://www.reddit.com/search/?q=${searchTerms}",
  },
  {
    id: "quora",
    name: "Quora",
    search_url: "https://www.quora.com/search?q=${searchTerms}",
  },
];
