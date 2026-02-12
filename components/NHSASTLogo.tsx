import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const NHSASTLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
    // Height control
    const heights = {
        sm: 'h-10',
        md: 'h-14',
        lg: 'h-20',
    };

    return (
        <svg
            viewBox="0 0 340 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${heights[size]} w-auto ${className}`}
            aria-label="NHSAST Logo"
        >
            <defs>
                <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00F0FF" />
                    <stop offset="100%" stopColor="#7000FF" />
                </linearGradient>
            </defs>

            {/* Main Logo Text - NHSAST with premium spacing */}
            <text
                x="0"
                y="42"
                fill="url(#premiumGradient)"
                fontFamily="'Space Grotesk', 'Inter', 'Segoe UI', sans-serif"
                fontWeight="800"
                fontSize="48"
                letterSpacing="3"
            >
                NHSAST
            </text>

            {/* Subtitle - SPACE */}
            <text
                x="2"
                y="70"
                fill="#FFFFFF"
                fontFamily="'Space Grotesk', 'Inter', sans-serif"
                fontSize="16"
                fontWeight="500"
                letterSpacing="8"
                opacity="0.9"
            >
                SPACE
            </text>

            {/* Accent underline */}
            <line
                x1="0"
                y1="76"
                x2="140"
                y2="76"
                stroke="url(#premiumGradient)"
                strokeWidth="2"
                opacity="0.5"
            />
        </svg>
    );
};

export default NHSASTLogo;
