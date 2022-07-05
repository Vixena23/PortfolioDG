import { useTranslation } from "react-i18next";
import i18next from "i18next";
import About from "./Components/About";

import Technology from "./Components/Technology";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact";
import WhatUFind from "./Components/WhatUFind";
import Footer from "./Components/Footer";

import Home from "./Components/Home";

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'pl',
    name: 'Polski',
    country_code: 'pl'
  }
]

function App() {
  const { t } = useTranslation()
  
  // Icon Component

  const GlobeIcon = ({width = 24, height = 24}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-globe text-color-own" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg>


  )

  const menuToggler = () => {

    var menu_btn = document.querySelector("#menu-btn")
    var sidebar = document.querySelector("#sidebar")
    var container = document.querySelector(".my-container ")
    console.log(container)
    console.log(sidebar)
    console.log(sidebar)
    if(menu_btn !== null && sidebar!==null && container!== null){

      sidebar.classList.toggle("active-nav")
      menu_btn.classList.toggle("change")
      menu_btn.classList.toggle("active-cont")
      
      // container.classList.toggle("active-cont")
    }
    else{
      console.log("error")
    }
  }
 

  return (
    <>
    <div className="container-lg m-0 p-0 mx-auto">
    <div id="navbar">
      <div className="icon-container p-3" id="menu-btn" onClick={menuToggler}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="top-right dropdown ">
          <button className="btn btn-link dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <GlobeIcon />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({code, name, country_code}) => (
              <li key={country_code}>
                <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)}>
                  <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
      </div>
    </div>

    {/* Navbar section */}
    <div className="sss">
    <nav className="navbar navbar-expand d-flex flex-column align-item-start " id="sidebar">
      <div>
        <div className="header_img mt-5"> <img src="https://raw.githubusercontent.com/vixeba23-design-patterns/images/main/300x375.jpg" alt="profile" /></div>
        </div>
        <div className="desc text-center my-3">
            <div className="desc-name">Dominik Glegoła</div>
            <div>FULLSTACK DEVELOPER</div>
        </div>
        <ul className="navbar-nav d-flex flex-column  w-100">
            <li className="nav-item w-100">
              <a className="nav-link text-center" aria-current="#home" href="#home">{t('sec1_navbar')}</a>
            </li>
            
            <li className="nav-item w-100">
                <a href="#technology" className="nav-link text-center">{t('sec3_navbar')}</a>
            </li>

            <li className="nav-item w-100">
                <a href="#projects" className="nav-link text-center">{t('sec4_navbar')}</a>
            </li>

            <li className="nav-item w-100">
                <a href="#contact" className="nav-link text-center">{t('sec5_navbar')}</a>
            </li>
            <li className="nav-item w-100 my-3">
                
            </li>
            <li className="nav-item w-100 ms-4">
              <div className="nav-info ">{t('phone')}: {t('contact.tel')}</div>
            </li>
            <li className="nav-item w-100 ms-4">
              <div className="nav-info">{t('contact.email')}</div>
            </li>
            <li className="nav-item w-100 ms-4">
              <div className="nav-info">&copy;{new Date().getFullYear()}</div>
            </li>
            
          
        </ul>
     </nav>
     </div>
        <section className="p-4 my-container">
        <div className="ff">
            
            <Home test = "test home"/>
            {/* <About test = "test about" /> */}
            <WhatUFind />
            <Technology test = "test technology" />
            <Projects test = "test project" />
            
            
            <Contact test = "test contact" />
            {/* <Footer /> */}

          <div className="popUp" id="popUp"></div>
        </div>
        </section>
        </div>

    </>
  );
}

export default App;
