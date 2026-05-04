import React from 'react';
import { GiCow, GiGoat, GiWeight, GiSheep } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';

const typeColors = {
    Cow: {
        borderColor: "border-green-500",
        iconBg: "bg-[#eaf3de]",
        iconColor: "text-[#3b6d11]",
        tagColor: "text-[#3b6d11]",
        badgeBg: "bg-[#eaf3de]",
        badgeText: "text-[#27500a]",
    },
    Goat: {
        borderColor: "border-amber-500",
        iconBg: "bg-[#faeeda]",
        iconColor: "text-[#854f0b]",
        tagColor: "text-[#854f0b]",
        badgeBg: "bg-[#faeeda]",
        badgeText: "text-[#633806]",
    },
    Sheep: {
        borderColor: "border-purple-400",
        iconBg: "bg-[#eeedfe]",
        iconColor: "text-[#6f50b7]",
        tagColor: "text-[#6f50b7]",
        badgeBg: "bg-[#eeedfe]",
        badgeText: "text-[#3c3489]",
    },
};

const breeds = [
    { id: 3, name: "Australian Sheep", type: "Sheep", breed: "Merino", price: 18000, weight: 45, location: "Rajshahi", image: "https://i.ibb.co.com/5x6Yk5Fs/MA85562312-merinos-1200w.jpg" },
    { id: 5, name: "Jamuna Pari Goat", type: "Goat", breed: "Jamnapari", price: 28000, weight: 55, location: "Pabna", image: "https://i.ibb.co.com/YmXry90/Jamunapari-Goat.jpg" },
    { id: 7, name: "Deshi Khashi", type: "Goat", breed: "Local Deshi", price: 9500, weight: 18, location: "Chapai Nawabganj", image: "https://i.ibb.co.com/9HhDzGnZ/1-925.webp" },
    { id: 8, name: "Friesian Cross Cow", type: "Cow", breed: "Holstein Friesian Cross", price: 320000, weight: 610, location: "Dhaka", image: "https://i.ibb.co.com/BVzk73jN/168922581064206995.png" },
].map((item) => ({ ...item, ...typeColors[item.type] }));

const AnimalIcon = ({ type, className }) => {
    if (type === 'Cow') return <GiCow className={className} />;
    if (type === 'Sheep') return <GiSheep className={className} />;
    return <GiGoat className={className} />;
};

const TopBreeds = () => {
    return (
        <div className='w-11/12 mx-auto my-7'>
            <h1 className='text-center font-bold text-5xl not-md:text-3xl mb-3'>TOP BREEDS</h1>
            <p className='text-2xl not-md:text-md text-center mb-7'>Best livestock breeds for Qurbani in Bangladesh</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {breeds.map((breed) => (
                    <div key={breed.id} className={`border ${breed.borderColor} p-4 bg-base-100 shadow-xl rounded-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`}>

                        {/* Top row — icon + name */}
                        <div className='flex items-center gap-4'>
                            <AnimalIcon type={breed.type} className={`p-2 rounded-2xl ${breed.iconBg} ${breed.iconColor} text-6xl`} />
                            <div>
                                <p className={`text-md not-md:text-sm opacity-50 font-semibold ${breed.tagColor}`}>
                                    {breed.breed}
                                </p>
                                <h2 className='font-semibold text-xl'>
                                    {breed.name}
                                </h2>
                            </div>
                        </div>

                        {/* Location + weight */}
                        <div className='flex items-center gap-4 mt-4 opacity-70'>
                            <p className='text-sm font-semibold flex items-center gap-1'>
                                <MdLocationOn className={breed.iconColor} />
                                {breed.location}
                            </p>
                            <p className='text-sm font-semibold flex items-center gap-1'>
                                <GiWeight className={breed.iconColor} />
                                {breed.weight} kg
                            </p>
                        </div>

                        {/* Price + type badge + view button */}
                        <div className='flex items-center justify-between mt-4 pt-4 border-t border-gray-200'>
                            <span className='font-bold text-lg'>৳{breed.price.toLocaleString()}</span>
                            <div className='flex items-center gap-2'>
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${breed.badgeBg} ${breed.badgeText}`}>
                                    {breed.type}
                                </span>
                                <a
                                    href={`/animals/${breed.id}`}
                                    className={`text-xs font-bold px-3 py-1 rounded-full ${breed.badgeBg} ${breed.badgeText}`}
                                >
                                    View →
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBreeds;