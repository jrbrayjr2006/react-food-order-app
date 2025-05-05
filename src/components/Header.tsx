import logoImage from '../assets/logo.jpg';

export default function Header() {
    const numberOfItemsInCart: number = 0;

    return (
        <header className="flex flex-col items-center bg-darkBackground text-white p-4 lg:flex-row lg:justify-between lg:p-6">
            <div className="flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-start">
                <img src={logoImage} alt="Logo" className="h-16 w-16 rounded-full border-2 border-menuButtonBackground" />
                <div className="text-2xl font-bold px-4 py-2">Food Order App</div>
            </div>
            <div className='flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-end'>
                <a className="text-2xl font-bold px-4 py-2 mr-4 cursor-pointer hover:text-slate-200">Cart({numberOfItemsInCart})</a>
            </div>
            
        </header>
    )
}