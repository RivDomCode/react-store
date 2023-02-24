import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            Logo
        </div>
        <div className="navbar__links">
            <Link to="/crud">Create a Product</Link>
            <Link to="/favorites">Favorites List</Link>
            <Link to="/cart">Shopping-Cart</Link>
        </div>
    </div>
  )
}

export default Navbar