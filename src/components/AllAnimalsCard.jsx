import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const AllAnimalsCard = ({animal}) => {
    return (
        <div className='p-4 bg-base-100 rounded-2xl shadow-xl'>
            <div className="w-full relative  mx-auto   rounded-2xl h-60 ">

                <Image fill src={animal.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={animal.name} className='object-cover rounded-2xl'></Image>

            </div>
            <div className="card-body px-0">
                <h2 className="card-title ">
                    {animal.name}
                    <div className="badge badge-secondary">{animal.breed}</div>
                </h2>
                <p className=' line-clamp-2 overflow-hidden'>{animal.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{animal.weight}kg</div>
                    <div className="badge badge-outline">{animal.age}y</div>
                </div>
                <Link href="/allanimals"><Button className={'w-full object-bottom'}>View Details</Button></Link>
            </div>

        </div>
    );
};

export default AllAnimalsCard;