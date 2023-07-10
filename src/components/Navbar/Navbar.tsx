import logo from 'assets/icons/logo.png'
import avatar from 'assets/icons/user.png'
import search from 'assets/icons/search.png'
import globe from 'assets/icons/globe.png'
import { Link } from 'react-router-dom'

const navLinks = [
    {
        name: "About Us",
        link: 'about'
    },
    {
        name: "Products",
        link: 'products'
    },
    {
        name: "Pricing",
        link: 'pricing'
    },
    {
        name: "Learning",
        link: 'learning'
    },
    {
        name: "Partner",
        link: 'partner'
    },
]
const Navbar = () => {
    return (
        <nav className='fixed w-full border h-[10vh] flex items-center justify-between px-10 z-50 shadow-sm bg-[#f2cccc]'>
            <Link to='/home' className='border basis-1/3'>
                <img src={logo} alt="" className='max-h-[50px]'/>
            </Link>
            <div className='border basis-2/3 flex items-center justify-evenly'>
                {
                    navLinks.map((navLink, index) => (
                        <Link to={navLink.link} key={index} className='text-[#505050]'>
                            {navLink.name}
                        </Link>
                    ))
                }
            </div>
            <div className='border basis-1/3 flex items-center justify-start gap-x-10'>
                    <img src={avatar} alt="" />
                    <img src={search} alt="" />
                    <img src={globe} alt="" />
            </div>
        </nav>
    )
}

export default Navbar 