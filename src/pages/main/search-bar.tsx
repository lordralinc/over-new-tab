import React from "preact/compat";
import Input from "../../ui/input";
import styles from "./search-bar.module.scss";
import Button from "../../ui/button";

export default function SearchBar() {
  const [searchValue, setSearchValue] = React.useState("");

  const search = React.useCallback(
    (variant: "google" | "google_translate" | "chatgpt" = "google") => {
      if (variant === "google") {
        document.location = `https://google.com/search?q=${searchValue}`;
      } else if (variant === "google_translate") {
        document.location = `https://translate.google.com/?hl=ru&q=${searchValue}`;
      } else if (variant === "chatgpt") {
        document.location = `https://chatgpt.com/?q=${searchValue}&hints=search&ref=ext`;
      }
    },
    [searchValue],
  );

  return (
    <div className={styles.container}>
      <Input
        type="text"
        onChange={(e) =>
          setSearchValue((e.target as HTMLInputElement | null)?.value || "")
        }
        placeholder="Поиск"
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "enter") search();
        }}
      />
      <div className={styles.buttons}>
        <Button onClick={() => search("google")}>Google</Button>
        <Button onClick={() => search("google_translate")}>
          Google Translate
        </Button>
        <Button onClick={() => search("chatgpt")}>ChatGPT</Button>
      </div>
    </div>
  );
}
