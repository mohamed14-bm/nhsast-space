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
            viewBox="0 0 320 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${heights[size]} w-auto ${className}`}
            aria-label="NHSAST Logo"
        >
            <defs>
                <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00F0FF" />
                    <stop offset="60%" stopColor="#8A2BE2" />
                </linearGradient>
            </defs>

            {/* --- Text Only Layout --- */}

            {/* Acronym - Large, Bold, Gradient */}
            <text
                x="0"
                y="35"
                fill="url(#textGradient)"
                fontFamily="'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                fontWeight="900"
                fontSize="38"
                letterSpacing="1"
            >
                NHSAST
            </text>

            {/* English Name - Uppercase, clean white */}
            <text
                x="2"
                y="54"
                fill="#FFFFFF"
                fontFamily="'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                fontSize="9"
                fontWeight="600"
                letterSpacing="0.8"
                opacity="0.9"
            >
                NATIONAL HIGHER SCHOOL OF AUTONOMOUS SYSTEMS
            </text>

            {/* Arabic Name - Standard Font */}
            <text
                x="2"
                y="72"
                fill="#E2E8F0"
                fontFamily="'Segoe UI', 'Tahoma', 'Arial', sans-serif"
                fontSize="11"
                fontWeight="700"
                opacity="0.8"
            >
                المدرسة الوطنية العليا لتكنولوجيا الأنظمة المستقلة
            </text>
        </svg>
    );
};

export default NHSASTLogo;
