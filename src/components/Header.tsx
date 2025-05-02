import mobileHeader from '../assets/images/background-pattern-mobile.svg';
import desktopHeader from '../assets/images/background-pattern-desktop.svg';

export default function Header() {
    return (
        <header>
            <img
                src={mobileHeader}
                alt="header image"
                className='h-40 w-full object-cover md:hidden'
            />
            <img
                src={desktopHeader}
                alt="header image"
                className='h-50 w-full object-cover hidden md:block '
            />
        </header>
    );
}