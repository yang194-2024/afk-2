/**
 * Build a friendly greeting for the given name.
 *
 * @param name - The name to greet. Falls back to "world" when omitted or blank.
 * @returns A greeting string, e.g. "Hello, Ada!".
 */
export function greet(name?: string): string {
  const trimmed = name?.trim();
  const who = trimmed && trimmed.length > 0 ? trimmed : "world";
  return `Hello, ${who}!`;
}
