export function assertDefined<T>(value: T | undefined, message?: string): T {
  if (value === undefined) {
    throw new Error(message);
  }

  return value;
}
