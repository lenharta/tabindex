export function localStorageManager<T extends Record<string, any>>(key: string) {
  return {
    async has() {
      try {
        return !!window.localStorage.getItem(key);
      } catch (error: any) {
        console.log(`[@tabindex/local-storage]: Could not GET storage ${error.message}`);
        return false;
      }
    },
    async get() {
      try {
        const storage = window.localStorage.getItem(key);
        return storage ? JSON.parse(storage) : null;
      } catch (error: any) {
        console.log(`[@tabindex/local-storage]: Could not GET storage ${error.message}`);
        return null;
      }
    },
    async set(value: T) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error: any) {
        console.log(`[@tabindex/local-storage]: Could not SET storage ${error.message}`);
        return false;
      }
    },
    async remove() {
      try {
        window.localStorage.removeItem(key);
      } catch (error: any) {
        console.log(`[@tabindex/local-storage]: Could not REMOVE storage ${error.message}`);
      }
    },
  };
}
