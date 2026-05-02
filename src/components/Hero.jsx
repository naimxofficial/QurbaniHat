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
                    <h1 className="mb-5 text-5xl font-bold not-md:text-3xl">QurbaniHat - Livestock Booking Platform</h1>
                    <p className="mb-5 not-md:text-sm">
                        A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats. Users can view details and place a booking after authentication.

                    </p>
                    <a href='/allanimals' className="animate__animated animate__pulse animate-ping  repeat-infinite  btn btn-primary">Browse</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;