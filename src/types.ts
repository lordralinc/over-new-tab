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

export interface VisualConfig {
  backgroundType: "theme" | "color" | "image";
  backgroundColor?: string;
  backgroundImageId?: string;
  backgroundImageScale?: "cover" | "contain" | "strech";
}
