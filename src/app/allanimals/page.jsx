import AllAnimalsCard from "@/components/AllAnimalsCard";

const AllAnimalspage = async () => {
    const res = await fetch('https://qurbanihat-kappa.vercel.app/data.json');
    const animals = await res.json();
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-5xl not-md:text-3xl text-center my-7">ALL ANIMALS</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    animals.map(animal=><AllAnimalsCard key={animal.id} animal={animal}></AllAnimalsCard>)
                }
            </div>

        </div>
    );
};

export default AllAnimalspage;