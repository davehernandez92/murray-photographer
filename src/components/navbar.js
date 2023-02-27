
import Link from 'next/link'
import { useState } from 'react'
import NavItem from './navItem'





export default function Navbar() {

    const MENU_LIST =[
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Portfolio',
            href: '/portfolio'
        },
        {
            text: 'Bio',
            href: '/bio'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ]

    const [navSticky, setNavSticky] = useState(false)
    const [navActive, setNavActive] = useState(false)
    const [activeIdx, setActiveIdx] = useState(0)

    
   const navChange = () => {
    if(window.scrollY >= 55){
        setNavSticky(true)
    }else {
        setNavSticky(false)
    }
   }

   window.addEventListener('scroll', navChange)
   
  return (
    <header className={navSticky ? 'sticky' : ''}>
        <nav className='nav'>
            <Link href={"/"} onClick={() => setActiveIdx(0)}>
               
                    <h1> LOGO HERE </h1>
                
            </Link>
            <div
                onClick={() => setNavActive(!navActive)}
                 className={` ${navActive ? "active" : ""} nav__menu-bar`}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                {
                    MENU_LIST.map((menu, idx) => {
                        return( 
                            <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }} 
                            key={menu.text}>
                                <NavItem active={activeIdx === idx} {...menu}/>
                            </div>
                        );
                    })}
            </div>
        </nav>
    </header>
  )
}
