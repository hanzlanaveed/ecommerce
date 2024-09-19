    import React from 'react';
    import Logo from "../assets/logo.PNG";
    import Fb from "../assets/fb.PNG";

    const Footer = () => {
    return (
        <div>
        <div className="flex border border-t-2 border-x-0  shadow-gray-800">
            
            <div className="flex sm:flex-col lg:flex-row bg-slate-50 px-10 justify-between lg:py-20 sm:py-5 rounded-lg divide-solid  divide-red-600  sm:divide-y-2">
        
            <section className="flex flex-col text-justify text-gray-800 lg:w-2/5 items-center pl-6">
                <img src={Logo} className="lg:self-start w-60" alt="Main Logo" />
                <p className="mt-4 text-lg">
                    HUDSON is a menswear brand, designed entirely in-house, stand-alone Pakistan’s no. 1 Shirt Brand. From timeless tailoring to premium formal shirts, we present a considered edit of quality, wearable clothes, and accessories bearing the HUDSON name.
                </p>
                <img src={Fb} className="lg:self-start mt-4" alt="Facebook Logo" />
            </section>

            <section className="flex flex-col text-justify text-gray-800 lg:w-1/6 pt-5 lg:ml-20 lg:pl-5 sm:pb-4">
                <label className="text-xl font-medium mb-2">Informations</label>
                <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">About Us</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">How to Order</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Contact Us</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Size Guide</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Returns & Exchange Policy</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Careers</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Blog</a>
                </div>
            </section>

    
            <section className="flex flex-col text-justify text-gray-800 lg:w-1/6 pt-5 lg:pl-5 sm:pb-4">
                <label className="text-xl font-medium mb-2">Customer Services</label>
                <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Privacy Policy</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Shipping Policy</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Payment Options</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">FAQ's</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Made To Measure</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Made To Measure Stores</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">Loyality Card</a>
                </div>
            </section>

            
            <section className="flex flex-col text-justify text-gray-800 lg:w-1/6 pt-5 lg:pl-5 sm:pb-4">
                <label className="text-xl font-medium mb-2">Store Information</label>
                <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">+92 42 111 789 456</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">+92 345 4037778</a>
                <a href="#" className="text-gray-600 text-base hover:underline hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2">askus@uniworth.com</a>
                </div>
            </section>
            </div>
        </div>

        
        <div className="py-2 px-16 text-center text-white bg-gray-800 justify-between flex sm:flex-col lg:flex-row">
            <p> Hudson DRESS CO. All Rights Reserved.</p>
            <p>100% Safe Checkout</p>
        </div>
        </div>
    );
    };

    export default Footer;
