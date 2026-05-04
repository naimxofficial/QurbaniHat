import { Button } from "@heroui/react";
import Link from "next/link";


const Category = async () => {
    const res = await fetch('https://qurbanihat-kappa.vercel.app/category.json');
    const categories = await res.json();
    return (
        <div className="flex items-center gap-5 my-10  text-xl font-bold">
            {
                categories.map(category => <Link  key={category.id} href={`?category=${category.slug}`}><Button variant="outline">{category.category}</Button></Link>)
            }
        </div>
    );
};

export default Category;