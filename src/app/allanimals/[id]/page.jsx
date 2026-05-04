import AnimalDetail from "@/components/AnimalDetail";


const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const res = await fetch('https://qurbanihat-kappa.vercel.app/data.json');
    const animals = await res.json();
    const animal = animals.find(p => p.id == id)
    return (
        <div className="my-7">
            <h1 className='text-center font-bold text-5xl not-md:text-3xl mb-3'>ANIMAL DETAILS</h1>
            <AnimalDetail animal={animal}></AnimalDetail>
        </div>
    );
};

export default AnimalDetails;