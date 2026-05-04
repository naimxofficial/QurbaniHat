
import Image from "next/image";
import { FaSearchLocation } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { SiClockify } from "react-icons/si";

const AnimalDetail = ({animal}) => {
    return (
        <div className="p-5 bg-base-300 shadow-sm rounded-2xl w-11/12 mx-auto flex justify-between items-center not-lg:items-baseline gap-5 not-lg:flex-col">
            {/* <div className="w-full relative  mx-auto   rounded-2xl h-100 md:h-200">

                <Image fill src={animal.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={animal.name} className='object-cover rounded-2xl'></Image>

            </div> */}
            <Image width={500} height={0} alt={animal.name} src={animal.image} className='rounded-2xl not-lg:mx-auto'></Image>
            <div className="space-y-3">

            <h1 className="text-5xl not-md:text-3xl font-black">{animal.name}</h1>
            <p className="badge">{animal.breed}</p>
            
            <div className="flex gap-3 items-center font-semibold not-md:flex-col not-lg:items-baseline">
                <p className="outline rounded-full p-2 bg-green-300 flex gap-1 items-center"><IoPricetagOutline /> Price: {animal.price} BDT</p>
                <p className="outline rounded-full p-2 bg-fuchsia-300 flex gap-1 items-center">
                    <LiaWeightHangingSolid /> 
                    Weight: {animal.weight} kilogram</p>
                <p className="outline rounded-full p-2 bg-blue-300 flex gap-1 items-center"> <SiClockify />{animal.age} years old</p>

            </div>

            <p className="font-semibold text-2xl md:text-xl flex items-center gap-1"><FaSearchLocation /> {animal.location}</p>
            <p className="badge text-white bg-black font-semibold text-2xl not-md:text-xs ">{animal.category}</p>

            <p className="opacity-80 font-semibold text-xl  not-md:text-md">{animal.description}</p>

            </div>

        </div>
    );
};

export default AnimalDetail;