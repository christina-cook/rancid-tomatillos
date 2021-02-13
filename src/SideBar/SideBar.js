import React from 'react'
import home from '../assets/home.png'
import search from '../assets/search.png'
import './SideBar.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Form from '../Form/Form'

const SideBar = ({backToMain}) => {
    return (
      <aside>
        <div className="sidebarIcons">
          <NavLink to='/'>
            <img
              className="homeIcon"
              src={home}
              alt="home-icon"
              // onClick={backToMain}
            />
          </NavLink>
          <img
            className="searchIcon"
            src={search}
            alt="magnifying-glass"
          />
        </div>
        <Form />
        <h1>Rancid Tomatillos</h1>
      </aside>
    );
}

export default SideBar

SideBar.propTypes = {
  backToMain: PropTypes.func
};
