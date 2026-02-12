import Image from "next/image";
import ProductActions from "../../components/product-detail/product-action";
import PriceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "../../../lib/api";

export type TPageProps = {
    params:Promise<{id: string}>;
}

const ProductDetail = async ({params}: TPageProps) => {
    const {id} = await params;

    const product = await getProductDetail(id);

    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image 
                src={getImageUrl(product.imageUrl)} 
                className="aspect-square object-contain w-full" 
                width={550} height={550} 
                alt={product.name}/>
            </div>
            <div className="py-7 w-full"> 
                <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
                <div className="py-2 px-6 mb-5 bg-primary-light rounded-full text-primary w-fit">
                    {product.category.name}
                </div>
                <p className="leading-loose mb-8">
                    {product.description}
                </p>
                <div className="text-primary font-semibold text-[32px] mb-12">
                    {PriceFormatter(product.price)}
                </div>
                <ProductActions product= {product}stock={product.stock} />
            </div>
        </main>
    )
}

export default ProductDetail;