export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timerId: ReturnType<typeof setTimeout> | null;

  return function (...args: Parameters<T>) {
    const context = this;

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      callback.apply(context, args);
    }, wait);
  };
};
