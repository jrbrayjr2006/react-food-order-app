import logoImage from '../assets/logo.jpg';

interface HeaderProps {
    mealsInCart: number;
}

export default function Header({mealsInCart}: HeaderProps) {
    const num = mealsInCart;

    console.log("Header mealsInCart: ", mealsInCart);



    return (
        <header className="flex flex-col items-center bg-darkBackground text-white p-4 lg:flex-row lg:justify-between lg:p-6">
            <div className="flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-start">
                <img src={logoImage} alt="Logo" className="h-16 w-16 rounded-full border-2 border-menuButtonBackground" />
                <div className="text-2xl font-bold px-4 py-2">Food Order App</div>
            </div>
            <div className='flex items-center mb-4 lg:mb-0 lg:flex-row lg:items-end'>
                <a className="text-2xl font-bold px-4 py-2 mr-4 cursor-pointer hover:text-slate-200">Cart({num})</a>
            </div>
            
        </header>
    )
}