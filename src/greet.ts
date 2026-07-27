/**
 * Build a friendly greeting for the given name.
 *
 * @param name - The name to greet. Falls back to "world" when omitted or blank.
 * @returns A greeting string, e.g. "Hello, Ada!".
 */
export function greet(name?: string): string {
  const who = name?.trim() || "world";
  return `Hello, ${who}!`;
}
