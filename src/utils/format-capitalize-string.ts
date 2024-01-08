export function capitalizeString(str: string) {
  const clean = str.toLowerCase();
  const char = clean.charAt(0).toUpperCase();
  return char + clean.slice(1, str.length);
}
