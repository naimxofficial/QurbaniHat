import React from 'react';
import Card from './Card';

const Featured = async () => {
    const res = await fetch('https://qurbanihat-kappa.vercel.app/data.json');
    const animals = await res.json();
    console.log(animals);
    const featuredAnimals = animals.slice(0,4);
    console.log(featuredAnimals);
    return (
        <div className='my-10 '>
            <h1 className='text-center font-bold text-5xl  not-md:text-3xl mb-10'>Featured Animals</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5 mx-auto w-11/12 '>
                {
                    featuredAnimals.map(featuredAnimal => <Card key={featuredAnimal.id} featuredAnimal={featuredAnimal}></Card>)
                }

            </div>

        </div>
    );
};

export default Featured;