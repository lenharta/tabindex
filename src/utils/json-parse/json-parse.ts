export function parseJSON<T>(data: string) {
  return JSON.parse(JSON.stringify(data)) as T;
}
