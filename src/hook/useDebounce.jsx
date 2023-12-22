import { useEffect, useState } from "react";
import { debounce } from "lodash-es";

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debouncedSetter = debounce(
      (newValue) => setDebouncedValue(newValue),
      delay
    );

    debouncedSetter(value);

    return () => {
      debouncedSetter.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};
