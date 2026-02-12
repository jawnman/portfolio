import React, { useEffect } from 'react';
import Gallery from '../components/Gallery';

const Photos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <Gallery />
        </div>
    );
};

export default Photos;
