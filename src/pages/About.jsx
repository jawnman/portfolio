import React, { useEffect } from 'react';
import AboutSection from '../components/About';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <AboutSection />
        </div>
    );
};

export default About;
