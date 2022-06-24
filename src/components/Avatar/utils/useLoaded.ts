import React from "react";
import { ImageLoadedProps } from "../src/Avatar.interface";

function useLoaded({ src, srcSet }: ImageLoadedProps) {
  const [loaded, setLoaded] = React.useState<any>(false);

  React.useEffect(() => {
    if (!srcSet) return;
    if (!src) return;

    setLoaded(false);

    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) return;

      setLoaded("loaded");
    };

    image.onerror = () => {
      if (!active) return;

      setLoaded("error");
    };

    image.src = src;

    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      active = false;
    };
  }, [src, srcSet]);

  return loaded;
}

export default useLoaded;
