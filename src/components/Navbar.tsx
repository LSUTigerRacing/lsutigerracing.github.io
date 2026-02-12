import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { Link } from "react-router-dom";

import { useState, useEffect, use } from "react";

import Logo from "../assets/images/General/tigerracing-logo-purple.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // reset menu open whenever window gets bigger
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 750 && menuOpen) {
                setMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
        console.log("Menu toggled:", !menuOpen);
    }

    useGSAP(() => {
        gsap.from("#navmenu", {
            clipPath: "inset(0 0 100% 0)",
			duration: 1.2,
			ease: "power1.out",
            onUpdate: () => {
                setMenuOpen(true);
            }
        })
        gsap.to("#navmenu", {
            clipPath: "inset(0 0 0 0)",
			duration: 1.2,
			ease: "power1.out",
            onUpdate: () => {
                setMenuOpen(false);
            }
        })
    });

    return (
        <>
            <div className="navbar">
                <div className="navbar-container text-[var(--standard-purple)]!">
                    <Link to="/" className="h-full">
                        <img 
                            src={Logo} 
                            alt="Tiger Racing Logo"
                            className="navbar-logo"
                        />
                    </Link>
                    <div className="navbar-buttons navbar-vis">
                        <Link to="/team">
                            <h4>Team</h4>
                        </Link>
                        <Link to="/cars">
                            <h4>Cars</h4>
                        </Link>
                        <Link to="/join">
                            <h4>Join Us</h4>
                        </Link>
                        <Link to="/sponsor">
                            <h4>Sponsors</h4>
                        </Link>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="navbar-vis text-(--standard-purple) border-1 border-[var(--standard-purple)] rounded-4xl px-4 py-2 ml-4">
                            <h4>Login</h4>
                        </div>
                        <a className="navbar-vis navbar-purple-button" href={`mailto:FormulaLSU@gmail.com`} target="_blank">
                            <h4>Contact Us</h4>
                        </a>
                        <button 
                            onClick={toggleMenu}
                            className='navmenu-vis navbar-purple-button'>
                            <h4 className='text-[16px]'>{menuOpen ? 'Close' : 'Menu'}</h4>
                        </button>
                    </div>
                </div>
            </div>
        
            <div id="navmenu" className={`navmenu-vis ${menuOpen ? "opacity-100" : "opacity-0" } fixed h-fit w-[400px] bg-[#E6E1E7] left-[50%] -translate-x-1/2 rounded-b-[36px] top-[8%] max-[475px]:top-[6%] z-9`}>
                <div className={`w-[90%] h-fit flex flex-col justify-between mx-auto pt-10 pb-6`}>
                    <div className={`${menuOpen ? "" : "hidden" } pt-8 pb-4`}>
                        <h4 className='text-[#595959]'>Explore</h4>
                        <Link 
                            to="/team"
                        >
                            <h3 className='text-[1.2rem]! max-[475px]:text-[1.5rem]!'>Team</h3>
                        </Link>
                        <Link 
                            to="/cars"
                        >
                            <h3 className='text-[1.2rem]! max-[475px]:text-[1.5rem]!'>Cars</h3>
                        </Link>
                        <Link 
                            to="/join"
                        >
                            <h3 className='text-[1.2rem]! max-[475px]:text-[1.5rem]!'>Join Us</h3>
                        </Link>
                        <Link 
                            to="/sponsor"
                        >
                            <h3 className='text-[1.2rem]! max-[475px]:text-[1.5rem]!'>Sponsors</h3>
                        </Link>
                    </div>

                    <div className={`${menuOpen ? "" : "hidden" } pt-2 pb-8`}>
                        <h4 className='text-[#595959]'>Media</h4>
                        <a
                            href="https://www.instagram.com/formulalsu/" 
                            target="_blank"
                        >
                            <h3 className='text-[1.2rem]! max-[475px]:text-[1.5rem]!'>Instagram</h3>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/lsu-tiger-racing-formula-sae/posts/?feedView=all" 
                            target="_blank"
                        >
                            <h3 className='text-[1.2rem]! max-[475px]:text-[1.5rem]!'>Linkedin</h3>
                        </a>
                        <a 
                            href="https://www.facebook.com/FormulaLSU" 
                            target="_blank"
                            
                        >
                            <h3 className='text-[1.2rem]! max-[475px]:text-[1.5rem]!'>Facebook</h3>
                        </a>
                    </div>
 
                    <div className={`${menuOpen ? "" : "hidden" } flex justify-between`}>
                        <div className="navmenu-vis text-(--standard-purple) border-1 border-[var(--standard-purple)] rounded-4xl px-6 py-2">
                            <h4 className='text-[1.1rem]! max-[475px]:text-[1.4rem]!'>Login</h4>
                        </div>
                        <div className="navmenu-vis navbar-purple-button">
                            <h4 className='text-[1.1rem]! max-[475px]:text-[1.4rem]!'>Contact Us</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

