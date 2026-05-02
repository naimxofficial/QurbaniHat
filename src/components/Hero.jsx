import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen "
            style={{
                backgroundImage:
                    "url(https://media.istockphoto.com/id/972092380/photo/mature-and-senior-cowboy-handshake-at-the-ranch.jpg?s=612x612&w=0&k=20&c=h6ZMWjsefSpm3Y5GxVdTR0s-YLbtoAoWoRU3nttijag=)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-6xl font-bold not-md:text-3xl">QurbaniHat - Livestock Booking Platform</h1>
                    <p className="mb-20 not-md:text-sm text-xl">
                        QurbaniHat is a modern livestock booking platform built for Eid ul Adha. Browse vet-checked cows and goats from verified sellers across Bangladesh, view full animal details, and place a booking in minutes — all from one clean, mobile-friendly interface. The platform features Google authentication, a guided Qurbani tips section, breed guides, and a smooth booking flow with instant confirmation.

                    </p>
                    <a href='/allanimals' className="animate__animated animate__pulse animate-ping  repeat-infinite  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">Browse animals</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;