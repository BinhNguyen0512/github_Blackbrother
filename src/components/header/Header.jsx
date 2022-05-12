import { useEffect, useRef } from 'react'

import { Link, useLocation } from 'react-router-dom'

const mainNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Products',
    path: '/catalog'
  },
  {
    display: 'Blog',
    path: '/blog'
  },
  {
    display: 'Contact',
    path: '/contact'
  }
]


const Header = () => {

  const { pathname } = useLocation()

  const activeNav = mainNav.findIndex(e => e.path === pathname)

  const headerRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('shrink')
      }
      else {
        headerRef.current.classList.remove('shrink')
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const menuRight = useRef()

  const menuToggle = () => menuRight.current.classList.toggle('active')
  return (
    <div className="header" ref={headerRef}>
      <div className="container">



        <div className="header__logo">
          MISSOUT
        </div>


        <div className="header__menu">



          <div className="header__menu__center" ref={menuRight}>
            <div
              className="header__menu__center__close"
              onClick={menuToggle}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>

            {
              mainNav.map((item, index) => (
                <div
                  className={`header__menu__item header__menu__center__item ${index === activeNav ? 'active' : ''}`}
                  key={index}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    {item.display}
                  </Link>
                </div>
              ))
            }
          </div>

          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="fa-solid fa-magnifying-glass"></i>

            </div>

            <div className="header__menu__item header__menu__right__item">
              <Link to='/cart'>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>

            </div>

            <div className="header__menu__item header__menu__right__item">
              <i className="fa-solid fa-user"></i>
            </div>

            <div
              className="header__menu__item header__menu__right__item header__menu__right__toggle-mobile"
              onClick={menuToggle}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
