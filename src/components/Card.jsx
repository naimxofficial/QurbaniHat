import Image from 'next/image';
import React from 'react';

const Card = ({ featuredAnimal }) => {

    return (
        <div className="card bg-base-100 w-96 shadow-sm mx-auto">
            <figure>
                <Image alt={featuredAnimal.name} width={200} height={200}
                    src={featuredAnimal.image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {featuredAnimal.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{featuredAnimal.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Card;