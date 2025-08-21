import { ShoppingCart, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"
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

function Ecommerce() {
    const productImages = [
        ProductOne,
        ProductTwo,
        ProductThree,
        ProductFour,
    ];

    const thumbNailImages = [
        ThumbnailOne,
        ThumbnailTwo,
        ThumbnailThree,
        ThumbnailFour
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // track which image is showing
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % productImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? productImages.length - 1 : prev - 1
        );
    };



    return (
        <>
            <div className="mx-auto lg:w-[90%] h-screen">
                <Header />

                <div className="w-[100%] bg-[var(--light-grayish-blue)] h-0.5 my-4"></div>
                <main className="grid grid-cols-1 gap-0  lg:grid-cols-2 my-10 p-4 mx-10 lg:gap-10
            ">
                    <div className="img flex-1 my-0">
                        <div className="main relative flex flex-col lg:my-30 xl:my-20">
                            <img src={productImages[currentIndex]} alt="product"
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-xl relative lg:cursor-pointer mb-0 xl:w-2/3" />

                                {/* Navigation (mobile only) */}
                                <div className="grid grid-cols-2 justify-between my-0 items-center mx-5 relative bottom-60 lg:hidden">
                                    <ChevronLeft strokeWidth={3} color="#ff7d1a" onClick={prevImage} className=" rounded-2xl bg-white absolute left-0 cursor-pointer" />
                                    <ChevronRight onClick={nextImage} className=" rounded-2xl bg-white absolute right-0 cursor-pointer" strokeWidth={3} color="#ff7d1a"  />
                                </div>

                            {/* Thumbnail images for desktop */}
                            <div className="thumbnail hidden lg:grid lg:grid-cols-4 lg:gap-0 mx-0 lg:w-5/5 xl:w-4/6 rounded-lg my-2">

                                {thumbNailImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
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
                                                src={productImages[currentIndex]}
                                                alt="modal"
                                                className="w-[300px] rounded-lg"
                                            />
                                            <div className="flex justify-between mt-4">
                                                <ChevronLeft strokeWidth={3}  onClick={prevImage} className="cursor-pointer bg-white rounded-2xl" />
                                                <ChevronRight strokeWidth={3} color="#ff7d1a" onClick={nextImage} className="cursor-pointer bg-white rounded-2xl" />
                                            </div>
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
                        <div className="buttons flex flex-row gap-6">
                            <button className="inline-flex py-4 px-6 w-1/2 bg-[hsl(220,14%,75%)] items-center justify-center gap-6 my-4 rounded-lg font-bold cursor-pointer">
                                <Plus size={15} strokeWidth={3} color="#ff7d1a"/>
                                <p className="font-bold">0</p>
                                <Minus size={15} color="#ff7d1a" strokeWidth={3} />

                            </button>
                            <button className="bg-[#ff7d1a] px-5 py-2 flex items-center justify-center my-4 rounded-lg w-full gap-2 cursor-pointer font-bold">
                                <ShoppingCart size={18} />
                                Add to cart

                            </button>
                        </div>

                    </div>

                </main>
            </div>
        </>
    )
}

export default Ecommerce