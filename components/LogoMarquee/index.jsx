import React from "react";
import Image from "next/image";

const LogoMarquee = ({ logos }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    };

    return (
        <div>
            <p style={{ textAlign: 'center', margin: '20px 0', color: '#6D5A76' }}>OUR PARTNERS ARE BACKED BY THE BEST</p>
            <div className="logo-marquee-container" style={containerStyle}>
                {logos.map((logo, index) => (
                    <div key={index} style={{ flex: '1 0 auto', maxWidth: '160px' }}>
                        <Image
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            width={160}
                            height={60}
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoMarquee;
