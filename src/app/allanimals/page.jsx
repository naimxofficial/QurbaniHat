import AllAnimalsCard from "@/components/AllAnimalsCard";
import Category from "@/components/Category";
import SortDropdown from "@/components/SortDropdown";

const AllAnimalspage = async ({ searchParams }) => {
    const { sort, category } = (await searchParams) || {};

    const res = await fetch('https://qurbanihat-kappa.vercel.app/data.json');
    const animals = await res.json();

    // filtering by category (bonus)
    const filteredAnimals = animals.filter(animal => {

        if (!category || category === "all-animals") return true;

        if (!animal.category) return false;

        const animalSlug = animal.category.toLowerCase().replace(" ", "-");

        return animalSlug === category;
    });

    // sorting by price
    const sortedAnimals = [...filteredAnimals].sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return 0;
    });

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-5xl not-md:text-3xl text-center my-7">ALL ANIMALS</h1>

            <Category></Category>

            <SortDropdown></SortDropdown>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    sortedAnimals.map(animal => <AllAnimalsCard key={animal.id} animal={animal}></AllAnimalsCard>)
                }
            </div>

        </div>
    );
};

export default AllAnimalspage;