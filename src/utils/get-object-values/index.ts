export function values<T extends object, V extends unknown>(object: T): V[] {
  return Object.values(object) as V[];
}
