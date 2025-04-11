import Clock from "./clock";
import SearchBar from "./search-bar";
import Tabs from "./tabs";
import VisualBlock from "../../ui/visual-block";
import Weather from "./weather";

export default function Index() {
  return (
    <VisualBlock>
      <Weather />
      <Clock />
      <SearchBar />
      <Tabs />
    </VisualBlock>
  );
}
