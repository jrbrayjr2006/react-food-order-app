import { useRef } from "react";
import logoImage from '../assets/logo.jpg';
import Modal from "./Modal";
import Meal from "../domain/Meal";

interface HeaderProps {
    mealsInCart: Meal[];
}

export default function Header({mealsInCart}: HeaderProps) {
    const num = mealsInCart.length;

    console.log("Header mealsInCart: ", mealsInCart);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    const showModal = () => {
        modalRef.current?.showModal();
    };
    const closeModal = () => {
        modalRef.current?.close();
    }
    const showModalHandler = () => {
        showModal();
    }
    const closeModalHandler = () => {
        closeModal();
    }

    const handleOpenCheckout = () => {
        console.log("Checkout button clicked");
    }



    return (
        <>
            <header className="flex flex-col items-center bg-darkBackground text-white p-4 lg:flex-row lg:justify-between lg:p-6">
                <div className="flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-start">
                    <img src={logoImage} alt="Logo" className="h-16 w-16 rounded-full border-2 border-menuButtonBackground" />
                    <div className="text-2xl font-bold px-4 py-2">Food Order App</div>
                </div>
                <div className='flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-end'>
                    <button onClick={showModalHandler} className="bg-black text-2xl font-bold px-4 py-2 mr-4 rounded-bl-md cursor-pointer hover:text-slate-200">Cart({num})</button>
                </div>
            </header>
            <Modal ref={modalRef}>
                <div className="flex flex-col bg-modalBackground items-start justify-center text-darkBackground p-4">
                    <h2 className="text-2xl font-bold mb-4">Cart</h2>
                    <p className="text-lg">You have {num} items in your cart.</p>
                    <div className="flex flex-col mt-4">
                        {mealsInCart.map((meal: Meal) => (
                            <div key={meal.id} className="flex items-center justify-between w-full p-2 border-b border-gray-300">
                                <span>{meal.name}</span>
                                <span className="mx-1">-</span>
                                <span>${meal.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <button onClick={closeModalHandler} className="text-black px-4 py-2 rounded-md mt-4 hover:text-semibold">Close</button>
                        <button onClick={handleOpenCheckout} className="button-primary">Go to Checkout</button>
                    </div>
                </div>
            </Modal>
        </>

    )
}