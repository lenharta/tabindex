import { deserializeJSON, serializeJSON } from '@/utils';

type StorageKey = 'local' | 'session';

export function useStorage<T extends Record<string, any>>({ key }: { key: StorageKey }) {
  const location = key === 'local' ? 'localStorage' : 'sessionStorage';

  const read = (): boolean => {
    try {
      return !!window[location].getItem(key);
    } catch (error: any) {
      console.error(`[store/useStorage()]: Check 'READ' method @ ${key}`);
      return false;
    }
  };

  const fetch = (): T | null => {
    try {
      return deserializeJSON<T>(window[location].getItem(key)!) as T;
    } catch (error: any) {
      console.error(`[store/useStorage()]: Check 'FETCH' method @ ${key}`);
      return null;
    }
  };

  const write = (data: T): boolean => {
    try {
      window[location].setItem(key, serializeJSON(data));
      return true;
    } catch (error: any) {
      console.error(`[store/useStorage()]: Check 'WRITE' method @ ${key}`);
      return false;
    }
  };

  return { read, fetch, write };
}
