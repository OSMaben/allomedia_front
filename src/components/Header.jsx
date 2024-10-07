import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
const ListItem = ({ children, NavLink }) => {
    return (
        <li>
            <a
                href={NavLink}
                className="mr-1 flex rounded-full border border-transparent px-[18px] py-[5px] text-base font-medium text-dark hover:border-primary hover:text-primary dark:text-white lg:inline-flex lg:text-white lg:hover:border-white lg:hover:text-white"
            >
                {children}
            </a>
        </li>
    );
};


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const  nav = useNavigate();
    const [token, setToken] = useState(null);
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    const logout =()=>
    {
        localStorage.removeItem('token');
        nav('/auth/login');
    }


    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="container mx-auto">
                <div className="relative flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60">
                        <a href="/#" className="block w-full py-5">
                            <img
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                                alt="logo"
                                className="w-full"
                            />
                        </a>
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                className={' navbarTogglerActive absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            </button>
                            <nav
                                className={'absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent false '}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="/#">Home</ListItem>
                                    <ListItem NavLink="/#">About Us</ListItem>
                                    <ListItem NavLink="/#">Services</ListItem>
                                    <ListItem NavLink="/#">Blog</ListItem>
                                    <ListItem NavLink="/#">Contact</ListItem>
                                </ul>
                            </nav>
                        </div>

                        <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
                            {token ? (
                                <div className="flex items-center justify-end">
                                    <button onClick={logout}
                                            className="inline-flex items-center justify-center py-3 text-base font-medium text-center transition bg-white rounded-md px-7 text-dark shadow-1 hover:bg-gray-2 hover:text-body-color"
                                    >
                                        logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center justify-end">
                                    <Link
                                        to={'/auth/signup'}
                                        className="inline-flex items-center justify-center py-3 text-base font-medium text-center transition bg-white rounded-md px-7 text-dark shadow-1 hover:bg-gray-2 hover:text-body-color"
                                    >
                                        Start Now
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Navbar;