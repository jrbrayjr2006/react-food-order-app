import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';


interface DialogRef {
  show: () => void;
  close: () => void;
  showModal: () => void;
}
import { ReactNode } from "react";

type DialogProps = {
  children: ReactNode;
  className?: string;
};

const Modal = forwardRef<DialogRef, DialogProps>(({ children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  useImperativeHandle(ref, () => ({
    show: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
    showModal: () => dialogRef.current?.showModal(),
  }));
  let dialogClassName = "bg-modalBackground rounded-sm mx-auto justify-center mt-20 w-1/3";
  if (dialogRef.current) {
    dialogClassName = `${dialogClassName} ${dialogRef.current.className}`;
  }
  return (
    createPortal(
      <dialog ref={dialogRef} className={dialogClassName} >
          {children}
      </dialog>, document.getElementById('modal-root') as HTMLElement // Ensure this ID matches your HTML structure
    )
  );
});

export default Modal;