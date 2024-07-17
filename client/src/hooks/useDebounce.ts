import { useEffect, useRef, useState } from 'react';

/**
 *
 * @param value The value to set to the current state
 * @param timeOut The amount of time to wait before giving up on setting the value again
 * @returns The value to set to the current state or `null` if the value is not available
 */
const useDebounce = <T>(value: Nullable<T | unknown>, timeOut: number) => {
    const [debouncedValue, setDebouncedValue] = useState<Nullable<T | unknown>>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, timeOut);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [timeOut]);

    return debouncedValue;
};

export default useDebounce;
