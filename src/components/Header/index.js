// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="card1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="heading1">Wave</h1>
    </div>
    <ul className="card1">
      <li className="Item">
        <Link className="heading" to="/">
          Home
        </Link>
      </li>

      <li className="Item">
        <Link className="heading" to="/about">
          About
        </Link>
      </li>

      <li className="Item">
        <Link className="heading" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
