import { useEffect, useState } from 'react';

const useMounted = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (isMounted) {
            console.log('🌊 component is mounted.');
        } else {
            console.log('🦋 component is unmounted.');
        }
    }, [isMounted]);

    return isMounted;
};

export default useMounted;
