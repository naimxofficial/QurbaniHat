import React from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = async () => {
    const res = await fetch('https://qurbanihat-kappa.vercel.app/data.json');
    const data = await res.json();
    const animals = data.slice(0,4);

    return (
        <div className='my-10 '>
            <h1 className='text-center font-bold text-5xl  not-md:text-3xl mb-10'>Featured Animals</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto w-11/12 '>
                {
                    animals.map(animal => <FeaturedCard key={animal.id} animal={animal}></FeaturedCard>)
                }

            </div>

        </div>
    );
};

export default Featured;