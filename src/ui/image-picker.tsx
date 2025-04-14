import { useEffect, useState } from "react";
import localforage from "localforage";

import styles from "./image-picker.module.scss";
import Input from "./input";

interface ImagePickerProps {
  value?: string;
  onChange: (id: string) => void;
}

interface StoredImage {
  id: string;
  src: string;
}

export default function ImagePicker({ value, onChange }: ImagePickerProps) {
  const [images, setImages] = useState<StoredImage[]>([]);

  useEffect(() => {
    (async () => {
      const keys = await localforage.keys();
      const items: StoredImage[] = [];

      for (const key of keys) {
        const src = await localforage.getItem<string>(key);
        if (typeof src === "string") {
          items.push({ id: key, src });
        }
      }

      setImages(items);
    })();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;

    const id = `${Date.now()}-${file.name}`;
    const reader = new FileReader();

    reader.onload = async () => {
      if (reader.result && typeof reader.result === "string") {
        await localforage.setItem(id, reader.result);
        setImages((prev) => [...prev, { id, src: reader.result as string }]);
        onChange(id);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <Input type="file" accept="image/*" onChange={handleUpload} />
      <div className={styles["image-map"]}>
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            className={`${img.id === value ? styles["image-map--active"] : ""}`}
            onClick={() => onChange(img.id)}
            style={{
              width: 80,
              height: 80,
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
