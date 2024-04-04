import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'boxicons';

function Header() {
    const [mostrarEncabezado, setMostrarEncabezado] = useState(false);

    const handleClickBoton = () => {
        setMostrarEncabezado(!mostrarEncabezado);
    };

    const handleCloseMenu = () => {
        setMostrarEncabezado(false);
    };

    return (
        <>
            <header className="text-center flex justify-between items-center py-3 px-7 sm:justify-between sm:w-full header box-border">
                <div className="text-2xl">
                    <Link to="/" className='flex items-center gap-0'>
                        <img src="/octa-removebg.png" alt="Octago" className='max-h-14' />
                        {/* Octagon */}
                    </Link>
                </div>
                <nav className={`sm:block ${mostrarEncabezado ? 'block' : 'hidden'} absolute bg-white top-16 left-0 w-full h-full flex justify-center items-center sm:top-0 sm:relative sm:w-auto sm:h-auto`}>
                    <ul className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center">
                        <li>
                            <Link to="/" onClick={handleCloseMenu} className='text-xl'>Blog</Link>
                        </li>
                        <li>
                            <Link to="acerca-de" onClick={handleCloseMenu} className='text-xl'>Acerca De</Link>
                        </li>
                    </ul>
                </nav>
                <button className='visible sm:hidden' onClick={handleClickBoton}>
                    <box-icon name='menu'></box-icon>
                </button>
            </header>
        </>
    );
}

export default Header;