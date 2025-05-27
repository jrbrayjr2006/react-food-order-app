

type CheckoutProps = {
    showModal: () => void;
    close: () => void;
};


export default function Checkout({ showModal, close }: CheckoutProps) {

    function handleCheckout(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        // Simulate a checkout process
        setTimeout(() => {
            close();
            showModal();
        }, 2000);
        // Here you would typically handle the payment processing
        fetch('https://api.example.com/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cardNumber: '1234 5678 9012 3456',
                expiryDate: '12/23',
                cvv: '123',
                billingAddress: '123 Main St, City, Country',
                zipCode: '12345',
                phoneNumber: '+1 234 567 8900',
                email: 'jondoe@mail.com'
            }),
        });
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <form className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-bold mb-4">Checkout</h2>
                <p>Thank you for your order!</p>
                <p className="mb-4">Please enter your payment details:</p>
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block mb-2">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="1234 5678 9012 3456"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="MM/YY"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="cvv" className="block mb-2">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="123"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="billingAddress" className="block mb-2">Billing Address</label>
                    <input
                        type="text"
                        id="billingAddress"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="123 Main St, City, Country"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="zipCode" className="block mb-2">Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="12345"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="+1 234 567 8900"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="example@email.com"></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="notes" className="block mb-2">Notes</label>
                    <textarea
                        id="notes"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Any special instructions..."></textarea>
                </div>
                <button
                    onClick={close}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Close
                </button>
                <button
                    onClick={handleCheckout}
                    className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Checkout
                </button>
            </form>
        </div>
    );
}