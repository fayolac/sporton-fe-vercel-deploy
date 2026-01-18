import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const cartList = [
    {
        name : "SportOn Product 1",
        category: "Running",
        price: 450000,
        qty:2,
        imgurl: "product-1.svg"
    },
    {
        name : "SportOn Product 2",
        category: "Running",
        price: 250000,
        qty:3,
        imgurl: "product-2.svg"
    },
    {
        name : "SportOn Product 3",
        category: "Running",
        price: 230000,
        qty:5,
        imgurl: "product-3.svg"
    },  
    {
        name : "SportOn Product 4",
        category: "Running",
        price: 530000,
        qty:1,
        imgurl: "product-4.svg"
    }, 
];

const CartPopup = () => {
    const {push} = useRouter();
    const totalPrice = cartList.reduce((total,item) => total+item.price * item.qty, 0);

    const handleCheckout = () => {
        push ("/checkout")
    }
    return (
        <div className="absolute bg-white right-0 top-12 shadow-xl border border-gray-200 w-90 shadow-black/10">
            <div className="p-4 border-b border-gray-200 font-bold text-center z-10">
                Shopping Cart
            </div>
            {
                cartList.map((item,index) =>(
                    <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                        <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                            <Image src={`/images/products/${item.imgurl}`} 
                            width={63} height={63} 
                            alt={item.name} 
                            className="object-contain aspect-square"/>
                        </div>
                    <div className="self-center">
                        <div className="text-sm font-medium">
                            {item.name}
                        </div>
                        <div className="flex gap-3 font-medium text-xs">
                            <div>{item.qty}x</div>
                            <div className="text-primary">{PriceFormatter(item.price)}</div>
                        </div>
                    </div> 
                    <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center ml-auto">
                        <FiTrash2/>
                    </Button>
                    </div>
                ))}
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between font-semibold">
                        <div className="text-sm">Total</div>
                        <div className="text-primary text-xs">{PriceFormatter(totalPrice)}</div>
                    </div>
                    <Button variant="dark" size="small" className="w-full mt-4" onClick={handleCheckout}>
                        Checkout Now <FiArrowRight />
                    </Button> 
                </div> 
                 
        </div>
    );
}

export default CartPopup;