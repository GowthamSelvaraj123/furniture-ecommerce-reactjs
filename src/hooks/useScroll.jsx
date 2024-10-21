import { useEffect, useState } from 'react';

function useScroll() {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timeout;

        const handleScroll = () => {
            setIsScrolling(true);
            if (timeout) clearTimeout(timeout);

            timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 100); // Adjust timeout duration as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeout) clearTimeout(timeout);
        };
    }, []);

    return isScrolling;
}

export default useScroll;
