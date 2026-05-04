
import Image from "next/image";
import { FaSearchLocation } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { SiClockify } from "react-icons/si";
import BookingForm from "./BookingForm";

const AnimalDetail = ({animal}) => {
    return (
        <div>

        <div className="mt-5 p-5 bg-base-300 shadow-sm rounded-2xl w-11/12 mx-auto flex justify-between items-center not-lg:items-baseline gap-5 not-lg:flex-col">
           
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

        <BookingForm></BookingForm>
        </div>
    );
};

export default AnimalDetail;