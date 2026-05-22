import { useEffect, useState } from 'react';

export function useImageExists(src?: string): boolean {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (!src) {
      setExists(false);
      return;
    }

    let mounted = true;
    const img = new Image();
    setExists(false);

    img.onload = () => {
      if (mounted) {
        setExists(true);
      }
    };
    img.onerror = () => {
      if (mounted) {
        setExists(false);
      }
    };
    img.src = src;

    return () => {
      mounted = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return exists;
}
