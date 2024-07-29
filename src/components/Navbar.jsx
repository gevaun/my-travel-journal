import globeIcon from '../assets/globeIcon.svg';

export default function Navbar() {
    return (
        <nav className="bg-indigo-500 p-6">
            <div className='flex justify-center items-center space-x-3'>
                <img src={globeIcon} alt="globe icon" className='w-8' />
                <h1 className='text-slate-50 text-xl font-medium'>my travel journal.</h1>
            </div>
        </nav>
    )
}