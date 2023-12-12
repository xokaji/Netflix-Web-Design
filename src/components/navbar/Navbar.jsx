import { useState } from "react";
import "./Navbar.scss";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset === 0 ? false: true);
    return () => (window.scroll = null);
  }
  return (

    <div className={ isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">

            <div className="left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                  alt="logo"
                />
                <span>Home Page</span>
                <span>Series</span>
                <span>Movies</span>
                <span>My List</span>
            </div>

            <div className="right">
            <span class="material-symbols-outlined">search</span>
            <span>KIDS</span>
            <span class="material-symbols-outlined">notifications</span>

              
                <img
                  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              <div className="profile">

                <span class="material-symbols-outlined">arrow_drop_down</span>
                <div className="options">
                  <span>Settings</span>
                  <span>Log Out</span>
                </div>
              </div> 
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar