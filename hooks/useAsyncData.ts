import { useEffect, useState } from 'react';

export function useAsyncData<T>(load: () => Promise<T>, initialValue: T): T {
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    let mounted = true;

    load().then((result) => {
      if (mounted) {
        setData(result);
      }
    });

    return () => {
      mounted = false;
    };
  }, [load]);

  return data;
}
