import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

const teamMembers = [
    {
        name: 'Emily Kim',
        role: 'Founder',
        img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3',
    },
    {
        name: 'Michael Steward',
        role: 'Creative Director',
        img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3',
    },
    {
        name: 'Emma Rodriguez',
        role: 'Lead Developer',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        name: 'Julia Gimmel',
        role: 'UX Designer',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        name: 'Lisa Anderson',
        role: 'Marketing Manager',
        img: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
        name: 'James Wilson',
        role: 'Product Manager',
        img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3',
    },
];

const MagazinItem = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const updateCarousel = (newIndex) => {
        if (isAnimating) return;
        setIsAnimating(true);
        const total = teamMembers.length;
        setCurrentIndex((newIndex + total) % total);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const handleSwipe = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) updateCarousel(currentIndex + 1);
            else updateCarousel(currentIndex - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
            if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    return (
        <div className="team-carousel-wrapper">
            <div
                className="carousel-container"
                onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
                onTouchEnd={(e) => {
                    touchEndX.current = e.changedTouches[0].screenX;
                    handleSwipe();
                }}
            >
                <div className="carousel-track">
                    {teamMembers.map((member, i) => {
                        let className = 'card hidden';
                        const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
                        if (offset === 0) className = 'card center';
                        else if (offset === 1) className = 'card right-1';
                        else if (offset === 2) className = 'card right-2';
                        else if (offset === teamMembers.length - 1) className = 'card left-1';
                        else if (offset === teamMembers.length - 2) className = 'card left-2';

                        return (
                            <div key={i} className={className} onClick={() => updateCarousel(i)}>
                                <img src={member.img} alt={member.name} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MagazinItem;
