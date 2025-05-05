import { useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

interface DialogModalRef {
    show: () => void;
    close: () => void;
}

type CheckoutModalProps = {
    showModal: () => void;
    close: () => void;
};

import { forwardRef } from 'react';

const CheckoutModal = forwardRef<DialogModalRef, CheckoutModalProps>(function CheckoutModal(_, ref) {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => {
        return {
            show: () => dialogRef.current?.showModal(),
            close: () => dialogRef.current?.close()
        }
    });

    return createPortal(<dialog ref={dialogRef} className="bg-modalBackground rounded-sm">Checkout</dialog>, document.getElementById('root')!);
});

export default CheckoutModal;