import logoImage from '../assets/logo.jpg';

export default function Header() {
    return (
        <header className="flex flex-col items-center bg-darkBackground text-white p-4 lg:flex-row lg:justify-between lg:p-6">
            <div className="flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-start">
                <img src={logoImage} alt="Logo" className="h-20 w-16" />
                <div className="text-2xl font-bold px-4 py-2">Food Order App</div>
            </div>
            <div className='flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-end'>
                <div className="text-2xl font-bold px-4 py-2 mr-4">Cart</div>
            </div>
            
        </header>
    )
}