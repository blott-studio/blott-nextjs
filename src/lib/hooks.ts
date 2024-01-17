import { useEffect, useState } from "react";

/**
 * Custom hook that returns a boolean value indicating whether the component has been hydrated.
 * @returns {boolean} The hydrated state of the component.
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}
