import { ShoppingCart, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import Header from "./header.tsx"
import ProductOne from "../assets/image-product-1.jpg"
import ProductTwo from "../assets/image-product-2.jpg"
import ProductThree from "../assets/image-product-3.jpg"
import ProductFour from "../assets/image-product-4.jpg"
import ThumbnailOne from "../assets/image-product-1-thumbnail.jpg"
import ThumbnailTwo from "../assets/image-product-2-thumbnail.jpg"
import ThumbnailThree from "../assets/image-product-3-thumbnail.jpg"
import ThumbnailFour from "../assets/image-product-4-thumbnail.jpg"
import { Plus, Minus } from "lucide-react"
import { useCart } from "react-use-cart";

type Product = {
  id: string;
  name: string;
  price: number;
  images: ProductImage[];  
  quantity?: number; 
};

type ProductImage = {
  id: string;
  img: string;
};



function Ecommerce() {

    const productImages = [
        { id: 1, img: ProductOne },
        { id: 2, img: ProductTwo },
        { id: 3, img: ProductThree },
        { id: 4, img: ProductFour }
    ];

    const thumbNailImages = [
        { id: 1, img: ThumbnailOne },
        { id: 2, img: ThumbnailTwo },
        { id: 3, img: ThumbnailThree },
        { id: 4, img: ThumbnailFour }

    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % productImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? productImages.length - 1 : prev - 1
        );
    };



    const product : Product = {
        id: "1",
        name: "Sneakers",
        price: 120,
        images: [
            { id: "1", img: ProductOne },
            { id: "2", img: ProductTwo },
            { id: "3", img: ProductThree },
            { id: "4", img: ProductFour }
        ],
    };



    const {
        addItem,
        updateItemQuantity,
        getItem,
    } = useCart();

    const quantity = getItem(product.id)?.quantity ?? 0;


    const setIncrease = () => {
        if (quantity === 0) {
            addItem(product, 1);
        } else {
            updateItemQuantity(product.id, quantity + 1);
        }
    }

    const setDecrease = () => {
        if (quantity > 1) {
            updateItemQuantity(product.id, quantity - 1);
        }
    }



    const addToCart = () => {
        const existingItem = getItem(product.id);

        if (existingItem) {
            updateItemQuantity(product.id, quantity);
            toast.success(`${product.name} quantity updated!`);

        } else {
            addItem(product, quantity);
            toast.success(`${product.name} added to cart!`);

        }
    };



    return (
        <>
            <div className="mx-auto w-[100%] lg:w-[90%] h-screen">
                <Header />

                <div className="w-[100%] bg-[var(--light-grayish-blue)] h-0.5 "></div>
                <main className="grid grid-cols-1 gap-0  lg:grid-cols-2 my-10 p-4 mx-10 lg:gap-10
            ">
                    <div className="img flex-1 my-0">
                        <div className="main relative flex flex-col lg:my-30 xl:my-20">
                            <img src={productImages[currentIndex].img} alt="product"
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-xl relative lg:cursor-pointer mb-0 xl:w-2/3 transition-opacity duration-500 ease-in-out" />

                            {/* Navigation (mobile only) */}
                            <div className="grid grid-cols-2 justify-between my-0 items-center mx-5 relative bottom-60 lg:hidden">
                                <ChevronLeft strokeWidth={3} color="#ff7d1a" onClick={prevImage} className=" rounded-2xl bg-white absolute left-0 cursor-pointer" />
                                <ChevronRight onClick={nextImage} className=" rounded-2xl bg-white absolute right-0 cursor-pointer" strokeWidth={3} color="#ff7d1a" />
                            </div>

                            {/* Thumbnail images for desktop */}
                            <div className="thumbnail hidden lg:grid lg:grid-cols-4 lg:gap-0 mx-0 lg:w-5/5 xl:w-4/6 rounded-lg my-2">

                                {thumbNailImages.map((thumb, index) => (
                                    <img
                                        key={thumb.id}
                                        src={thumb.img}
                                        alt={`thumb-${index}`}
                                        className={`rounded-lg cursor-pointer border-2 w-2/3 ${currentIndex === index ? "border-[#ff7d1a] opacity-75" : "border-transparent"
                                            }`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}

                            </div>

                            {/* Modal popup (desktop only) */}
                            {isModalOpen && (
                                <div className="hidden lg:flex fixed inset-0 bg-black/70 justify-center items-center z-50">
                                    <div className="relative p-4 rounded-lg">
                                        <X
                                            className="absolute -top-10 right-2 text-xl cursor-pointer"
                                            onClick={() => setIsModalOpen(false)}
                                            strokeWidth={3} color="#ff7d1a"
                                        />

                                        <img
                                            src={productImages[currentIndex].img}
                                            alt="modal"
                                            className="w-[500px] rounded-lg"
                                        />
                                        <div className="flex justify-between mt-4">
                                            <ChevronLeft strokeWidth={3} onClick={() => setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length)} className="cursor-pointer bg-white rounded-2xl" />
                                            <ChevronRight strokeWidth={3} color="#ff7d1a" onClick={() => setCurrentIndex((prev) => (prev + 1) % productImages.length)} className="cursor-pointer bg-white rounded-2xl" />
                                        </div>
                                    </div>

                                    <div className="-mt-12 flex flex-col gap-2">

                                        {thumbNailImages.map((thumb, index) => (
                                            <img
                                                key={thumb.id}
                                                src={thumb.img}
                                                alt={`thumb-${index}`}
                                                className={`rounded-lg cursor-pointer border-2 w-3/5 ${currentIndex === index ? "border-[#ff7d1a] opacity-75" : "border-transparent"
                                                    }`}
                                                onClick={() => setCurrentIndex(index)}
                                            />
                                        ))}
                                    </div>

                                </div>
                            )}

                        </div>

                    </div>
                    <div className=" text-left max-w-xl my-5 lg:my-25 p-6 items-start justify-start md:items-center md:justify-center">
                        <p className="mt-0 mb-4 text-[var(--dark-grayish-blue)] font-[550]">SNEAKER COMPANY</p>
                        <h1 className="font-bold text-3xl mb-8">Fall Limited Edition Sneakers</h1>
                        <p className="leading-relaxed text-[var(--dark-grayish-blue)]">These low-profile sneakers are your perfect casual wear companion. Featuring
                            a durable rubber outer sole, they'll withstand everything the weather can offer.
                        </p>

                        <div className="inline-flex gap-4 mx-auto my-4">
                            <h2 className="text-3xl font-bold">$125.00</h2>
                            <p className="font-bold bg-black text-white px-4 py-1 rounded-lg text-center ">50%</p>
                        </div>


                        <p className="font-semibold text-[var(--dark-grayish-blue)]"> <s>$250.00</s>
                        </p>



                        <div className="buttons block md:flex md:flex-row gap-6">

                            {/* Quantity Button */}
                            <div className="inline-flex py-4 px-6 w-full lg:w-1/2 bg-[hsl(220,14%,75%)] items-center justify-center gap-6 my-4 rounded-lg font-bold cursor-pointer">
                                <button
                                    onClick={setDecrease}
                                    className="flex items-center justify-center"
                                >
                                    <Minus size={15} color="#ff7d1a" strokeWidth={3} className="cursor-pointer" />
                                </button>

                                <p className="font-bold">
                                    {/* {items.find((item) => item.id === product.id)?.quantity || 0} */}
                                    {quantity}
                                </p>

                                <button
                                    onClick={setIncrease}
                                    className="flex items-center justify-center"
                                >
                                    <Plus size={15} strokeWidth={3} color="#ff7d1a" className="cursor-pointer" />
                                </button>
                            </div>
                            {/* Add to Cart Button */}
                            <button
                                disabled={quantity === 0}
                                className={`px-5 py-2 rounded-lg flex items-center justify-center my-4 w-full gap-2 cursor-pointer font-bold
                                 ${quantity === 0 ? "bg-orange-100 cursor-not-allowed" : "bg-[#ff7d1a] text-black cursor-pointer"}`}
                                // className="bg-[#ff7d1a] px-5 py-2 flex items-center justify-center my-4 rounded-lg w-full gap-2 cursor-pointer font-bold"
                                onClick={addToCart}
                            >
                                <ShoppingCart size={18} />
                                Add to Cart
                            </button>
                        </div>


                    </div>

                </main>
            </div>
        </>
    )
}

export default Ecommerce