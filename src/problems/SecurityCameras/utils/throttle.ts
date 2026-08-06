export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  msWait: number,
): T {
  let lastFired: number = 0;

  return ((...args: Parameters<T>) => {
    const now = Date.now();
    const timeSinceLastFired = now - lastFired;

    if (timeSinceLastFired >= msWait) {
      lastFired = now;
      fn(...args);
    }
  }) as T;
}
