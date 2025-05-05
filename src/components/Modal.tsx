import { forwardRef, useImperativeHandle, useRef } from "react";

interface DialogRef {
  show: () => void;
  close: () => void;
  showModal: () => void;
}
type DialogProps = {
  showModal: () => void,
  close: () => void,
};
const Modal = forwardRef<DialogRef, DialogProps>((_, ref) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  useImperativeHandle(ref, () => ({
    show: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
    showModal: () => dialogRef.current?.showModal(),
  }));
  return (
    <dialog ref={dialogRef} className="bg-modalBackground rounded-sm" >
        Hello World!
    </dialog>
  );
});

export default Modal;