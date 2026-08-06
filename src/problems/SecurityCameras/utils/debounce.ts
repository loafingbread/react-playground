export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  msDelay: number,
): T {
  let timeoutId: number = 0;

  return ((...args: Parameters<T>) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, msDelay);
  }) as T;
}
