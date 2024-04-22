import { useContext, useState } from 'react'
import { BiBrightness } from 'react-icons/bi'
import { IoSunnySharp } from 'react-icons/io5'
import { BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { ThemeContext } from '../contexts/Theme' 

// import './Css/Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const projects = [
  
    {
      name: 'LEARN ASCENT (MOBILE APPLICATION)',
      description:
        'Mobile Learning Management System (LMS) to deliver a feature-rich, scalable, and user-friendly solution that revolutionizes the way users engage with content on mobile devices.'                                                                                                                      ,
      stack: ['Flutter', 'Firebase', 'Material UI'],
      sourceCode: 'https://github.com/NisalWijethunga',
      livePreview: 'https://github.com/NisalWijethunga',
    },
    {
      name: 'Dose Diary Medicine management system',
      description:
        'An application designed to handle the operations of the medicine stock at the Noble Aged Nursing Care Home, built by React framework integrated with NodeJS and MSSQL Server.',
      stack: ['ReactJS', 'NodeJs', 'MYSQL Server'],
      sourceCode: 'https://github.com/NisalWijethunga',
      livePreview: 'https://github.com/NisalWijethunga',
    },
    {
      name: 'Flight Management System',
      description:
        'Phoenix Airline System is a web application with a seamless performing online flight booking system. Processes such as user management, flight management, and ticket management.',
      stack: ['ReactJS', 'JAVA', 'HTML'],
      sourceCode: 'https://github.com/NisalWijethunga',
      livePreview: 'https://github.com/NisalWijethunga',
    },
  ]
  const skills = [
  
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'JAVA',
    'Flutter',
    'Material UI',
    'Git',
    'PHP',
    'MYSQL',
    'Firebase',
  ]
  const contact = {
  
    email: 'nisalwijethunge@gmail.com',
    FormData
    
  
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
            <a
              href='signupform'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Sign up
            </a>
          </li>
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <IoSunnySharp /> : <BiBrightness />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CgClose /> : <BiMenu />}
      </button>
    </nav>
  )
}

export default Navbar
