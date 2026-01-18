import Image from "next/image";
import ProductActions from "../../components/product-detail/product-action";
import PriceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src="/images/products/product-4.svg" className="aspect-square object-contain w-full" width={550} height={550} alt="product 4 image"/>
            </div>
            <div className="py-7 w-full">
                <h1 className="font-bold text-5xl mb-6">SportsOn HyperSoccer v2</h1>
                <div className="py-2 px-6 mb-5 bg-primary-light rounded-full text-primary w-fit">
                    Football
                </div>
                <p className="leading-loose mb-8">
                    TheSportsOn HyperSoccer v2 is engineered for the player who demands precision, power and unrivaled speed on  the pitch.
                    Featuring a striking, two-toned black and white design with deep crimson accents. These cleats dont't just perform-they make a statement. 
                    Experience the fiture of football footwear with v2 enhanced fit and cutting-edge traction.
                </p>
                <div className="text-primary font-semibold text-[32px] mb-12">
                    {PriceFormatter(458000)}
                </div>
                <ProductActions />
            </div>
        </main>
    )
}

export default ProductDetail;