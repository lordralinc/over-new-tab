import React from "preact/compat";
import Input from "../../ui/input";
import styles from "./search-bar.module.scss";
import Button from "../../ui/button";
import config from "../../config";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = React.useState("");

  const providers = config.searchProviders;

  const search = React.useCallback(
    (variant: string) => {
      let provider = providers.filter((pr) => pr.id === variant)[0];
      window.open(
        provider.search_url.replace(
          "${searchTerms}",
          encodeURIComponent(searchValue)
        )
      );
    },
    [searchValue]
  );

  return (
    <div className={styles.container}>
      <Input
        type="text"
        onChange={(e) =>
          setSearchValue((e.target as HTMLInputElement | null)?.value || "")
        }
        placeholder={t("Search")}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "enter") search("google");
        }}
      />
      <div className={styles.buttons}>
        {providers
          .filter((provider) => provider.enabled)
          .map((provider) => (
            <Button key={provider.id} onClick={() => search(provider.id)}>
              {provider.name}
            </Button>
          ))}
      </div>
    </div>
  );
}
