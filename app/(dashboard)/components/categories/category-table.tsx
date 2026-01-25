import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
{
    imageUrl: "/images/categories/category-running.svg",
    category: "Running",
    descriptions: "All Running Items, Shoes, Shirts",
},
{
    imageUrl: "/images/categories/category-running.svg",
    category: "Running",
    descriptions: "All Running Items, Shoes, Shirts",
},
];

const CategoryTable = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Category Name</th>
                        <th className="px-6 py-4 font-semibold">Descriptions</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryData.map((data, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <div className="aspect-square  rounded-md">
                                            <Image src={data.imageUrl} width={52} height={52} alt={data.category}
                                            className="aspect-square object-contain" />
                                        </div>
                                        <span>{data.category}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">{data.descriptions}</td>  
                                <td className="flex gap-3 text-gray-600 items-center px-6 py-7.5">
                                    <button>
                                        <FiEdit2 size={20}/>
                                    </button>
                                    <button>
                                        <FiTrash2 size={20}/>
                                    </button>
                                </td>                             
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default CategoryTable;