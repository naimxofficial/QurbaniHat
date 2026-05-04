"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SortDropdown = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSort = (e) => {
        const params = new URLSearchParams(searchParams.toString());
        if (e.target.value) {
            params.set("sort", e.target.value);
        } else {
            params.delete("sort");
        }
        router.push(`?${params.toString()}`);
    };

    const currentSort = searchParams.get("sort") || "";

    return (
        <div className="flex items-center gap-2 mx-10 my-4">
            <label className="font-semibold text-base text-gray-700">
                Sort by Price:
            </label>
            <select
                value={currentSort}
                onChange={handleSort}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium bg-white shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
            >
                <option value="">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
    );
};

export default SortDropdown;