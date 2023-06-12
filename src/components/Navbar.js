import { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './NavbarStyle.css'

class Navbar extends Component {
  state = { clicked: false } // convert into useState
  handlClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">TourTango</h1>
        <div className="menu-icons" onClick={this.handlClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((menu, index) => {
            return (
              <li key={index}>
                <Link to={menu.url} className={menu.cName}>
                  <i className={menu.icon}></i>
                  {menu.title}
                </Link>
              </li>
            )
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    )
  }
}

export default Navbar