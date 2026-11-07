
import { useState, useEffect } from 'react'
import './Navbar.css'

const menuItems = [
  {
    name: 'Products',
    dropdown: [
      { label: 'Laboratory Furniture', link: '#services' },
      { label: 'Fumehoods', link: '#services' },
      { label: 'BioSafety Cabinets', link: '#services' }
    ]
  },
  {
    name: 'Our Services',
    dropdown: [
      { label: 'Laboratory Design', link: '#services' },
      { label: 'Installation', link: '#process' },
      { label: 'Maintenance', link: '#process' }
    ]
  },
  {
    name: 'Other Works',
    dropdown: [
      { label: 'Research Labs', link: '#projects' },
      { label: 'Healthcare Projects', link: '#projects' },
      { label: 'Educational Labs', link: '#projects' }
    ]
  },
  {
    name: 'Overview',
    dropdown: [
      { label: 'About Us', link: '#about' },
      { label: 'Our Team', link: '#who-we-are' },
      { label: 'Our Expertise', link: '#who-we-are' }
    ]
  }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name) => {
    setOpenDropdown((previous) =>
      previous === name ? null : name
    )
  }

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>

      <div className="logo">
        LabCreator
        <h5 className="brand">A Brand of CHAMEZA GROUP</h5>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>

        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        {menuItems.map((menu) => (
          <li
            className="dropdown"
            key={menu.name}

            onMouseEnter={() => {
              if (window.innerWidth > 992) {
                setOpenDropdown(menu.name)
              }
            }}

            onMouseLeave={() => {
              if (window.innerWidth > 992) {
                setOpenDropdown(null)
              }
            }}
          >
            <a
              href="#"
              aria-expanded={openDropdown === menu.name}
              onClick={(e) => {
                e.preventDefault()

                if (window.innerWidth <= 992) {
                  toggleDropdown(menu.name)
                }
              }}
            >
              {menu.name}
              <span className="arrow">⌄</span>
            </a>

            <ul
              className={`dropdown-menu ${
                openDropdown === menu.name ? 'dropdown-visible' : ''
              }`}
            >
              {menu.dropdown.map((item) => (
                <li key={item.label}>
                  <a href={item.link} onClick={closeMenu}>
                    {item.label}
                    <span>+</span>
                  </a>
                </li>
              ))}
            </ul>

          </li>
        ))}

        <li>
          <a href="#projects" onClick={closeMenu}>Resources</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Blog</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

      </ul>

      <a
        href="#contact"
        className="quote-button"
        onClick={closeMenu}
      >
        FREE QUOTE
      </a>

    </nav>
  )
}

export default Navbar
