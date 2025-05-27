import { ReactNode } from "react";
import Modal from "./Modal";

interface CartProps {
    children: ReactNode;
}

export default function Cart({ children }: CartProps) {
    return (
        <Modal className="bg-modalBackground rounded-sm mx-auto justify-center mt-20 w-1/3">
            <h2>Your Cart</h2>
            {children}
        </Modal>
    );
}